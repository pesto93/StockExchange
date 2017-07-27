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
import { DailyTradingComponent } from './daily-trading/daily-trading.component';
import { DepositComponent } from './deposit/deposit.component';
import { WuComponent } from './wu/wu.component';
import { MgComponent } from './mg/mg.component';
import { BankTransferComponent } from './bank-transfer/bank-transfer.component';
import { PayPalComponent } from './pay-pal/pay-pal.component';
import { BankInfoComponent } from './bank-info/bank-info.component';
import { UserInfoComponent } from './user-info/user-info.component';


const routes : Routes = [
  {path: '' , component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: HomeComponent},
  {path: 'live-exchange', component: LiveExchangeComponent},
  {path: 'daily-trading', component: DailyTradingComponent},
  {path: 'deposit', component: DepositComponent},
  {path: 'wu', component: WuComponent},
  {path: 'mg', component: MgComponent},
  {path: 'bank-transfer', component: BankTransferComponent},
  {path: 'pay-pal', component: PayPalComponent},
  {path: 'form-wizard', component: BankInfoComponent},
  {path: 'form-common', component: UserInfoComponent}
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
    LiveExchangeComponent,
    DailyTradingComponent,
    DepositComponent,
    WuComponent,
    MgComponent,
    BankTransferComponent,
    PayPalComponent,
    BankInfoComponent,
    UserInfoComponent
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
