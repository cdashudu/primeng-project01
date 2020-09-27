import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { LoginComponent } from './components/login/login.component';
import { MemberConsoleComponent } from './components/member-console/member-console.component';
import { ExchangeConsoleComponent } from './components/exchange-console/exchange-console.component';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {SidebarModule} from 'primeng/sidebar';

import { MatSidenavModule } from '@angular/material/sidenav';
import {CdkScrollable} from '@angular/cdk/scrolling';
import {ScrollingModule} from '@angular/cdk/scrolling';

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
    MatSidenavModule,
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    InputTextModule,
		CheckboxModule,
		ButtonModule,
		RadioButtonModule,
    InputTextareaModule,
    DropdownModule,
    TabViewModule,
    CardModule,
    SidebarModule
  ],
  exports:[ScrollingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
