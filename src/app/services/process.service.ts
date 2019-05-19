import { Injectable } from '@angular/core';
import { Process } from '../entity/Process';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { Observable } from 'rxjs';
import { Project } from '../entity/Project';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  
  process:Process;
  processes:Process[];

  constructor(
    private httpClient: HttpClient,    
    private router:Router,
    private alertifyService:AlertifyService
    ) { }

  path = "http://localhost:58371/api/process";

  getProcessess(): Observable<Process[]> {
    return this.httpClient.get<Process[]>(this.path);
  }
  getProcessById(processID):Observable<Process>{
      return this.httpClient.get<Process>(this.path+"/"+processID)
  }
  getProccessOfProjectById(projectID):Observable<Process[]>{
    return this.httpClient.get<Process[]>(this.path+"/"+"projectss"+"/"+projectID)
}
  add(process:Process){
    if(parseInt(localStorage.getItem("loginemployeeId"))){
        process.EmployeeID=parseInt(localStorage.getItem("loginemployeeId"));
    }
    this.httpClient.post(this.path ,process).subscribe((data)=>{  
      this.router.navigateByUrl('/project/detail')
      this.alertifyService.success(process.priority+" öncelikli işlem Eklendi");
    },(err)=>{
      this.alertifyService.error(err);
    }
    );
  }

  uptdate(process){
    console.log(process.ID)
    this.httpClient.put(this.path,process).subscribe(data=>{
     // this.router.navigateByUrl('customer/detail/'+data["ID"])
     
     this.router.navigateByUrl('process');
     this.alertifyService.success(process.priority+" öncelikli işlem Güncellendi");
    },(err)=>{
      this.alertifyService.error(err);
    });
  }
   
  delete(processId):Observable<Boolean>{
    return this.httpClient.delete<Boolean>(this.path + "/"+processId);
  }
}
