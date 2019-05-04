import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entity/Customer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  customer:Customer;
  AddForm:FormGroup

  constructor(private customerService:CustomerService,private formBuilder: FormBuilder) { }

  createCustomerForm() {
    this.AddForm = this.formBuilder.group({

      name: ["", [Validators.required,
        Validators.maxLength(25),
      Validators.minLength(3)]],

      email:["", [Validators.required,
        Validators.email]],

      url: ["", [Validators.required,
      Validators.maxLength(50),Validators.minLength(3)]],

      competnent: ["", [Validators.required,
      Validators.maxLength(20),Validators.minLength(3)]] ,

      description: ["", [Validators.required,
        Validators.maxLength(500)]],

      password: ["", [Validators.required,
          Validators.maxLength(15),
          Validators.minLength(3)]],

      profileImageFilename: ["", ],
    });
  }
  ngOnInit() {
    this.createCustomerForm();
  }

  add(){
    if(this.AddForm.valid){
      this.customer = Object.assign({},this.AddForm.value)
      this.customerService.add(this.customer)
    }
  }
}
