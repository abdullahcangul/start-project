import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/entity/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  
  selectedEmployee: Employee;
  employees:Employee[];
  
  constructor(private router: Router,private employeeServis:EmployeeService,private alertifyService:AlertifyService) { }

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees(){
    this.employeeServis.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  onDelete(employee: Employee): void {
    this.employeeServis.delete(employee.ID).subscribe(data=>{
      if(data){
        this.getEmployees();
        this.alertifyService.success(employee.name+" Silindi");
      }else{
        this.alertifyService.error("Hata olustu");
      }
    },(err)=>{
      this.alertifyService.error(err+" Hata olusutu");
    });
    
  }
  onActive(employee):void{
    
    this.employeeServis.activateEmployee(employee.ID).subscribe(data=>{
      if(data){
        
        this.alertifyService.success(employee.name+" aktif oldu");
      }
      else{
        this.alertifyService.success(employee.name+" pasif oldu");
      }
    })
    this.ngOnDestroy() 
  }
  ngOnDestroy() { 
   this.getEmployees()
   }
  onUptdate(employee):void{
    localStorage.removeItem("editemployeeId");
    localStorage.setItem("editemployeeId", employee.ID.toString());
    this.router.navigate(['employee/uptdate']);
  }
  onDetail(employee):void{
    localStorage.removeItem("detailemployeeId");
    localStorage.setItem("detailemployeeId", employee.ID.toString());
    this.router.navigate(['employee/detail']);
  }

}
