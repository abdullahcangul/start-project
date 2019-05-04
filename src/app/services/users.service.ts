import { Injectable } from '@angular/core';
import { User } from '../entity/User';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class UsersService {
user:User;
users:User[];

  constructor(private httpClient: HttpClient,    
    private router:Router) { }

  path = "http://localhost:58371/api/user";

  getUsers(): Observable<User[]> {
    console.log("hi")
    return this.httpClient.get<User[]>(this.path );
  }
  getKisiById(userID):Observable<User>{
    return this.httpClient.get<User>(this.path+"/"+userID)
  }

  add(user){
    this.httpClient.post(this.path ,user).subscribe(data=>{
      this.router.navigateByUrl('user')
    });
  }

  update(kisi){
    this.httpClient.put(this.path,kisi).subscribe(data=>{
      this.router.navigateByUrl('detail/'+data["id"])
    });
  }
   
  delete(KisiId):Observable<Boolean>{
    return this.httpClient.delete<Boolean>(this.path + "/"+KisiId);
  }
}
