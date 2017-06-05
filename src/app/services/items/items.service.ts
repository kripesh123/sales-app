import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app-store';
import { Item } from '../../models/item.model';
import 'rxjs/add/operator/map';
import {
  ADD_ITEMS,
  CREATE_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM
} from '../../reducer/items.reducer';

const BASE_URL = 'http://localhost:3000/items/';
const HEADER = { headers : new Headers({'Content-Type':'application/json'}) };

@Injectable()
export class ItemsService {

  items$ : Observable<Item[]> = this.store.select('items');

  constructor(
    private http:Http,
    private store : Store<AppStore>
    ) { }

  loadItems() {
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .map(payload => ({ type: ADD_ITEMS, payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  saveItem(item: Item) {
    return (item.id) ? this.updateItem(item) : this.createItem(item);
  }

  createItem(item: Item) {
    console.log('CREATE_ITEM',item)
    return this.http.post(`${BASE_URL}`, JSON.stringify(item), HEADER)
      .map(res => res.json())
      .map(payload => ({ type: CREATE_ITEM, payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  updateItem(item: Item) {
    console.log('UPDATE_ITEM',item)
    return this.http.put(`${BASE_URL}${item.id}`, JSON.stringify(item), HEADER)
      .subscribe(action => this.store.dispatch({ type: UPDATE_ITEM, payload: item }));
  }

  deleteItem(item: Item) {
    return this.http.delete(`${BASE_URL}${item.id}`)
      .subscribe(action => this.store.dispatch({ type: DELETE_ITEM, payload: item }));
  }
}
