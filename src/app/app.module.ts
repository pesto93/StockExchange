import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouteModule } from './app-route/app.route.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProtectedModule } from './protected/protected.module';
import { GloballEventManagerService } from './service/globall-event-manager.service';
import { ErrorPagesComponent } from './error-pages/error-pages.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorPagesComponent
  ],
  imports     : [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ProtectedModule,
    AppRouteModule
  ],
  providers   : [GloballEventManagerService],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
