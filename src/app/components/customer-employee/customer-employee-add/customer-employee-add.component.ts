import { Component, OnInit } from '@angular/core';
import { CustomerEmployee } from 'src/app/entity/CustomerEmployee';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerEmployeeService } from 'src/app/services/customer-employee.service';

@Component({
  selector: 'app-customer-employee-add',
  templateUrl: './customer-employee-add.component.html',
  styleUrls: ['./customer-employee-add.component.scss']
})
export class CustomerEmployeeAddComponent implements OnInit {

  employee:CustomerEmployee;
  AddForm:FormGroup

  constructor(private employeeService:CustomerEmployeeService,private formBuilder: FormBuilder) { }

  createForm() {
    this.AddForm = this.formBuilder.group(
      {
      name: ["", [Validators.required,
        Validators.maxLength(25),
      Validators.minLength(3)]],

      surname: ["", [Validators.required,
        Validators.maxLength(25),
      Validators.minLength(3)]],

      email:["", [Validators.required,
        Validators.email]],

      password: ["", [Validators.required,
        Validators.maxLength(15),
        Validators.minLength(3)]],
      phone: ["",[Validators.required,
          Validators.maxLength(15),
          Validators.minLength(2)]],
     
    });
  }
  ngOnInit() {
    this.createForm();
  }

  add(){
    if(this.AddForm.valid){
      this.employee = Object.assign({},this.AddForm.value)
      console.log(this.employee)
      this.employeeService.add(this.employee)
    }
  }
}
