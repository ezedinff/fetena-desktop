import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule, MatDialogModule, MatIconModule, MatRadioModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ScienceTypeComponent} from './science-type.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes  = [
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatRadioModule,
    MatToolbarModule
  ],
  declarations: [HomeComponent, ScienceTypeComponent],
  exports: [HomeComponent, RouterModule],
  entryComponents: [ScienceTypeComponent],
})
export class HomeModule { }
