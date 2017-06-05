import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {Item} from '../../../models/item.model';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListComponent {

  @Input() items : Item[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
