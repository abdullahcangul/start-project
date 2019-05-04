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
    this.titleServis.delete(title.ID).subscribe(data=>{
      if(data){
        this.getTitles();
        this.alertifyService.success(title.name+" Silindi");
      }else{
        this.alertifyService.error("Hata olustu");
      }
      
    },(err)=>{
      this.alertifyService.error(err+" Hata olustu");
    });
    
  }
  onUptdate(title):void{
    localStorage.removeItem("edittitleId");
    localStorage.setItem("edittitleId", title.ID.toString());
    this.router.navigate(['title/uptdate']);
  }

}
