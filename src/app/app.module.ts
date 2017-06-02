import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { ItemsComponent } from './components/items/items.component';
import { UsersComponent } from './components/users/users.component';
import { WidgetsComponent } from './components/widgets/widgets.component';

import {HomeService} from './services/home/home.service';
import {UsersService} from './services/users/users.service';
import {ItemsService} from './services/items/items.service';
import {WidgetsService} from './services/widgets/widgets.service';

import { items } from './reducer/items.reducer';
import { users } from './reducer/users.reducer';
import { widgets } from './reducer/widgets.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
    UsersComponent,
    WidgetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    StoreModule.provideStore({ items, users, widgets })
  ],
  exports: [],
  providers: [HomeService,UsersService,ItemsService,WidgetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
