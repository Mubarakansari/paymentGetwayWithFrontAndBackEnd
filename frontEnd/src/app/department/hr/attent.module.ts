import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttentRoutingModule } from './attent-routing.module';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
console.log("Hr Module");


@NgModule({
  declarations: [TeacherComponent, StudentComponent],
  imports: [
    CommonModule,
    AttentRoutingModule
  ]
})
export class AttentModule { }
