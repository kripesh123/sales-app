import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../../models/user.model';
import {UsersService} from '../../services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {

  users$ : Observable<User[]>;
  selectedUser: User;

  constructor(
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.users$ = this.usersService.users$;
    this.usersService.loadUsers();
  }

  resetUser(){
    let emptyUser: User = { id: null, name: '', bio: '' };
    this.selectedUser = emptyUser;
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

  saveUser(user: User) {
    this.usersService.saveUser(user);
    this.resetUser();
  }

  deleteUser(user: User) {
    this.usersService.deleteUser(user);
    this.resetUser();
  }
}
