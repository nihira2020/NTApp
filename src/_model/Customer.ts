export interface Customer{
    code:string;
    name:string;
    email:string;
    phone:string;
}

export interface CustomerModel{
    list:Customer[],
    errormessage:string,
    editdata:Customer
}