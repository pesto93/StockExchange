import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@NgModule({
  imports     : [
    CommonModule,
    RouterModule.forChild([
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {
        path     : '',
        component: SideMenuComponent,
        children : [
          {path: 'dashboard', component: HomeComponent}
        ]
      }
    ])
  ],
  declarations: [SideMenuComponent, HomeComponent]
})
export class ProtectedModule {
}
