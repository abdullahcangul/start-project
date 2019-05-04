import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/entity/Title';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-title-add',
  templateUrl: './title-add.component.html',
  styleUrls: ['./title-add.component.scss']
})
export class TitleAddComponent implements OnInit {

  title:Title;
  AddForm:FormGroup

  constructor(private titleService:TitleService,private formBuilder: FormBuilder) { }

  createCustomerForm() {

    this.AddForm = this.formBuilder.group({

      name: ["", [Validators.required,
        Validators.maxLength(25),
      Validators.minLength(3)]],

      description: ["", [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(500)]],

    });
  }
  ngOnInit() {
    this.createCustomerForm();
  }

  add(){
    if(this.AddForm.valid){
      this.title = Object.assign({},this.AddForm.value)
      this.titleService.add(this.title)
    }
  }
}
