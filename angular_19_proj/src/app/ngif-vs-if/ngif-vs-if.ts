import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngif-vs-if',
  standalone: true, // ✅ important
  imports: [CommonModule, FormsModule], // ✅ enables *ngIf, *ngFor
  templateUrl: './ngif-vs-if.html',
  styleUrls: ['./ngif-vs-if.scss'], // ✅ plural
})
export class NgifVsIf {
  isChecked: boolean = false;
  isInputBox: boolean = true;
  input1: string = '';
  input2: string = '';

  onClick() {
    this.isChecked = !this.isChecked;
  }

  showField() {
    this.isInputBox = true;
  }

  hideField() {
    this.isInputBox = false;
  }
}
