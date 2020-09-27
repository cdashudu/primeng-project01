import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MemberConsoleComponent} from './components/member-console/member-console.component'
import {LoginComponent} from './components/login/login.component'

const routes: Routes = [
  {
    path: 'member',
    component: MemberConsoleComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'member'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
