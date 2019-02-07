import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Subject} from '../models/subject';

@Injectable({providedIn: 'root'})
export class SubjectService {
  constructor(private afd: AngularFirestore) {
  }
  getSubjects() {
    return this.afd.collection<Subject>('subjects');
  }
}
