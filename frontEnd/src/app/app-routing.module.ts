import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch : 'full'},
  {path: 'dashboard', loadChildren :()=> import('./dashboard/dashboard.module').then(mod => mod.DashboardModule) },  
  {path: 'department', loadChildren: ()=> import('./department/department.module').then(mod=>mod.DepartmentModule)},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
