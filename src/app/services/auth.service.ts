import { Injectable } from '@angular/core';
import { LoginUser } from '../entity/loginUser';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt'
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { InfoUser } from '../entity/infouser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userToken: any;
  decodedToken: any;
  jwtHelper: JwtHelper = new JwtHelper();
TOKEN_KEY="token";

  constructor(private httpClient: HttpClient, private router: Router, private alertifyService: AlertifyService) { }

  path = "http://localhost:58371/api/getToken"


  getUserinfo(){
     return  this.httpClient.get<InfoUser>("http://localhost:58371/api/authorization");
  }

  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
    //headers = headers.append("Access-Control-Allow-Origin", "*");

    var data = "username=" + loginUser.username + "&password=" + loginUser.password + "&grant_type=password";

   /* const formData = new FormData();
    formData.append('username', loginUser.username);
    formData.append('password', loginUser.password);
    formData.append('grant_type', 'password');*/



    this.httpClient.post(this.path,data, { headers: headers})
      .subscribe(data => {
        console.log(data)
        this.saveToken(data["access_token"]);
        this.userToken = data["access_token"];
        console.log(data["access_token"]);
       // this.decodedToken = this.jwtHelper.decodeToken("Bearer "+data["access_token"])
       this.alertifyService.success("giriş basarılı");
        this.router.navigateByUrl("/employee")

      });
  }


  
  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, "Bearer "+token)
  }
  loggedIn(){
    return tokenNotExpired(this.TOKEN_KEY);
  }

  logOut(){
    localStorage.removeItem(this.TOKEN_KEY)
  }
  getToken(){
return localStorage.getItem(this.TOKEN_KEY);
  }
  getCurrentId(){
    return this.jwtHelper.decodeToken(this.getToken()).crundId
  }
}
