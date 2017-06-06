import { Injectable } from '@angular/core';
import {ItemsService} from '../../services/items/items.service';
import {WidgetsService} from '../../services/widgets/widgets.service';
import {UsersService} from '../../services/users/users.service';
import {Item} from '../../models/item.model';
import {User} from '../../models/user.model';
import {Widget} from '../../models/widget.model';
import {Observable} from 'rxjs/Observable';

export interface UserData{
  name: string;
  items: Item[];
  widgets: Widget[];
}

@Injectable()
export class HomeService {

  items$: Observable<Item[]> = this.itemsService.items$;
  users$: Observable<User[]> = this.usersService.users$;
  widgets$: Observable<Widget[]> = this.widgetsService.widgets$;

  data$: Observable<UserData[]> = Observable.combineLatest(
    this.users$, this.items$, this.widgets$,
    (users, items, widgets)=>{
      return users.map(user => {
        return Object.assign({},{
          name: user.name,
          items: items.filter(item=> item.user === user.id),
          widgets: widgets.filter(widget=> widget.user === user.id)
        });
      });
    });

  constructor(
    private usersService: UsersService,
    private itemsService: ItemsService,
    private widgetsService: WidgetsService
  ) { 
    this.usersService.loadUsers();
    this.itemsService.loadItems();
    this.widgetsService.loadWidgets();
  }

}
