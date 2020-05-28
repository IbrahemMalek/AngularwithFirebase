import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../shared/customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
   
  constructor( public custservice:CustomerService) { 
    
  }
  submitted:boolean;
  showsuccessmessage:boolean;
  formcontrols=this.custservice.form.controls;
  ngOnInit(): void {
  }
  onsubmit(){
    this.submitted=true;
    if(this.custservice.form.valid){
    if(this.custservice.form.get('$key').value==null)
     this.custservice.insertcustomer(this.custservice.form.value);
    else
    this.custservice.updatecustomer(this.custservice.form.value);
    this.showsuccessmessage=true;
    setTimeout(()=>this.showsuccessmessage=false,10000);
    this.submitted=false;
    this.custservice.form.reset();
  }
}

}
