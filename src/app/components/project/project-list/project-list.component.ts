import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/entity/Project';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Customer } from 'src/app/entity/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {



  selectedProjects: Project;
  projects:Project[];
  
  constructor(private router: Router,
    private projectServis:ProjectService,
    private alertifyService:AlertifyService,
    private customerService:CustomerService) { }

  ngOnInit() {
    
    this.getTitles();
  }
  getTitles(){
    this.projectServis.getProjects().subscribe(data => {
      this.projects = data;
      
    });
  }


  onSelect(project: Project): void {
    this.selectedProjects = project;
  }

  onDelete(project: Project): void {
    this.projectServis.delete(project.ID).subscribe(data=>{
      if(data){
        this.getTitles();
        this.alertifyService.success(project.name+" Silindi");
      }else{
        this.alertifyService.error("Hata olustu");
      }
      
    },(err)=>{
      this.alertifyService.error(err+" Hata olustu");
    });
    
  }
  onUptdate(project):void{
    localStorage.removeItem("editprojectId");
    localStorage.setItem("editprojectId", project.ID.toString());
    this.router.navigate(['project/uptdate']);
  }
  onDetail(project){
  this.getCustomer(project.CustomerID);
    localStorage.removeItem("detailprojectId");
    localStorage.setItem("detailprojectId", project.ID.toString());
    this.router.navigate(['project/detail']);
  }
  getCustomer(id:number){
    this.customerService.getCustomerById(id).subscribe(data => {     
      localStorage.removeItem("detail2customerId");
      localStorage.setItem("detail2customerId", data.ID.toString());
    });
  }
}
