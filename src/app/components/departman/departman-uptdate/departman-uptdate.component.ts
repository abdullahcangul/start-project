import { Component, OnInit } from '@angular/core';
import { Departmant } from 'src/app/entity/Departmant';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TitleService } from 'src/app/services/title.service';
import { DepartmanService } from 'src/app/services/departman.service';

@Component({
  selector: 'app-departman-uptdate',
  templateUrl: './departman-uptdate.component.html',
  styleUrls: ['./departman-uptdate.component.scss']
})
export class DepartmanUptdateComponent implements OnInit {

  departmant:Departmant;
  AddForm:FormGroup
  id:number;

  constructor(  
    private router:Router,
    private departmantService: DepartmanService,
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
        Validators.maxLength(25)]],
      });

      this.departmantService.getDepartmantById(id).subscribe(data=>{
        this.departmant=data;
        data.ID=id;
        this.AddForm.setValue(data)
      });
     
    }

    ngOnInit() {
      //this.id = +this.route.snapshot.paramMap.get('id');
      let id = parseInt(localStorage.getItem("editdepartmantId"));
    
    if(!id) {
      alert("Geçersiz işlem.")
      this.router.navigate(['departmant']);
      return;
    }
    this.id=id;
     this.updateForm(id);
     
   }
 
   uptdate(){
     if(this.AddForm.valid){
       this.departmant = Object.assign({},this.AddForm.value)
       this.departmant.ID=this.id;
       this.departmantService.uptdate(this.departmant);
     }
   }

}
