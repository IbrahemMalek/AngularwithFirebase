import { Injectable } from '@angular/core';
import{FormControl,FormGroup ,Validators} from '@angular/forms';
import{AngularFireDatabase,AngularFireList} from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( public firebase:AngularFireDatabase) { }
     customerlist:AngularFireList<any>;
     form = new FormGroup({
      $key:new FormControl(null),
      fullname:new FormControl('',Validators.required),
      email:new FormControl('',Validators.email),
      mobile:new FormControl('',[Validators.required,Validators.minLength(10)]),
      location:new FormControl('',Validators.required)
  
    });

     getcustomer(){
       this.customerlist=this.firebase.list('customers');
       return this.customerlist.snapshotChanges();
     }
     insertcustomer(customer){
       this.customerlist.push({
        fullname:customer.fullname,
        email:customer.email,
        mobile:customer.mobile,
        location:customer.location
       });
     }
     populateform(customer){
   this.form.setValue(customer);
     }
     updatecustomer(customer){
       this.customerlist.update(customer.$key,
        {
          fullname:customer.fullname,
          email:customer.email,
          mobile:customer.mobile,
          location:customer.location
         }
        );
     }
     deletecustomer($key:string){
       this.customerlist.remove($key);

     }


 
  

}
