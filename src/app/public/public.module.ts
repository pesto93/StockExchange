import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

@NgModule({
  imports     : [
    CommonModule,
    RouterModule.forChild([
      {path: 'login', component: LoginComponent},
      {path: 'registration', component: RegisterComponent},
      {path: 'reset', component: ResetPasswordComponent},
    ])
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent
  ]
})
export class PublicModule {
}
