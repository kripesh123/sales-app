import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Item } from '../../../models/item.model';
import { User } from '../../../models/user.model';
import { UsersService } from '../../../services/users/users.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemDetailComponent implements OnInit {

  originalName: string;
  selectedItem: Item;
  users$: Observable<User[]> = this.usersService.users$;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set item(value: Item){
    if (value) { this.originalName = value.name; }
    this.selectedItem = Object.assign({}, value);
  }

  constructor(private usersService : UsersService){}

  ngOnInit() {
    this.usersService.loadUsers();
  }
}
