import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'user',  pathMatch: 'full'},
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'product',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
