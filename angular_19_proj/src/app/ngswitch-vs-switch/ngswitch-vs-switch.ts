import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngswitch-vs-switch',
  imports: [FormsModule, CommonModule],
  templateUrl: './ngswitch-vs-switch.html',
  styleUrl: './ngswitch-vs-switch.scss',
})
export class NgswitchVsSwitch {
  input1: string = '';
  input2: string = '';
  grade: number = 0;

  set(value: number) {
    this.grade = value;
  }
}
