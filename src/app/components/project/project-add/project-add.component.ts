import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/entity/Project';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { CustomerService } from 'src/app/services/customer.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { Customer } from 'src/app/entity/Customer';
import { Employee } from 'src/app/entity/Employee';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.scss']
})
export class ProjectAddComponent implements OnInit {

  project:Project;
  customers:Customer[];
  employees:Employee[];
  AddForm:FormGroup;

  constructor(private projectService:ProjectService,
    private customerService:CustomerService,
    private employeeService:EmployeeService,
    private formBuilder: FormBuilder) { }

  createCustomerForm() {

    this.AddForm = this.formBuilder.group({

      name: ["", [Validators.required,
        Validators.maxLength(25),
      Validators.minLength(3)]],

      description: ["", [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25)]],

      EmployeeID: ["", Validators.required],
      CustomerID: ["", Validators.required],

    });
  }
  ngOnInit() {

    this.createCustomerForm();
    this.getCustomer();
    this.getEmployee();
  }

  add(){
    if(this.AddForm.valid){
      this.project = Object.assign({},this.AddForm.value)
      this.projectService.add(this.project)
    }
  }
  getCustomer(){
    this.customerService.getCustomers().subscribe(data=>{
        this.customers=data;
    })
  }
  getEmployee(){
    this.employeeService.getEmployees().subscribe(data=>{
      this.employees=data;
  })
  }
}
