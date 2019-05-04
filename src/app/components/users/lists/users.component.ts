import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/entity/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  selectedKisi: User;
  users:User[];
  
  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
    this.userService.getUsers().subscribe(data => {
   
      this.users = data;

    });
  }
  
  onSelect(user: User): void {
    this.selectedKisi = user;
  }

  onDelete(user: User): void {
    console.log(user.ID)
    this.userService.delete(user.ID).subscribe(data=>{
      this.getUsers();
    });
    
  }
 
}
