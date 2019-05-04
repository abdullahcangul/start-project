import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/entity/User';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
  providers:[]
})
export class UserAddComponent implements OnInit {

  user:User;
  userAddForm:FormGroup

  constructor(private usersService:UsersService,private formBuilder: FormBuilder) { }

  createUserForm() {
    this.userAddForm = this.formBuilder.group({
     
      name: ["", Validators.required],
      surname: ["", Validators.required],
      username: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      profileImageFilename: ["", Validators.maxLength(50)],
    });
  }

  ngOnInit() {
    this.createUserForm();
  }

  add(){
    if(this.userAddForm.valid){
      this.user = Object.assign({},this.userAddForm.value)
      console.log(this.user)
      this.usersService.add(this.user)
    }
  }
}
