import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { DataBinding } from './data-binding/data-binding';
import { Directives } from './directives/directives';
import { NgifVsIf } from './ngif-vs-if/ngif-vs-if';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    //  User,
    // DataBinding,
    // Directives,
    NgifVsIf,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular_19_proj');
}
