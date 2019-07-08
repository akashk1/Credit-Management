import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreditMgmtComponent } from './credit-mgmt/credit-mgmt.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { AppRouting } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { SendCreditComponent } from './send-credit/send-credit.component';
import { CreditMgmtService } from './credit-mgmt.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreditMgmtComponent,
    ViewAllUsersComponent,
    ViewDetailComponent,
    SendCreditComponent
  ],
  imports: [
    BrowserModule,AppRouting,FormsModule,HttpClientModule
  ],
  providers: [CreditMgmtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
