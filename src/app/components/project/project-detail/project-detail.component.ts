import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entity/Customer';
import { Employee } from 'src/app/entity/Employee';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/entity/Project';
import { ProcessService } from 'src/app/services/process.service';
import { Process } from 'src/app/entity/Process';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {



  id:number;
  customerId:number;
  selectedTitle:number;
  selectedEmployee:number;
  employee:Employee;
  customer:Customer;
  processes:Process[];
  project:Project;

  constructor(  
    private router:Router,
    private customerService:CustomerService,
    private projectService:ProjectService,
    private processService:ProcessService,

   ) { }

    projectDetail(id:number) {
      console.log(id)
      
      this.projectService.getProjectById(id).subscribe(data=>{
       
        this.project=data;

      });

      this.processService.getProccessOfProjectById(id).subscribe(data=>{
        this.processes=data;
      })

      this.customerService.getCustomerById(this.customerId).subscribe(data=>{
        this.customer=data;
      })
    }

 
    ngOnInit() {
     
      //this.id = +this.route.snapshot.paramMap.get('id');
      let projectId = parseInt(localStorage.getItem("detailprojectId"));
      this.customerId= parseInt(localStorage.getItem("detail2customerId"));
      
   
    if(!projectId) {
      alert("Geçersiz işlem.")
      this.router.navigate(['customer']);
      return;
    }
    
    this.id=projectId;
    this.projectDetail(projectId);
   }

}
