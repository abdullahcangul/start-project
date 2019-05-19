import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { TitleService } from 'src/app/services/title.service';
import { DepartmanService } from 'src/app/services/departman.service';
import { Employee } from 'src/app/entity/Employee';
import { Title } from 'src/app/entity/Title';
import { Departmant } from 'src/app/entity/Departmant';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {


  id:number;
  selectedTitle:number;
  selectedDepartmant:number;
  employee:Employee;
  title:Title;
  departmant:Departmant;

  constructor(  
    private router:Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private alertifyService:AlertifyService,
    private departmantServices:DepartmanService,
    private titleServices:TitleService) { }

    updateEmployeeForm(id:number) {
      console.log(id)
      
      this.employeeService.getEmployeeById(id).subscribe(data=>{
       
        this.employee=data;
        this.selectedDepartmant=this.employee.DepartmantID;
        this.selectedTitle=this.employee.TitleID;

        this.departmantServices.getDepartmantById(this.selectedDepartmant).subscribe(data=>{
          this.departmant=data;
        });
        
        this.titleServices.getTitleById(this.selectedTitle).subscribe(data=>{
          this.title=data;
          console.log(data);
        });

      });
    

     
    }

 
    ngOnInit() {
     
      //this.id = +this.route.snapshot.paramMap.get('id');
      let employeeId = parseInt(localStorage.getItem("detailemployeeId"));
      
   
    if(!employeeId) {
      alert("Geçersiz işlem.")
      this.router.navigate(['employee']);
      return;
    }
    
    this.id=employeeId;
    this.updateEmployeeForm(employeeId);
   }
   
   AktifPasif(employee:Employee){
      this.employeeService.activateEmployee(employee.ID).subscribe(data=>{
        if(data){
        
          this.alertifyService.success(employee.name+" aktif oldu");
        }
        else{
          this.alertifyService.success(employee.name+" pasif oldu");
        }
      });
   }
  

}
