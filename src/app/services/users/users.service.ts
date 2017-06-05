import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppStore } from '../../app-store';
import { User } from '../../models/user.model';
import 'rxjs/add/operator/map';
import {
  ADD_USERS,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER
} from '../../reducer/users.reducer';

const BASE_URL = 'http://localhost:3000/users/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class UsersService {

  user$ : Observable<User[]> = this.store.select('users');

  constructor(
    private store: Store<AppStore>,
    private http: Http
  ) { }

  loadUser(){
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .map(payload => ({type : ADD_USERS, payload}))
      .subscribe(action => this.store.dispatch(action));
  }

}
