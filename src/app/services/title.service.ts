import { Injectable } from '@angular/core';
import { Title } from '../entity/Title';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  title:Title;
  titles:Title[];

  constructor(
    private httpClient: HttpClient,    
    private router:Router,
    private alertifyService:AlertifyService
    ) { }

  path = "http://localhost:58371/api/title";

  getTitles(): Observable<Title[]> {
    return this.httpClient.get<Title[]>(this.path);
  }
  getTitleById(titleID):Observable<Title>{
      return this.httpClient.get<Title>(this.path+"/"+titleID)
  }

  add(title){
    this.httpClient.post(this.path ,title).subscribe((data)=>{
      this.router.navigateByUrl('title')
      this.alertifyService.success(title.name+" Eklendi");
    },(err)=>{
      this.alertifyService.error(err);
    }
    );
  }

  uptdate(title){
    this.httpClient.put(this.path,title).subscribe(data=>{
     // this.router.navigateByUrl('customer/detail/'+data["ID"])
     this.router.navigateByUrl('title');
     this.alertifyService.success(title.name+" Güncellendi");
    },(err)=>{
      this.alertifyService.error(err);
    });
  }
   
  delete(titleId):Observable<Boolean>{
    return this.httpClient.delete<Boolean>(this.path + "/"+titleId);
  }

}
