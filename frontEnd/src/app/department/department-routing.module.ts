import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseComponent } from './purchase/purchase.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'sales', pathMatch: 'full'
  },
  {
    path: 'hr', loadChildren: ()=> import('./hr/attent.module').then(mod=>mod.AttentModule)
  },
 
  {
    path: 'sales',
    component: SalesComponent 
  },
  {
    path: 'purchase',
    component: PurchaseComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
