import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { SalesComponent } from './sales/sales.component';
import { PurchaseComponent } from './purchase/purchase.component';

console.log("Department module call");

@NgModule({
  declarations: [SalesComponent, PurchaseComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
