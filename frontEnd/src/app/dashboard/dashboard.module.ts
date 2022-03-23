import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
console.log("Dashboard router load");

@NgModule({
  declarations: [UserComponent, ProductComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
