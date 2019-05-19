import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/entity/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TitleService } from 'src/app/services/title.service';
import { Title } from 'src/app/entity/Title';
import { DepartmanService } from 'src/app/services/departman.service';
import { Departmant } from 'src/app/entity/Departmant';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  employee: Employee;
  employeeAddForm: FormGroup;
  titles: Title[];
  departmants: Departmant[];

  //for image
  imageSrc;
  sellersPermitFile: any;
  selectedFileName:string;
  //base64s
  sellersPermitString: string;


  currentId: number = 0;


  constructor(private departmantServices: DepartmanService,
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private titleServices: TitleService) { }

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

  getDropdown() {
    this.titleServices.getTitles().subscribe(data => {
      this.titles = data;
    });

  }
  getDepartmant() {
    this.departmantServices.getDepartmants().subscribe(data => {
      this.departmants = data;
    });
  }

  createUserForm() {
    this.employeeAddForm = this.formBuilder.group(
      {

        name: ["", [Validators.required,
        Validators.maxLength(25),
        Validators.minLength(3)]],

        surname: ["", [Validators.required,
        Validators.maxLength(25),
        Validators.minLength(3)]],

        email: ["", [Validators.required,
        Validators.email]],

        profileImageFilename: ["", [Validators.required,
          ]],

        password: ["", [Validators.required,
        Validators.maxLength(15),
        Validators.minLength(3)]],

        TitleID: ["", Validators.required],
        DepartmantID: ["", Validators.required],
        
      });
  }
  ngOnInit() {
    this.getDropdown();
    this.getDepartmant();
    this.createUserForm();
  }

  add() {
    if (this.employeeAddForm.valid) {
      this.employee = Object.assign({}, this.employeeAddForm.value)
      this.employee.fileBase64String=this.sellersPermitString;
      this.employee.FileName=this.selectedFileName;
      console.log(this.employee)
      this.employeeService.add(this.employee)
    }
  }
}
