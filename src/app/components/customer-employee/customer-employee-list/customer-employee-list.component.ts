import { Component, OnInit } from '@angular/core';
import { CustomerEmployee } from 'src/app/entity/CustomerEmployee';
import { Router } from '@angular/router';
import { CustomerEmployeeService } from 'src/app/services/customer-employee.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-customer-employee-list',
  templateUrl: './customer-employee-list.component.html',
  styleUrls: ['./customer-employee-list.component.scss']
})
export class CustomerEmployeeListComponent implements OnInit {

  selectedEmployee: CustomerEmployee;
  employees:CustomerEmployee[];
  
  constructor(private router: Router,private employeetServis:CustomerEmployeeService,private alertifyService:AlertifyService) { }

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees(){
    this.employeetServis.getCustomerEmployee().subscribe(data => {
      this.employees = data;
    });
  }

  onSelect(employee: CustomerEmployee): void {
    this.selectedEmployee = employee;
  }

  onDelete(empleoyee: CustomerEmployee): void {
    this.employeetServis.delete(empleoyee.ID).subscribe(data=>{
      if(data){
        this.getEmployees();
        this.alertifyService.success(empleoyee.name+" Silindi");
      }else{
        this.alertifyService.error("Hata olustu");
      }
      
    },(err)=>{
      this.alertifyService.error(err+" Hata olustu");
    });
    
  }
  onUptdate(employee):void{
    localStorage.removeItem("editcustomeremployeeId");
    localStorage.setItem("editcustomeremployeetId", employee.ID.toString());
    this.router.navigate(['customer-employee/uptdate']);
  }
}
