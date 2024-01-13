import { Component, OnInit, ViewChild } from '@angular/core';
import { MasterService } from '../../_service/master.service';
import { Posts } from '../../../_model/posts';
import { Customer } from '../../../_model/Customer';
import { MaterialModule } from '../../../_module/Material.Module';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { deleteCustomer, loadCustomer } from '../../_store/Customer/Customer.Actions';
import { getCutomerList } from '../../_store/Customer/Customer.Selector';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cutomer',
  standalone: true,
  imports: [MaterialModule, CommonModule, RouterLink],
  templateUrl: './cutomer.component.html',
  styleUrl: './cutomer.component.css'
})
export class CutomerComponent implements OnInit {
  constructor(private store: Store,private router:Router) {

  }
  customerdata!: Customer[];
  datasource: any;
  displayColums: string[] = ['code', 'name', 'email', 'phone', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.LoadInitialData();
  }

  LoadInitialData() {
    this.store.dispatch(loadCustomer());
    this.store.select(getCutomerList).subscribe(item => {
      this.customerdata = item;
      this.datasource = new MatTableDataSource(this.customerdata);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    })
  }

  deletecustomer(code: string) {
    if (confirm("do you want to remove?")) {
      this.store.dispatch(deleteCustomer({ code: code }));
    }
  }

  editcustomer(code: string) {
    this.router.navigateByUrl('/customer/edit/'+code);
  }

}
