import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {Widget} from '../../../models/widget.model';

@Component({
  selector: 'widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetListComponent {
  @Input() widgets: Widget[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
 
}
