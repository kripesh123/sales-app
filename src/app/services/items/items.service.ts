import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Item} from '../../models/item.model';
import {AppStore} from '../../app-store';
import 'rxjs/add/operator/map';
import {
  ADD_ITEMS,
  CREATE_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM
} from '../../reducer/items.reducer';

const BASE_URL ='http://localhost:3000/items/';
const HEADER = {header : new Headers({'Content-Type':'application/json'}) };
@Injectable()
export class ItemsService {

  constructor(
    private http:Http,
    private store : Store<AppStore>
    ){}

    items$ : Observable<Item[]> = this.store.select('items');

    loadItems(){
      return this.http.get(BASE_URL)
        .map(res => res.json())
        .map(payload => ({type: ADD_ITEMS, payload}))
        .subscribe(action => this.store.dispatch(action));
    }

    deleteItem(item : Item){
      return this.http.delete(`${BASE_URL}${item.id}`)
      .subscribe(action => this.store.dispatch({type: DELETE_ITEM, payload: item}));
    }

}
