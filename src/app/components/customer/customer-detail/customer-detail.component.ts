import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/entity/Employee';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/entity/Customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {


  id:number;
  selectedTitle:number;
  selectedEmployee:number;
  employee:Employee;
  customer:Customer;

  constructor(  
    private router:Router,
    private customerService:CustomerService,
   ) { }

    customerDetail(id:number) {
      console.log(id)
      
      this.customerService.getCustomerById(id).subscribe(data=>{
       
        this.customer=data;
    
      });
    }

 
    ngOnInit() {
     
      //this.id = +this.route.snapshot.paramMap.get('id');
      let customerId = parseInt(localStorage.getItem("detailcustomerId"));
      
   
    if(!customerId) {
      alert("Geçersiz işlem.")
      this.router.navigate(['customer']);
      return;
    }
    
    this.id=customerId;
    this.customerDetail(customerId);
   }

}
