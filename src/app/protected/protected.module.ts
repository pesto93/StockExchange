import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { BankInfoComponent } from './bank-info/bank-info.component';
import { BankTransferComponent } from './bank-transfer/bank-transfer.component';
import { DailyTradingComponent } from './daily-trading/daily-trading.component';
import { DepositComponent } from './deposit/deposit.component';
import { HomeComponent } from './home/home.component';
import { LiveExchangeComponent } from './live-exchange/live-exchange.component';
import { MgComponent } from './mg/mg.component';
import { PayPalComponent } from './pay-pal/pay-pal.component';
import { ProtectedRoutingModule } from './protected-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { WuComponent } from './wu/wu.component';

@NgModule({

  declarations: [
    SideMenuComponent,
    HomeComponent,
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
    CommonModule,
    RouterModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule {
}
