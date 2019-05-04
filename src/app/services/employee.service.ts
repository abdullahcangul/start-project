import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Employee } from '../entity/Employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertifyService } from './alertify.service';
import { Customer } from '../entity/Customer';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employee:Employee;
  employees:Employee[];

  constructor(
    private httpClient: HttpClient,    
    private router:Router,
    private alertifyService:AlertifyService
    ) { }

  path = "http://localhost:58371/api/employee";

 
  
  getEmployees(): Observable<Employee[]> {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", localStorage.getItem("token"))

    return this.httpClient.get<Employee[]>(this.path,{ headers: headers });
  }
  getEmployeeById(employeeID):Observable<Employee>{
   
      return this.httpClient.get<Employee>(this.path+"/"+employeeID)
  }
  
  activateEmployee(id:number):Observable<Boolean>{
    return this.httpClient.get<Boolean>(this.path+"/AktifEt/"+id)
  }
  add(employee){
    this.httpClient.post(this.path ,employee).subscribe((data)=>{
      this.router.navigateByUrl('employee')
      this.alertifyService.success(employee.name+" Eklendi");
    },(err)=>{
      this.alertifyService.error(err);
    }
    );
  }

  uptdate(customer){
    this.httpClient.put(this.path,customer).subscribe(data=>{
     // this.router.navigateByUrl('customer/detail/'+data["ID"])
     this.router.navigateByUrl('employee');
     this.alertifyService.success(customer.name+" Güncellendi");
    },(err)=>{
      this.alertifyService.error(err);
    });
  }
   
  delete(customerId):Observable<Boolean>{
    return this.httpClient.delete<Boolean>(this.path + "/"+customerId);
  }

}
