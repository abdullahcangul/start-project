import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from '../entity/Content';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {


  content:Content;
  contents:Content[];

  constructor(
    private httpClient: HttpClient,    
    private router:Router,
    private alertifyService:AlertifyService
    ) { }

  path = "http://localhost:58371/api/content";

  getContent(): Observable<Content[]> {
    return this.httpClient.get<Content[]>(this.path);
  }
  getContentById(contentID):Observable<Content>{
      return this.httpClient.get<Content>(this.path+"/"+contentID)
  }
  getContentOfProcessById(processID):Observable<Content[]>{
    return this.httpClient.get<Content[]>(this.path+"/process"+"/"+processID)
}

  add(content){
    this.httpClient.post(this.path ,content).subscribe((data)=>{
      this.router.navigateByUrl('content')
     
      this.alertifyService.success("Mesaj Gönderildi");
    },(err)=>{
      this.alertifyService.error(err);
    }
    );
  }

  uptdate(content){
    this.httpClient.put(this.path,content).subscribe(data=>{
     // this.router.navigateByUrl('customer/detail/'+data["ID"])
     this.router.navigateByUrl('content');
     this.alertifyService.success(content.message+" Güncellendi");
    },(err)=>{
      this.alertifyService.error(err);
    });
  }
   
  delete(contentId):Observable<Boolean>{
    return this.httpClient.delete<Boolean>(this.path + "/"+contentId);
  }
}
