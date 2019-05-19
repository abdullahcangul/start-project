import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/entity/Project';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Customer } from 'src/app/entity/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {



  selectedProjects: Project;
  projects:Project[];
  id:number=0;
  
  constructor(private router: Router,
    private projectServis:ProjectService,
    private alertifyService:AlertifyService,
    private customerService:CustomerService) { }

  ngOnInit() {
    this.id=parseInt(localStorage.getItem("logincustomerId"));
    
    if(this.id){
      console.log(this.id)
      this.getProjetsById(this.id)
    }else{
      this.getProjets();
    }
  }
  getProjets(){
    this.projectServis.getProjects().subscribe(data => {
      this.projects = data;
    });
  }
  getProjetsById(id){
    this.projectServis.getProjectsById(id).subscribe(data => {
      this.projects = data;
    });
  }


  onSelect(project: Project): void {
    this.selectedProjects = project;
  }

  onDelete(project: Project): void {
    if(!confirm('Silmek istediğinizden emin misiniz ?')){
      return
    }
    this.projectServis.delete(project.ID).subscribe(data=>{
     
        if(this.id){
          this.getProjetsById(this.id);
        }else{
          this.getProjets();
        }
        this.alertifyService.success(project.name+" Silindi");
     
    },(err)=>{
      if(err="Bad Request"){
        this.alertifyService.error("Projenin Ticketları Var Silinemez!!!");
      }else{
        this.alertifyService.error(" Hata olustu");
      }
     
    });
    
  }
  
  onUptdate(project){
    localStorage.removeItem("editprojectId");
    localStorage.setItem("editprojectId", project.ID.toString());
    this.router.navigate(['project/uptdate']);
  }
  onDetail(project){
    localStorage.removeItem("detailprojectId");
    localStorage.setItem("detailprojectId", project.ID.toString());
  this.getCustomer(project.CustomerID);

    this.router.navigate(['project/detail']);
  }

  getCustomer(id:number){
    this.customerService.getCustomerById(id).subscribe(data => {     
      localStorage.removeItem("detail2customerId");
      localStorage.setItem("detail2customerId", data.ID.toString());
    });
  }
}
