import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-vs-if',
  standalone: true, // ✅ important
  imports: [CommonModule], // ✅ enables *ngIf, *ngFor
  templateUrl: './ngif-vs-if.html',
  styleUrls: ['./ngif-vs-if.scss'], // ✅ plural
})
export class NgifVsIf {
  isChecked: boolean = false;
  isInputBox: boolean = true;

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
