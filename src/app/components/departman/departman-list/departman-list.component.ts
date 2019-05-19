import { Component, OnInit } from '@angular/core';
import { Departmant } from 'src/app/entity/Departmant';
import { Router } from '@angular/router';
import { DepartmanService } from 'src/app/services/departman.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-departman-list',
  templateUrl: './departman-list.component.html',
  styleUrls: ['./departman-list.component.scss']
})
export class DepartmanListComponent implements OnInit {
  selectedDepartmant: Departmant;
  departmants:Departmant[];
  
  constructor(private router: Router,private departmantServis:DepartmanService,private alertifyService:AlertifyService) { }

  ngOnInit() {
    this.getDepartmants();
  }
  getDepartmants(){
    this.departmantServis.getDepartmants().subscribe(data => {
      this.departmants = data;
    });
  }

  onSelect(departmant: Departmant): void {
    this.selectedDepartmant = departmant;
  }

  onDelete(departmant: Departmant): void {
    if(!confirm('Silmek istediğinizden emin misiniz ?')){
      return
    }
    this.departmantServis.delete(departmant.ID).subscribe(data=>{
     
        this.getDepartmants();
        this.alertifyService.success(departmant.name+" Silindi");
     
      
    },(err)=>{
      if(err="Bad Request"){
        this.alertifyService.error("Departmanın Employeeleri Var Silinemez!!!");
      }else{
        this.alertifyService.error(" Hata olustu");
      }
    });
    
  }
  onUptdate(departmant):void{
    localStorage.removeItem("editdepartmantId");
    localStorage.setItem("editdepartmantId", departmant.ID.toString());
    this.router.navigate(['departmant/uptdate']);
  }

}
