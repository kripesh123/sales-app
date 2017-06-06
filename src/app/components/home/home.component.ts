import { Component } from '@angular/core';
import { HomeService, UserData } from '../../services/home/home.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data$: Observable<UserData[]> = this.homeService.data$;

  constructor(private homeService: HomeService) { }

}
