import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Widget } from '../../models/widget.model';
import { WidgetsService } from '../../services/widgets/widgets.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class WidgetsComponent implements OnInit {

  widgets$ : Observable<Widget[]>;
  selectedWidget: Widget;
  constructor(
    private widgetsService : WidgetsService
  ) { }

  ngOnInit() {
    this.widgets$ = this.widgetsService.widgets$;
    this.widgetsService.loadWidgets();
  }

   resetWidget() {
    let emptyWidget: Widget = {id: null, name: '', description: '', user: undefined};
    this.selectedWidget = emptyWidget;
  }

  selectWidget(widget: Widget) {
    this.selectedWidget = widget;
  }

  saveWidget(widget: Widget) {
    let userId = +widget.user;
    widget.user = userId;
    this.widgetsService.saveWidget(widget);
    this.resetWidget();
  }

   deleteWidget(widget: Widget) {
    this.widgetsService.deleteWidget(widget);
    this.resetWidget();
   }

}
