import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "../../_service/master.service";
import { addCustomer, addCustomerSuccess, deleteCustomer, deleteCustomerSuccess, emptyAction, getCustomer, getCustomerSuccess, loadCustomer, loadCustomerFail, loadCustomerSuccess, showAlert, updateCustomer, updateCustomerSuccess } from "./Customer.Actions";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable()
export class CustomerEffects {
    constructor(private action$: Actions, private service: MasterService, private _snackbar: MatSnackBar) {

    }

    _loadCustomer = createEffect(() =>
        this.action$.pipe(
            ofType(loadCustomer),
            exhaustMap((action) => {
                return this.service.GetAllCustomer().pipe(
                    map((data) => {
                        return loadCustomerSuccess({ list: data })
                    }),
                    catchError((_err) => of(loadCustomerFail({ errormessage: _err.message })))
                )
            })
        )
    )

    _getCustomer = createEffect(() =>
    this.action$.pipe(
        ofType(getCustomer),
        exhaustMap((action) => {
            return this.service.GetCustomerbycode(action.code).pipe(
                map((data) => {
                    return getCustomerSuccess({ obj: data })
                }),
                catchError((_err) => of(emptyAction()))
            )
        })
    )
)

    _addCustomer = createEffect(() =>
        this.action$.pipe(
            ofType(addCustomer),
            switchMap((action) => {
                return this.service.CreateCustomer(action.inputdata).pipe(
                    switchMap(() => {
                        return of(addCustomerSuccess(), showAlert({ message: 'Added successfully', resptype: 'pass' }))
                    }),
                    catchError((_err) => of(showAlert({ message: 'Failed to add', resptype: 'fail' })))
                )
            })
        )
    )

    _updateCustomer = createEffect(() =>
        this.action$.pipe(
            ofType(updateCustomer),
            switchMap((action) => {
                return this.service.UpdateCustomer(action.inputdata).pipe(
                    switchMap(() => {
                        return of(updateCustomerSuccess(), showAlert({ message: 'Updated successfully', resptype: 'pass' }))
                    }),
                    catchError((_err) => of(showAlert({ message: 'Failed to update', resptype: 'fail' })))
                )
            })
        )
    )

    _deleteCustomer = createEffect(() =>
        this.action$.pipe(
            ofType(deleteCustomer),
            switchMap((action) => {
                return this.service.DeleteCustomer(action.code).pipe(
                    switchMap(() => {
                        return of(deleteCustomerSuccess({code:action.code}), showAlert({ message: 'Removed successfully', resptype: 'pass' }))
                    }),
                    catchError((_err) => of(showAlert({ message: 'Failed to delete', resptype: 'fail' })))
                )
            })
        )
    )

    _showalert = createEffect(() =>
        this.action$.pipe(
            ofType(showAlert),
            exhaustMap((action) => {
                return this.Showsnackbaraler(action.message, action.resptype).afterDismissed().pipe(
                    map(() => {
                        return emptyAction();
                    })
                )
            })
        )
    )

    Showsnackbaraler(message: string, resptype: string = 'fail') {
        let _class = resptype === 'pass' ? 'text-green' : 'text-red';
        return this._snackbar.open(message, 'OK', {
            verticalPosition: 'top',
            horizontalPosition: 'end',
            duration: 5000,
            panelClass: [_class]
        })
    }

}