import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPagesComponent } from '../error-pages/error-pages.component';
import { LoginComponent } from '../login/login.component';
import { SideMenuComponent } from '../protected/side-menu/side-menu.component';


const routes: Routes = [
  {
    path     : '',
    component: LoginComponent
  },
  {
    path     : 'login',
    component: LoginComponent
  },
  {
    path     : 'dashboard',
    component: SideMenuComponent

  },
  {
    path     : '**',
    component: ErrorPagesComponent
  }
];

@NgModule({
  imports     : [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouteModule {
}
