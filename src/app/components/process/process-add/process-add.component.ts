import { Component, OnInit } from '@angular/core';
import { Process } from 'src/app/entity/Process';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProcessService } from 'src/app/services/process.service';

@Component({
  selector: 'app-process-add',
  templateUrl: './process-add.component.html',
  styleUrls: ['./process-add.component.scss']
})
export class ProcessAddComponent implements OnInit {


  process:Process;
  AddForm:FormGroup

  constructor(private processService:ProcessService,private formBuilder: FormBuilder) { }

  createForm() {

    this.AddForm = this.formBuilder.group({

      name: ["", [Validators.required,
        Validators.maxLength(25),
      Validators.minLength(3)]],

      description: ["", [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25)]],

    });
  }
  ngOnInit() {
    this.createForm();
  }

  add(){
    if(this.AddForm.valid){
      this.process = Object.assign({},this.AddForm.value)
      this.processService.add(this.process)
    }
  }

}
