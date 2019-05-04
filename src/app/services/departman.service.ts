import { Injectable } from '@angular/core';
import { Departmant } from '../entity/Departmant';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmanService {

  departman:Departmant;
  departmans:Departmant[];

  constructor(
    private httpClient: HttpClient,    
    private router:Router,
    private alertifyService:AlertifyService
    ) { }

  path = "http://localhost:58371/api/departmant";

  getDepartmants(): Observable<Departmant[]> {
    return this.httpClient.get<Departmant[]>(this.path);
  }
  getDepartmantById(departmanID):Observable<Departmant>{
      return this.httpClient.get<Departmant>(this.path+"/"+departmanID)
  }

  add(departman){
    this.httpClient.post(this.path ,departman).subscribe((data)=>{
      this.router.navigateByUrl('departmant')
      this.alertifyService.success(departman.name+" Eklendi");
    },(err)=>{
      this.alertifyService.error(err);
    }
    );
  }

  uptdate(departman){
    this.httpClient.put(this.path,departman).subscribe(data=>{
     // this.router.navigateByUrl('customer/detail/'+data["ID"])
     this.router.navigateByUrl('departmant');
     this.alertifyService.success(departman.name+" Güncellendi");
    },(err)=>{
      this.alertifyService.error(err);
    });
  }
   
  delete(departmanId):Observable<Boolean>{
    return this.httpClient.delete<Boolean>(this.path + "/"+departmanId);
  }
}
