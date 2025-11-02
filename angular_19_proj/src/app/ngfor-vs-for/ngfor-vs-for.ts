import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor-vs-for',
  imports: [CommonModule],
  templateUrl: './ngfor-vs-for.html',
  styleUrl: './ngfor-vs-for.scss',
})
export class NgforVsFor {
  employees: any[] = [
    { name: 'John', age: 30, position: 'Developer' },
    { name: 'Jane', age: 25, position: 'Designer' },
    { name: 'Mike', age: 35, position: 'Manager' },
  ];

  companyList: string[] = ['Google', 'Facebook', 'Twitter', 'LinkedIn'];
}
