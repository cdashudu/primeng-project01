import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('src/app/components/login/login.module').then(m => m.LoginModule)
},
{
  path: 'member',
  component: LayoutComponent,
  children: [{
      path: 'dashboard',
      loadChildren: () => import('src/app/components/dashboard/dashboard.module').then(m => m.DashboardModule),
      // canActivate: [AuthGuard]
  }]
},
  { path: '**', redirectTo: 'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
