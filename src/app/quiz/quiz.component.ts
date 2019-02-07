import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {questions} from './data/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  title;
  questions = questions['subjects'][0]['questions'][0];
  constructor(private  activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => this.title = `${params['subject']} Quiz`);
  }
  ngOnInit(): void {
    console.log(this.questions);
  }
}
