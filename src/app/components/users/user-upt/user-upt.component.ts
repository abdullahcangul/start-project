import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/entity/User';

@Component({
  selector: 'app-user-upt',
  templateUrl: './user-upt.component.html',
  styleUrls: ['./user-upt.component.scss']
})
export class UserUptComponent implements OnInit {

  user:User;
  userUptdateForm:FormGroup
  id:number;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private formBuilder: FormBuilder
  ) { }

  updateUserForm(id:number) {
    this.userService.getKisiById(id).subscribe(data=>{
      this.user=data;
      console.log(data)
       id=this.user.ID
    });

    this.userUptdateForm = this.formBuilder.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      username: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      profileImageFilename: ["", Validators.maxLength(50)],
    });
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.updateUserForm(this.id)
    
  }

  update(){
    if(this.userUptdateForm.valid){
      this.user = Object.assign({},this.userUptdateForm.value)
      this.user.ID=this.id;
      this.userService.update(this.user);
    }
  }

}
