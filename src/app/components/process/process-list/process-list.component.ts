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

  constructor(private router: Router,
    private processServis:ProcessService,
    private alertifyService:AlertifyService) { }

  ngOnInit() {
    this.id = parseInt(localStorage.getItem("detailprojectId"));
    if(this.id){
      this.getProcessesOfProject(this.id);
    }
    else{
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

  getProcessesOfCustomer(id:number){
    this.processServis.getProccessOfProjectById(id).subscribe(data => {
      this.processes = data;
    });
  }

  onSelect(process: Process): void {
    this.selectedProcess = process;
  }

  onDelete(process: Process): void {
    if(!confirm('Silmek istediğinizden emin misiniz ?')){
      return
    }
    this.processServis.delete(process.ID).subscribe(data=>{
      if(data){
       // this.getProcesses();
       this.ngOnInit()
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
