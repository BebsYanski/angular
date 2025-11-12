import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule],
  templateUrl: './built-in-pipes.html',
  styleUrl: './built-in-pipes.scss',
})
export class BuiltInPipes {
  angularPipes: string = 'Use pipes to format data in angular templates';
  personData = {
    name: 'John',
    age: 30,
    city: 'Mumbai',
  };
  students = [
    { id: 1, name: 'Yan', age: 33 },
    { id: 1, name: 'Yan', age: 33 },
    { id: 1, name: 'Yan', age: 33 },
  ];
  currentDate: Date = new Date();
}
