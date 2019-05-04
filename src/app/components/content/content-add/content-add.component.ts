import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Content } from 'src/app/entity/Content';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-content-add',
  templateUrl: './content-add.component.html',
  styleUrls: ['./content-add.component.scss']
})
export class ContentAddComponent implements OnInit {


  content:Content;
  AddForm:FormGroup;

  constructor(private contentService:ContentService,private formBuilder: FormBuilder) { }

  createContentForm() {
    this.AddForm = this.formBuilder.group({

      message: ["", [Validators.required,
        Validators.maxLength(500),
      Validators.minLength(5)]],

    });
  }
  ngOnInit() {
    this.createContentForm();
  }

  add(){
    if(this.AddForm.valid){
      this.content = Object.assign({},this.AddForm.value)
      this.content.isCustomer=true;//otantike olunca al
      this.content.ProcessID=parseInt(localStorage.getItem("detailprocessId")) ;
      console.log(this.content);
      this.contentService.add(this.content)
    }
  }
}
