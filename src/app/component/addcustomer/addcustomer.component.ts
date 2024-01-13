import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../_module/Material.Module';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Customer } from '../../../_model/Customer';
import { Store } from '@ngrx/store';
import { addCustomer, getCustomer, updateCustomer } from '../../_store/Customer/Customer.Actions';
import { getEditdata } from '../../_store/Customer/Customer.Selector';

@Component({
  selector: 'app-addcustomer',
  standalone: true,
  imports: [MaterialModule, RouterLink, ReactiveFormsModule],
  templateUrl: './addcustomer.component.html',
  styleUrl: './addcustomer.component.css'
})
export class AddcustomerComponent implements OnInit {
  editcode = '';
  pagetitle = 'Add Customer';
  constructor(private builder: FormBuilder, private store: Store, private actroute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.editcode = this.actroute.snapshot.paramMap.get('code') as string;
    if (this.editcode != null && this.editcode != '') {
      this.pagetitle = 'Edit customer';
      this.myform.controls.code.disable();
      this.store.dispatch(getCustomer({code:this.editcode}))
      this.store.select(getEditdata).subscribe(item => {
        this.myform.setValue({ code: item.code, name: item.name, email: item.email, phone: item.phone });
      });
    }
  }
  myform = this.builder.group({
    code: this.builder.control('', Validators.required),
    name: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.required),
    phone: this.builder.control('', Validators.required)
  })

  Savecustomer() {
    if (this.myform.valid) {
      const _obj: Customer = {
        code: this.myform.value.code as string,
        name: this.myform.value.name as string,
        email: this.myform.value.email as string,
        phone: this.myform.value.phone as string,
      }
      console.log(_obj);
      if(this.editcode!=null && this.editcode!=''){
        _obj.code=this.editcode;
        this.store.dispatch(updateCustomer({ inputdata: _obj }));
      }else{
        this.store.dispatch(addCustomer({ inputdata: _obj }));
      }
     

    }

  }
}
