import { CustomerModel } from "../../../_model/Customer";

export const customerState: CustomerModel = {
    list: [],
    errormessage: '',
    editdata:{
        code: "",
        name: "",
        email: "",
        phone: ""
    }
}