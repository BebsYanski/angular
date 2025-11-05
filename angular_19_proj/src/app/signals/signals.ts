import { ChangeDetectionStrategy, Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Signals {
  // count = 0;
  counter = signal(0);
  normalCounter = 0;
  // counter: WritableSignal<number> = signal(0);
  increment() {
    this.counter.update((value) => value + 1);
  }
  decrement() {
    this.counter.update((value) => value - 1);
  }

  constructor() {
    this.counter.set(5);
    // setTimeout(() => {
    //   this.normalCounter = 50;
    //   console.log('Normal counter Value => ' + this.normalCounter);
    // }, 5000);
    effect(() => console.log('The value of counter is : ', this.counter()));
  }
}
