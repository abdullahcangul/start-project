import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entity/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  selectedCustomer: Customer;
  customers:Customer[];

  
  constructor(private router: Router,
    private customerServis:CustomerService,
    private alertifyService:AlertifyService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(){
    this.customerServis.getCustomers().subscribe(data => {
      this.customers = data;
    });
  }


  onSelect(customer: Customer): void {
    this.selectedCustomer = customer;
  }

  onDelete(customer: Customer): void {
    if(!confirm('Silmek istediğinizden emin misiniz ?')){
      return
    }
    this.customerServis.delete(customer.ID).subscribe(data=>{
        this.getCustomers();
        this.alertifyService.success(customer.name+" Silindi");
    },(err)=>{
      if(err="Bad Request"){
        this.alertifyService.error("Müşterinin Projeleri Var Silinemez!!!");
      }else{
        this.alertifyService.error(" Hata olustu");
      }
    });
    
  }
  onUptdate(customer):void{
    localStorage.removeItem("editcustomerId");
    localStorage.setItem("editcustomerId", customer.ID.toString());
    this.router.navigate(['customer/uptdate']);
  }

  onDetail(customer):void{
    localStorage.removeItem("detailcustomerId");
    localStorage.setItem("detailcustomerId", customer.ID.toString());
    this.router.navigate(['customer/detail']);
  }
}
