import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ErrorPagesComponent } from './error-pages/error-pages.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { GloballEventManagerService } from './service/globall-event-manager.service';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LiveExchangeComponent } from './live-exchange/live-exchange.component';


const routes : Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: HomeComponent},
  {path: 'live-exchange', component: LiveExchangeComponent},
  {path: '**', component: ErrorPagesComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ErrorPagesComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ResetPasswordComponent,
    SideMenuComponent,
    LiveExchangeComponent
  ],
  imports     : [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  providers   : [GloballEventManagerService],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
