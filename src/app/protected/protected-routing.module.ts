import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPagesComponent } from '../error-pages/error-pages.component';
import { BankInfoComponent } from './bank-info/bank-info.component';
import { BankTransferComponent } from './bank-transfer/bank-transfer.component';
import { HomeComponent } from './home/home.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LiveExchangeComponent } from './live-exchange/live-exchange.component';
import { UserInfoComponent } from './user-info/user-info.component';


/**
 * This is where u import all the protected folders for navigation/
 * path is the name of path you'll use in routerLink.
 *
 * Note: Dont forget to import the associated component..
 *        any component import here must be added to the declaration object in protected.module.
 * */
const protected_routes: Routes = [
  {
    path     : 'dashboard',
    component: SideMenuComponent,
    children : [
      {
        path     : 'home',  // name of path
        component: HomeComponent // component for home.
      },
      {
        path     : '',  // empty path routes to home as well
        component: HomeComponent
      },
      {
        path     : 'bank-info',
        component: BankInfoComponent
      },
      {
        path     : 'live-exchange',
        component: LiveExchangeComponent
      },
      {
        path     : 'bank-transfer',  // can use this now like so routerLink="bank-transfer" in side-menu.component.html
        component: BankTransferComponent,
      },
      {
        path: 'profile',
        component: UserInfoComponent
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
