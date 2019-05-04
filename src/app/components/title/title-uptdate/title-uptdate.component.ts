import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from 'src/app/entity/Title';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-title-uptdate',
  templateUrl: './title-uptdate.component.html',
  styleUrls: ['./title-uptdate.component.scss']
})
export class TitleUptdateComponent implements OnInit {

  title:Title;
  AddForm:FormGroup
  id:number;

  constructor(  
    private router:Router,
    private titleService: TitleService,
    private formBuilder: FormBuilder,) { }

    updateForm(id:number) {
      
      this.AddForm = this.formBuilder.group(
        {
      ID:[""],
      name: ["", [Validators.required,
        Validators.maxLength(25),
      Validators.minLength(3)]],

      description: ["", [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(500)]],
      });

      this.titleService.getTitleById(id).subscribe(data=>{
        this.title=data;
        data.ID=id;
        this.AddForm.setValue(data)
      });
     
    }

    ngOnInit() {
      //this.id = +this.route.snapshot.paramMap.get('id');
      let id = parseInt(localStorage.getItem("edittitleId"));
    
    if(!id) {
      alert("Geçersiz işlem.")
      this.router.navigate(['title']);
      return;
    }
    this.id=id;
     this.updateForm(id);
     
   }
 
   uptdate(){
     if(this.AddForm.valid){
       this.title = Object.assign({},this.AddForm.value)
       this.title.ID=this.id;
       this.titleService.uptdate(this.title);
     }
   }
}
