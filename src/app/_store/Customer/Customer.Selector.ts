import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomerModel } from "../../../_model/Customer";

const getcustomerstate = createFeatureSelector<CustomerModel>('customer');


export const getCutomerList = createSelector(getcustomerstate, (state) => {
    return state.list;
})

export const getEditdata = createSelector(getcustomerstate, (state) => {
    return state.editdata;
})