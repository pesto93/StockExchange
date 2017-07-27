import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { ErrorPagesComponent } from '../error-pages/error-pages.component';


const routes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorPagesComponent}
];

@NgModule({
  imports     : [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRouteModule {
}
