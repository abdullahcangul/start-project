import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/entity/Title';
import { Router } from '@angular/router';
import { TitleService } from 'src/app/services/title.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.scss']
})
export class TitleListComponent implements OnInit {

  selectedTitle: Title;
  titles:Title[];
  
  constructor(private router: Router,private titleServis:TitleService,private alertifyService:AlertifyService) { }

  ngOnInit() {
    this.getTitles();
  }
  getTitles(){
    this.titleServis.getTitles().subscribe(data => {
      this.titles = data;
    });
  }

  onSelect(title: Title): void {
    this.selectedTitle = title;
  }

  onDelete(title: Title): void {
    if(!confirm('Silmek istediğinizden emin misiniz ?')){
      return
    }
    this.titleServis.delete(title.ID).subscribe(data=>{
      
        this.getTitles();
        this.alertifyService.success(title.name+" Silindi");
    },(err)=>{
      if(err="Bad Request"){
        this.alertifyService.error("Unvanın  Employeeleri Var Silinemez!!!");
      }else{
        this.alertifyService.error(" Hata olustu");
      }
    });
    
  }
  onUptdate(title):void{
    localStorage.removeItem("edittitleId");
    localStorage.setItem("edittitleId", title.ID.toString());
    this.router.navigate(['title/uptdate']);
  }

}
