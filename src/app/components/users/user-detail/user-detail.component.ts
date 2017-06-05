import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';
import { User } from '../../../models/user.model';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailComponent{

  originalName: string;
  selectedUser: User;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set user(value: User){
    if (value) { this.originalName = value.name; }
    this.selectedUser = Object.assign({}, value);
  }
 

}
