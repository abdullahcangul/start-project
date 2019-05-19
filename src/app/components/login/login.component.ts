import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/app/entity/loginUser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  loginUser:LoginUser;
  AddForm:FormGroup;
 

  constructor(private authService:AuthService,private formBuilder: FormBuilder) { }

  createForm() {

    this.AddForm = this.formBuilder.group({

      username: ["", [Validators.required,
        Validators.email,]],

      password: ["", [Validators.required,
        Validators.minLength(1),
        Validators.maxLength(25)]],

    });
  }
  ngOnInit() {
    this.createForm();
  }

  add(){
    if(this.AddForm.valid){
      this.loginUser = Object.assign({},this.AddForm.value)
      this.authService.login(this.loginUser)
     
    }
  }
}
