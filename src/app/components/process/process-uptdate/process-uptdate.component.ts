import { Component, OnInit } from '@angular/core';
import { Process } from 'src/app/entity/Process';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProcessService } from 'src/app/services/process.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/entity/Customer';

@Component({
  selector: 'app-process-uptdate',
  templateUrl: './process-uptdate.component.html',
  styleUrls: ['./process-uptdate.component.scss']
})
export class ProcessUptdateComponent implements OnInit {

  process:Process;
  AddForm:FormGroup;
  id:number;

  constructor(  
    private router:Router,
    private processService: ProcessService,
    private formBuilder: FormBuilder,) { }

    updateForm(id:number) {
      
      this.AddForm = this.formBuilder.group(
        { 
      ID:[""],
      priority: ["", [Validators.required,
        Validators.maxLength(25),
      Validators.minLength(3)]],

      status: ["", [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25)]],

        projectedFinishDate: [""],
        EmployeeID: ["", Validators.required],
      });

      this.processService.getProcessById(id).subscribe(data=>{
        this.process=data;
        data.ID=id;
        this.AddForm.setValue(data)
      });
     
    }

    ngOnInit() {
      //this.id = +this.route.snapshot.paramMap.get('id');
      let id = parseInt(localStorage.getItem("editprocessId"));
    if(!id) {
      alert("Geçersiz işlem.")
      this.router.navigate(['process']);
      return;
    }
    this.id=id;
     this.updateForm(id);
     
   }

   uptdate(){
     if(this.AddForm.valid){
       this.process = Object.assign({},this.AddForm.value)
       this.process.ID=this.id;
       this.processService.uptdate(this.process);
     }
   }
}
