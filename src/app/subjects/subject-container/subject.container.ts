import {Component} from '@angular/core';
import {SubjectService} from '../../shared/services/subject.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Subject} from '../../shared/models/subject';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.container.html'
})
export class SubjectComponent {
  subjects$: Observable<Subject[]>;
  constructor(private subjectservice: SubjectService, private  activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      if (params['grade']) {
        this.subjects$ = this.getSubjects(params['grade']);
      }
    });
  }
  getSubjects(g): Observable<Subject[]> {
    return this.subjectservice.getSubjects().valueChanges().pipe(
      map(subjects => subjects.map(subject => subject.grades.filter(grade => grade == g).length > 0 ? subject : undefined)),
      map(subjects => subjects.filter(subject => subject !== undefined))
    );
  }
}
