import { Injectable } from '@angular/core';
import { CustomerEmployee } from '../entity/CustomerEmployee';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerEmployeeService {
  customerEmployee:CustomerEmployee;
  customerEmployees:CustomerEmployee[];

  constructor(
    private httpClient: HttpClient,    
    private router:Router,
    private alertifyService:AlertifyService
    ) { }

  path = "http://localhost:58371/api/customeremployee";

  getCustomerEmployee(): Observable<CustomerEmployee[]> {
    return this.httpClient.get<CustomerEmployee[]>(this.path);
  }
  getCustomerEmployeeById(customerEmployeeID):Observable<CustomerEmployee>{
   
      return this.httpClient.get<CustomerEmployee>(this.path+"/"+customerEmployeeID)
  }

  add(customerEmployee){
    this.httpClient.post(this.path ,customerEmployee).subscribe((data)=>{
      this.router.navigateByUrl('customer-employee')
      this.alertifyService.success(customerEmployee.name+" Eklendi");
    },(err)=>{
      this.alertifyService.error(err);
    }
    );
  }

  uptdate(customerEmployee){
    this.httpClient.put(this.path,customerEmployee).subscribe(data=>{
     // this.router.navigateByUrl('customer/detail/'+data["ID"])
     this.router.navigateByUrl('customer-employee');
     this.alertifyService.success(customerEmployee.name+" Güncellendi");
    },(err)=>{
      this.alertifyService.error(err);
    });
  }
   
  delete(customerEmployeeId):Observable<Boolean>{
    return this.httpClient.delete<Boolean>(this.path + "/"+customerEmployeeId);
  }
}
