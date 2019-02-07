import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  index = 0;
  @Input() questions$;
  currentQuestion;
  answered: boolean;
  questions;
  @ViewChild('optionA') optionA: ElementRef;
  @ViewChild('optionB') optionB: ElementRef;
  @ViewChild('optionC') optionC: ElementRef;
  @ViewChild('optionD') optionD: ElementRef;
  answer;
  next() {
    if (this.answer) {
      this.removeclass();
      if (this.answer['answer'] !== Number(this.currentQuestion.answer.index)) {
        this.answer['component'].classList.remove('incorrect-answer');
      }
      this.answer = undefined;
    }
    this.answered = false;
    this.currentQuestion = this.questions[++this.index];
  }
  chooseAnswer(ans: number, comp: HTMLElement) {
    this.answer = {
      answer: ans,
      component: comp
    };
    if (!this.answered) {
      this.markTheCorrectAnswer();
      if (Number(this.currentQuestion.answer.index) !== ans) {
        comp.classList.add('incorrect-answer');
      }
      this.answered = true;
    }
  }
  markTheCorrectAnswer() {
    if (Number(this.currentQuestion.answer.index) === 0) {
      this.optionA.nativeElement.classList.add('correct-answer');
    } else if (Number(this.currentQuestion.answer.index) === 1) {
      this.optionB.nativeElement.classList.add('correct-answer');
    } else if (Number(this.currentQuestion.answer.index) === 2) {
      this.optionC.nativeElement.classList.add('correct-answer');
    } else if (Number(this.currentQuestion.answer.index) === 3) {
      this.optionD.nativeElement.classList.add('correct-answer');
    }
  }
  ngOnInit(): void {
    this.questions$.subscribe(questions => {
      console.log(questions);
      if (questions) {
        this.questions = questions;
        this.currentQuestion = questions[0];
      }
    });
  }
  removeclass() {
    if (Number(this.currentQuestion.answer.index) === 0) {
      this.optionA.nativeElement.classList.remove('correct-answer');
    } else if (Number(this.currentQuestion.answer.index) === 1) {
      this.optionB.nativeElement.classList.remove('correct-answer');
    } else if (Number(this.currentQuestion.answer.index) === 2) {
      this.optionC.nativeElement.classList.remove('correct-answer');
    } else if (Number(this.currentQuestion.answer.index) === 3) {
      this.optionD.nativeElement.classList.remove('correct-answer');
    }
  }
}
