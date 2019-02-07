import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'grades',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'grades/:grade/subjects',
    loadChildren: './subjects/subjects.module#SubjectsModule'
  },
  {
    path: 'grades/:grade/subjects/:subject/quiz',
    loadChildren: './quiz/quiz.module#QuizModule'
  },
  {
    path: '', redirectTo: 'grades', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'grades'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
