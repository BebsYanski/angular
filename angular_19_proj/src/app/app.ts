import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { User } from './user/user';
import { DataBinding } from './data-binding/data-binding';
import { Directives } from './directives/directives';
import { NgifVsIf } from './ngif-vs-if/ngif-vs-if';
import { NgforVsFor } from './ngfor-vs-for/ngfor-vs-for';
import { NgswitchVsSwitch } from './ngswitch-vs-switch/ngswitch-vs-switch';
import { AttributeDirectives } from './attribute-directives/attribute-directives';
import { Signals } from './signals/signals';
import { LinkedSignal } from './linked-signal/linked-signal';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular_19_proj');
}
