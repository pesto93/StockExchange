import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPagesComponent } from '../error-pages/error-pages.component';
import { HomeComponent } from './home/home.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

const protected_routes: Routes = [
  {
    path     : 'dashboard',
    component: SideMenuComponent,
    children : [
      {
        path     : 'home',
        component: HomeComponent
      },
      {
        path     : '',
        component: HomeComponent
      },
      {
        path     : '**',
        component: ErrorPagesComponent
      }
    ]
  },

];

@NgModule({
  imports     : [
    CommonModule,
    RouterModule.forChild(protected_routes)

  ],
  declarations: []
})
export class ProtectedRoutingModule {
}
