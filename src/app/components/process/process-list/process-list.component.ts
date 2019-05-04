import { Component, OnInit } from '@angular/core';
import { Process } from 'src/app/entity/Process';
import { Router } from '@angular/router';
import { ProcessService } from 'src/app/services/process.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss']
})
export class ProcessListComponent implements OnInit {
  selectedProcess: Process;
  processes:Process[];
  id:number;
  constructor(private router: Router,private processServis:ProcessService,private alertifyService:AlertifyService) { }

  ngOnInit() {
    let id = parseInt(localStorage.getItem("detailprojectId"));
    console.log(id)
    if(id){
      this.getProcessesOfProject(id);
      localStorage.removeItem("detailprojectId");
    }else{
      this.getProcesses();
    }
    
  }
  getProcesses(){
    this.processServis.getProcessess().subscribe(data => {
      this.processes = data;
    });
  }
  getProcessesOfProject(id:number){
    this.processServis.getProccessOfProjectById(id).subscribe(data => {
      this.processes = data;
    });
  }

  onSelect(process: Process): void {
    this.selectedProcess = process;
  }

  onDelete(process: Process): void {
    this.processServis.delete(process.ID).subscribe(data=>{
      if(data){
        this.getProcesses();
        this.alertifyService.success(process.priority +" Öncelikli işlem Silindi");
      }else{
        this.alertifyService.error("Hata olustu");
      }
      
    },(err)=>{
      this.alertifyService.error(err+" Hata olustu");
    });
    
  }
  onUptdate(process):void{
    localStorage.removeItem("editprocessId");
    localStorage.setItem("editprocessId", process.ID.toString());
    this.router.navigate(['process/uptdate']);
  }
  onDetail(process):void{
    localStorage.removeItem("detailprocessId");
    localStorage.setItem("detailprocessId", process.ID.toString());
    this.router.navigate(['content']);
  }
}
