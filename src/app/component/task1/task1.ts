import { Component } from '@angular/core';
import {  FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'task1',
  template: `<form [formGroup]="tableForm">
              <button class="bt-remove-field" (click)="handleAddNewField()">Add new field</button>
              <ng-container formArrayName="fields" *ngFor="let group of tableFormItems.controls; let index = index">
                <fieldset style="border: 1px solid #ccc; padding:4px">
                  <input type="text">
                  <button class="bt-remove-field" (click)="handleRemoveField(index)">Remove field</button>
                </fieldset>
              </ng-container>
            </form>`
})

export class Task1 {

  formArrayName: string = 'fields';
  tableForm!: FormGroup;
  tableFormItems!: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.tableForm = this.fb.group({
      fields: this.fb.array([])
    });

    this.tableFormItems = this.tableForm.get(this.formArrayName) as FormArray;
  }


  handleAddNewField() {
    this.tableFormItems.push(new FormControl());
    console
  }

  handleRemoveField(rowIdx: number) {
    this.tableFormItems.removeAt(rowIdx);
  }

}
