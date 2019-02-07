import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-science-type',
  templateUrl: './science-type.component.html',
  styles: [
    '::ng-deep .mat-dialog-container{\n' +
    '  padding: 0 0 5em;\n' +
    '  overflow: hidden;\n' +
    '}'
  ]
})
export class ScienceTypeComponent implements OnInit, OnDestroy {
  scienceForm: FormGroup;
  alive = true;
  v;
  constructor(private matref: MatDialogRef<ScienceTypeComponent>, private fb: FormBuilder) {
  }
  submit() {
     this.matref.close(this.v);
  }

  ngOnInit(): void {
    this.scienceForm = this.fb.group({
      scienceControl: ''
    });
    this.scienceForm.valueChanges.pipe(takeWhile(() => this.alive)).subscribe(value => this.v = value['scienceControl']);
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}


