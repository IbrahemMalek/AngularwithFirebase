import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
customerarray=[];
  constructor(public custservice:CustomerService) { }

  ngOnInit(): void {
    this.custservice.getcustomer().subscribe(
      list=>{
        this.customerarray=list.map(item=>{
          return{
            $key:item.key,
          ...item.payload.val()
          };
        });
      }
    );
  }
ondelete($key){
  if(confirm("are u sure u want to delete this record")){
    this.custservice.deletecustomer($key);

  }
}
}
