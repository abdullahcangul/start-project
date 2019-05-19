import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/entity/Project';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-uptdate',
  templateUrl: './project-uptdate.component.html',
  styleUrls: ['./project-uptdate.component.scss']
})
export class ProjectUptdateComponent implements OnInit {


  project:Project;
  AddForm:FormGroup
  id:number;

  constructor(  
    private router:Router,
    private projectService: ProjectService,
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

        Processes:[""],
      });

      this.projectService.getProjectById(id).subscribe(data=>{
        this.project=data;
        //data.ID=id;
        console.log("kkkkkk")
        console.log(data)
        this.AddForm.setValue(data)
        
      });
     
    }

    ngOnInit() {
      //this.id = +this.route.snapshot.paramMap.get('id');
      let id = parseInt(localStorage.getItem("editprojectId"));
    
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
       this.project = Object.assign({},this.AddForm.value)
       this.project.ID=this.id;
       this.projectService.uptdate(this.project);
     }
   }
}
