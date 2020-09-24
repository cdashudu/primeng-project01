import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { LoginComponent } from './components/login/login.component';
import { MemberConsoleComponent } from './components/member-console/member-console.component';
import { ExchangeConsoleComponent } from './components/exchange-console/exchange-console.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    LoaderComponent,
    LoginComponent,
    MemberConsoleComponent,
    ExchangeConsoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
