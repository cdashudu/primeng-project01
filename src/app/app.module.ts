//app related
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { LoginComponent } from './components/login/login.component';
import { MemberConsoleComponent } from './components/member-console/member-console.component';
import { ExchangeConsoleComponent } from './components/exchange-console/exchange-console.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';

// angular default
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Prime NG
import { MessageService } from 'primeng/api';
import { UserIdleModule } from 'angular-user-idle';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppCommonModule } from 'src/app/app.common.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { HeaderBreadcrumbComponent } from './shared/layout/header-breadcrumb/header-breadcrumb.component';
import { MenuComponent } from './shared/layout/menu/menu.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    LoaderComponent,
    LoginComponent,
    MemberConsoleComponent,
    ExchangeConsoleComponent,
    LeftMenuComponent,
    FooterComponent,
    LayoutComponent,
    HeaderComponent,
    HeaderBreadcrumbComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserIdleModule.forRoot({ idle: 300, timeout: 1, ping: null }),
    HttpClientModule,
    AppCommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
