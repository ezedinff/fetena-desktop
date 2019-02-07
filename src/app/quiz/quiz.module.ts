import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {QuizComponent} from './quiz.component';
import {MatButtonModule, MatListModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {QuestionComponent} from './question/question.component';

const routes: Routes =  [
  {
    path: '',
    component: QuizComponent
  }
];

@NgModule({
  declarations: [QuizComponent, QuestionComponent],
  exports: [QuizComponent, RouterModule],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class QuizModule { }

