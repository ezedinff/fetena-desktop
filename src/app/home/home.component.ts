import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ScienceTypeComponent} from './science-type.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  buttons = ['7 - 8', '9 - 10', '11 - 12'];
  constructor(private router: Router, private matdialog: MatDialog) {}
  selectGrade(grade) {
    if (grade === '7 - 8') {
      this.router.navigateByUrl(`/grades/8/subjects`);
    } else if (grade === '9 - 10') {
      this.router.navigateByUrl(`/grades/10/subjects`);
    } else {
      console.log(grade);
      const dialogref = this.matdialog.open(ScienceTypeComponent, {width: '400px'});
      dialogref.afterClosed().subscribe(data =>  this.router.navigateByUrl(`/grades/${12}-${data}/subjects`));

    }
  }
}
