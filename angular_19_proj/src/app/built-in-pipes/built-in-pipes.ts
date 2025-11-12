import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';

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

  items = of([
    { id: 1, name: 'Yan', age: 33 },
    { id: 1, name: 'Yan', age: 33 },
    { id: 1, name: 'Yan', age: 33 },
  ]);
  fruits = of(['apple', 'banana', 'cherry']);
}
