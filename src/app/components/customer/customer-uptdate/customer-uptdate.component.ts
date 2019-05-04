import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entity/Customer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-uptdate',
  templateUrl: './customer-uptdate.component.html',
  styleUrls: ['./customer-uptdate.component.scss']
})
export class CustomerUptdateComponent implements OnInit {

  customer:Customer;
  AddForm:FormGroup
  id:number;

  constructor(  
    private router:Router,
    private customerService: CustomerService,
    private formBuilder: FormBuilder,) { }

    updateForm(id:number) {
      
      this.AddForm = this.formBuilder.group(
        {
          ID:[""],
       
      name: ["", [Validators.required,
        Validators.maxLength(25),
      Validators.minLength(3)]],

      email:["", [Validators.required,
        Validators.email]],

      url: ["", [Validators.required,
      Validators.maxLength(50),Validators.minLength(3)]],

      competnent: ["", [Validators.required,
      Validators.maxLength(20),Validators.minLength(3)]] ,

      password: ["", [Validators.required,
        Validators.maxLength(15),
        Validators.minLength(3)]],
        
      description: ["", [Validators.required,
        Validators.maxLength(500)]],

      });

      this.customerService.getCustomerById(id).subscribe(data=>{
        this.customer=data;
        data.ID=id;
        this.AddForm.setValue(data)
      });
     
    }

    ngOnInit() {
      //this.id = +this.route.snapshot.paramMap.get('id');
      let id = parseInt(localStorage.getItem("editcustomerId"));
      console.log(id)
   
    if(!id) {
      alert("Geçersiz işlem.")
      this.router.navigate(['customer']);
      return;
    }
    this.id=id;
     this.updateForm(id);
     
   }
 
   uptdate(){
     if(this.AddForm.valid){
       this.customer = Object.assign({},this.AddForm.value)
       this.customer.ID=this.id;
       this.customerService.uptdate(this.customer);
     }
   }

}
