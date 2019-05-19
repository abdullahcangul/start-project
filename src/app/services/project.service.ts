import { Injectable } from '@angular/core';
import { Project } from '../entity/Project';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { Observable, of } from 'rxjs';
import { ProcessService } from './process.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  project:Project;
  projects:Project[];

  constructor(
    private httpClient: HttpClient,    
    private processService:ProcessService,
    private router:Router,
    private alertifyService:AlertifyService
    ) { }

  path = "http://localhost:58371/api/project";

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.path);
  }
  getProjectById(projectID):Observable<Project>{
      return this.httpClient.get<Project>(this.path+"/"+projectID)
  }

  getProjectsById(id):Observable<Project[]>{
    return this.httpClient.get<Project[]>("http://localhost:58371/api/projects"+"/"+id)
  }
  
  add(project){
    this.httpClient.post(this.path ,project).subscribe((data)=>{
      this.router.navigateByUrl('project')
      this.alertifyService.success(project.name+" Eklendi");
      
    },(err)=>{
      this.alertifyService.error(err);
    }
    );
  }

  uptdate(project){
    this.httpClient.put(this.path,project).subscribe(data=>{
     // this.router.navigateByUrl('customer/detail/'+data["ID"])
     this.router.navigateByUrl('project');
     this.alertifyService.success(project.name+" Güncellendi");
    },err=>{
      console.log(err);
      this.alertifyService.error(err);
    });
  }
   
  delete(projectId):Observable<any>{
    return this.httpClient.delete<any>(this.path + "/"+projectId);
  }
}
