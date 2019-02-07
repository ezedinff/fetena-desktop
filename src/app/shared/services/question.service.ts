import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import {Question} from '../models/question';

@Injectable({providedIn: 'root'})
export class QuestionService {
  private questions$: AngularFirestoreCollection<Question>;
  constructor(private afd: AngularFirestore, private storage: AngularFireStorage) {
  }

  getQuestions(subject_name, grade) {
    return this.afd.collection<Question>(`/subjects/${subject_name}/questions`, ref => ref.where('grade', '==', grade));
  }
}
