import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Item} from '../../models/item.model';
import {ItemsService} from '../../services/items/items.service';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsComponent implements OnInit {

  items$ : Observable<Item[]>;
  selectedItem: Item;

  constructor(
    private itemsService : ItemsService
  ) { }

  ngOnInit() {
    this.items$ = this.itemsService.items$;
    this.itemsService.loadItems();
  }

  resetItem(){
    let emptyItem: Item = { id: null, name: '', description: '', user: undefined };
    this.selectedItem = emptyItem;
  }

  selectItem(item: Item) {
    this.selectedItem = item;
  }

  saveItem(item: Item){
    this.itemsService.saveItem(item);

    this.resetItem();
  }

  deleteItem(item: Item){
    this.itemsService.deleteItem(item);

    this.resetItem();
  }
}
