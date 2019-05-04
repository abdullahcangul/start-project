import { Component, OnInit } from '@angular/core';
import { Departmant } from 'src/app/entity/Departmant';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DepartmanService } from 'src/app/services/departman.service';

@Component({
  selector: 'app-departman-add',
  templateUrl: './departman-add.component.html',
  styleUrls: ['./departman-add.component.scss']
})
export class DepartmanAddComponent implements OnInit {

  departmant:Departmant;
  AddForm:FormGroup

  constructor(private departmantService:DepartmanService,private formBuilder: FormBuilder) { }

  createCustomerForm() {

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
    this.createCustomerForm();
  }

  add(){
    if(this.AddForm.valid){
      this.departmant = Object.assign({},this.AddForm.value)
      this.departmantService.add(this.departmant)
    }
  }
}
