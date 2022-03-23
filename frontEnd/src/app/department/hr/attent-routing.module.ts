import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {path: '', redirectTo: 'student', pathMatch: 'full'},
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'teacher',
    component: TeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttentRoutingModule { }
