import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/entity/Employee';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Title } from 'src/app/entity/Title';
import { Departmant } from 'src/app/entity/Departmant';
import { DepartmanService } from 'src/app/services/departman.service';
import { TitleService } from 'src/app/services/title.service';
import { async } from 'q';

@Component({
  selector: 'app-employee-uptdate',
  templateUrl: './employee-uptdate.component.html',
  styleUrls: ['./employee-uptdate.component.scss']
})
export class EmployeeUptdateComponent implements OnInit {

  employee:Employee;
  employeeUptdateForm:FormGroup
  id:number;
  titles:Title[];
  selectedTitle:number;
  selectedDepartmant:number;
  departmants:Departmant[];

    //for image
    imageSrc;
    sellersPermitFile: any;
    selectedFileName:string;
    //base64s
    sellersPermitString: string;

    currentId: number = 0;

  constructor(  
    private router:Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private departmantServices:DepartmanService,
    private titleServices:TitleService) { }

    updateEmployeeForm(id:number) {
      console.log(id)
      
      this.employeeService.getEmployeeById(id).subscribe(data=>{
       
        this.employee=data;
        this.selectedDepartmant=this.employee.DepartmantID;
        this.selectedTitle=this.employee.TitleID;
        this.employeeUptdateForm.setValue(data)
      });
     


      this.employeeUptdateForm = this.formBuilder.group(
        {
          
       ID:[""],
 
       name: ["", [Validators.required,
        Validators.maxLength(25),
      Validators.minLength(3)]],

      surname: ["", [Validators.required,
        Validators.maxLength(25),
      Validators.minLength(3)]],

      email:["", [Validators.required,
        Validators.email]],

      password: ["", [Validators.required,
        Validators.maxLength(15),
        Validators.minLength(3)]],

        TitleID: ["",Validators.required],
        DepartmantID: ["",Validators.required],
      profileImageFilename: ["",[ Validators.required]],
      });

    
    
    }


    //add image
  public picked(event, field) {
    this.currentId = field;
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      if (field == 1) {
        this.sellersPermitFile = file;
        this.selectedFileName=file.name;
        this.handleInputChange(file); //turn into base64
      }
    }
    else {
      alert("Resim seçilmedi");
    }
  }

  handleInputChange(files) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('gecersiz format');
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    //this.imageSrc = base64result;
    let id = this.currentId;
    
        this.sellersPermitString = base64result;
      

        console.log('1', this.sellersPermitString);
  }

     getTitles(){
      this.titleServices.getTitles().subscribe(data => {      
        this.titles = data;
      });
     
    }
     getDepartmant(){
      this.departmantServices.getDepartmants().subscribe(data => {      
        this.departmants = data;
      });
    }
    ngOnInit() {
      
     
      //this.id = +this.route.snapshot.paramMap.get('id');
      let employeeId = parseInt(localStorage.getItem("editemployeeId"));
   
    if(!employeeId) {
      alert("Geçersiz işlem.")
      this.router.navigate(['employee']);
      return;
    }
    
   
    console.log(employeeId);
    this.id=employeeId;
    this.updateEmployeeForm(employeeId);
    
    this.getTitles();
    this.getDepartmant();
    
   }
 
   uptdate(){
     if(this.employeeUptdateForm.valid){
       this.employee = Object.assign({},this.employeeUptdateForm.value)
       this.employee.ID=this.id;
       this.employee.fileBase64String=this.sellersPermitString;
       this.employee.FileName=this.selectedFileName;
       console.log(this.employee)
       this.employeeService.uptdate(this.employee);
     }
   }

}
