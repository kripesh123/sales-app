import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {UsersComponent} from './components/users/users.component';
import {ItemsComponent} from './components/items/items.component';
import {WidgetsComponent} from './components/widgets/widgets.component';


const routes: Routes = [
  {path: '',        redirectTo: '/home', pathMatch: 'full' },
  {path: 'home',    component: HomeComponent},
  {path: 'items',   component: ItemsComponent},
  {path: 'widgets', component: WidgetsComponent},
  {path: 'users',   component: UsersComponent},
  {path: '**',      redirectTo: '/home' }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(routes);