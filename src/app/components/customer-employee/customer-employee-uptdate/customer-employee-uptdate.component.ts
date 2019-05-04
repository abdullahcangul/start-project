import { Component, OnInit } from '@angular/core';
import { CustomerEmployee } from 'src/app/entity/CustomerEmployee';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerEmployeeService } from 'src/app/services/customer-employee.service';

@Component({
  selector: 'app-customer-employee-uptdate',
  templateUrl: './customer-employee-uptdate.component.html',
  styleUrls: ['./customer-employee-uptdate.component.scss']
})
export class CustomerEmployeeUptdateComponent implements OnInit {

  employee:CustomerEmployee;
  AddForm:FormGroup
  id:number;

  constructor(  
    private router:Router,
    private employeeService: CustomerEmployeeService,
    private formBuilder: FormBuilder,) { }

    updateForm(id:number) {
      
      this.AddForm = this.formBuilder.group(
        {
          ID:[""],
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

      this.employeeService.getCustomerEmployeeById(id).subscribe(data=>{
        this.employee=data;
        data.ID=id;
        this.AddForm.setValue(data)
      });
     
    }

    ngOnInit() {
      //this.id = +this.route.snapshot.paramMap.get('id');
      let id = parseInt(localStorage.getItem("editcustomeremployeetId"));
    console.log(id)
    if(!id) {
      alert("Geçersiz işlem.")
      this.router.navigate(['customer-employee']);
      return;
    }
    this.id=id;
     this.updateForm(id);
     
   }
 
   uptdate(){
     if(this.AddForm.valid){
       this.employee = Object.assign({},this.AddForm.value)
       this.employee.ID=this.id;
       this.employeeService.uptdate(this.employee);
     }
   }
}
