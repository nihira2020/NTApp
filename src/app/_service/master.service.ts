import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from '../../_model/posts';
import { Customer } from '../../_model/Customer';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) {

  }

  getall() {
    return this.http.get<Posts[]>('http://localhost:3000/posts');
  }

  GetAllCustomer() {
    return this.http.get<Customer[]>('https://localhost:7143/api/Customer/GetAll');
  }
  

  GetCustomerbycode(code:string) {
    return this.http.get<Customer>('https://localhost:7143/api/Customer/Getbycode?code='+code);
  }

  CreateCustomer(customer: Customer) {
    return this.http.post('https://localhost:7143/api/Customer/Create', customer);
  }
  UpdateCustomer(customer: Customer) {
    return this.http.put('https://localhost:7143/api/Customer/Update?code='+customer.code, customer);
  }
  DeleteCustomer(code:string) {
    return this.http.delete('https://localhost:7143/api/Customer/Remove?code='+code);
  }





  haveaccess() {
    return true;
  }
}
