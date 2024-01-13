import { createAction, props } from "@ngrx/store"
import { Customer } from "../../../_model/Customer"

export const LOAD_CUSTOMER = '[customer] load customer'
export const LOAD_CUSTOMER_SUCCESS = '[customer] load customer success'
export const LOAD_CUSTOMER_FAIL = '[customer] load customer fail'

export const GET_CUSTOMER = '[customer] get customer'
export const GET_CUSTOMER_SUCCESS = '[customer] get customer success'

export const ADD_CUSTOMER = '[customer] add customer'
export const ADD_CUSTOMER_SUCCESS = '[customer] add customer success'

export const UPDATE_CUSTOMER = '[customer] update customer'
export const UPDATE_CUSTOMER_SUCCESS = '[customer] update customer success'

export const DELETE_CUSTOMER = '[customer] delete customer'
export const DELETE_CUSTOMER_SUCCESS = '[customer] delete customer success'

export const SHOW_ALERT = '[customer] show alert'


export const loadCustomer = createAction(LOAD_CUSTOMER)
export const loadCustomerSuccess = createAction(LOAD_CUSTOMER_SUCCESS, props<{ list: Customer[] }>())
export const loadCustomerFail = createAction(LOAD_CUSTOMER_FAIL, props<{ errormessage: string }>())

export const getCustomer = createAction(GET_CUSTOMER, props<{ code: string }>())
export const getCustomerSuccess = createAction(GET_CUSTOMER_SUCCESS, props<{ obj: Customer }>())


export const addCustomer = createAction(ADD_CUSTOMER, props<{ inputdata: Customer }>())
export const addCustomerSuccess = createAction(ADD_CUSTOMER_SUCCESS)

export const updateCustomer = createAction(UPDATE_CUSTOMER, props<{ inputdata: Customer }>())
export const updateCustomerSuccess = createAction(UPDATE_CUSTOMER_SUCCESS)

export const deleteCustomer = createAction(DELETE_CUSTOMER, props<{ code: string }>())
export const deleteCustomerSuccess = createAction(DELETE_CUSTOMER_SUCCESS, props<{ code: string }>())

export const showAlert = createAction(SHOW_ALERT, props<{ message: string, resptype: string }>())
export const emptyAction = createAction('emptyaction')