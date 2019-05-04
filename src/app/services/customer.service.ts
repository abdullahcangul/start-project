import { Injectable } from '@angular/core';
import { Customer } from '../entity/Customer';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer:Customer;
  customers:Customer[];

  constructor(
    private httpClient: HttpClient,    
    private router:Router,
    private alertifyService:AlertifyService
    ) { }

  path = "http://localhost:58371/api/customer";

  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.path);
  }
  getCustomerById(id):Observable<Customer>{
    return this.httpClient.get<Customer>(this.path+"/"+id)
  }

  add(customer){
    this.httpClient.post(this.path ,customer).subscribe(data=>{
      this.router.navigateByUrl('customer')
      this.alertifyService.success(customer.name+" Eklendi");
    },(err)=>{
      this.alertifyService.error(err+" Hata Olusutu");
    });
  }

  uptdate(customer){
    console.log(customer)
    this.httpClient.put(this.path,customer).subscribe(data=>{
      console.log(data)
      //this.router.navigateByUrl('detail/'+data["ID"])
      this.router.navigateByUrl('customer');
      this.alertifyService.success(customer.name+" Güncellendi");
    },(err)=>{
      this.alertifyService.error(err);
    });
  }
   
  delete(employeeId):Observable<Boolean>{
    return this.httpClient.delete<Boolean>(this.path + "/"+employeeId);
  }
}
