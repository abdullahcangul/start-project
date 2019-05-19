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
import { AlertifyService } from 'src/app/services/alertify.service';

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
  selectedProcess: Process;

  constructor(  
    private router:Router,
    private projectService:ProjectService,
    private processServis:ProcessService,
    private alertifyService:AlertifyService

   ) { }

    projectDetail(id:number) {
      console.log(id)
      
      this.processServis.getProccessOfProjectById(id).subscribe(data=>{
        this.processes=data;
      })

    }

 
    ngOnInit() {


      this.id = parseInt(localStorage.getItem("detailprojectId"));
      //if(this.id){
        this.getProcessesOfProject(this.id);
      //}
     // else{
      //  this.getProcesses();
      //}
     
      //this.id = +this.route.snapshot.paramMap.get('id');
     // let projectId = parseInt(localStorage.getItem("detailprojectId"));
     // this.customerId= parseInt(localStorage.getItem("detail2customerId"));
 
   // this.id=projectId;
    //this.projectDetail(projectId);
   }



   getProcesses(){
    this.processServis.getProcessess().subscribe(data => {
      this.processes = data;
    });
  }
  getProcessesOfProject(id:number){
    this.processServis.getProccessOfProjectById(id).subscribe(data => {
      this.processes = data;
    });
   
  }

  getProcessesOfCustomer(id:number){
    this.processServis.getProccessOfProjectById(id).subscribe(data => {
      this.processes = data;
    });
  }

  onSelect(process: Process): void {
    this.selectedProcess = process;
  }

  onDelete(process: Process): void {
    this.processServis.delete(process.ID).subscribe(data=>{
      if(data){
       // this.getProcesses();
       this.ngOnInit()
        this.alertifyService.success(process.priority +" Öncelikli işlem Silindi");
      }else{
        this.alertifyService.error("Hata olustu");
      }
      
    },(err)=>{
      this.alertifyService.error(err+" Hata olustu");
    });
    
  }
  onUptdate(process):void{
    localStorage.removeItem("editprocessId");
    localStorage.setItem("editprocessId", process.ID.toString());
    this.router.navigate(['process/uptdate']);
  }
  onDetail(process):void{
    localStorage.removeItem("detailprocessId");
    localStorage.setItem("detailprocessId", process.ID.toString());
    this.router.navigate(['content']);
  }

}
