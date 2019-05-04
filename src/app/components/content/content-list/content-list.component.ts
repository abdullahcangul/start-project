import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Content } from 'src/app/entity/Content';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {


  contents:Content[];
  content:Content;
  AddForm:FormGroup;
  id:number;
  
  constructor(private router: Router,
    private contentService:ContentService,
    private alertifyService:AlertifyService,
    private formBuilder: FormBuilder) { }

    createContentForm() {
     
      this.AddForm = this.formBuilder.group({
  
        message: ["", [Validators.required,
          Validators.maxLength(500),
        Validators.minLength(5)]],
      });
      
   
    }

  ngOnInit() {
    
    this.id=parseInt(localStorage.getItem("detailprocessId"));
    this.getContent(this.id);
    this.createContentForm();
    
  }
  getContent(id:number){
    this.contentService.getContentOfProcessById(id).subscribe(data => {
      this.contents = data;
      
    },
    );
  }

  add(){
    if(this.AddForm.valid){
      this.content = Object.assign({},this.AddForm.value)
      this.content.isCustomer=true;//otantike olunca al
      this.content.ProcessID=parseInt(localStorage.getItem("detailprocessId")) ;

      this.contentService.add(this.content);
      this.ngOnChanges();
    }
  }
  ngOnChanges(){
    this.getContent(this.id);
  }


 


}
