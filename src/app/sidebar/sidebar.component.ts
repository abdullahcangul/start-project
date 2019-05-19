import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { InfoUser } from '../entity/infouser';
import { EmployeeService } from '../services/employee.service';
import { CustomerService } from '../services/customer.service';
import { Employee } from '../entity/Employee';
import { Customer } from '../entity/Customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public samplePagesCollapsed = true;
  
  constructor(private authService:AuthService,
    private employeeService:EmployeeService,
    private customerService:CustomerService,
    private router: Router,) { }

  userInfo:InfoUser;
  employee:Employee;
  customer:Customer;

  
  ngOnInit() {
    this.getUserInfo();
    
  }
  ngOnChanges(){
    this.getUserInfo();
  }
  getUserInfo(){
    this.authService.getUserinfo().subscribe(data=>{
      this.userInfo=data;
      localStorage.removeItem("role")
      localStorage.setItem("role",this.userInfo.role)
    },(err)=>{},
    ()=>{
      this.checkUserType(this.userInfo);
    }
    )
  }
  checkUserType(userInfo:InfoUser){
  
    if(userInfo.role=="calisan"){
      this.employeeService.getEmployeeById(userInfo.clientId).subscribe(data=>{
        this.employee=data;
        localStorage.setItem("loginemployeeId",data.ID.toString());
        console.log(data)
      })
    }
    else{
      this.customerService.getCustomerById(userInfo.clientId).subscribe(data=>{
        this.customer=data;
        localStorage.setItem("logincustomerId",data.ID.toString());
      })
    }
  }

  RouterProcess(){
    localStorage.removeItem("detailprojectId");
    this.router.navigateByUrl("process")
  }
}
