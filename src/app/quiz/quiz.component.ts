import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Question} from '../shared/models/question';
import {QuestionService} from '../shared/services/question.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  title;
  index = 0;
  questions$: Observable<Question[]>;
  constructor(private  activatedRoute: ActivatedRoute, private questionservice: QuestionService) {
    this.activatedRoute.params.subscribe(params => {
      this.title = `${params['subject']} Quiz`;
      this.questions$ = this.questionservice.getQuestions(params['subject'], params['grade']).valueChanges();
    });
  }
    ngOnInit(): void {
  //  console.log(this.questions);
  }
}
