import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {SubjectComponent} from './subject-container/subject.container';
const routes: Routes = [
  {
    path: '',
    component: SubjectComponent
  }
];
@NgModule({
  declarations: [
    SubjectComponent
  ],
  exports: [
    SubjectComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ]
})
export class SubjectsModule { }

