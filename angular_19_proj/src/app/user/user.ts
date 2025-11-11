import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  topic: string = '';
  constructor(private router: Router) {
    console.log('Hello from constructor');
    this.topic = 'Angular';
  }

  ngOnChanges(changes: SimpleChanges): void {
    // used for component input property
    console.log('1. ngOnChanges called');
  }

  ngOnInit(): void {
    // Used for API calls
    console.log('2. ngOnInit called');
  }

  ngDoCheck(): void {
    // Used for every change detection
    console.log('3. ngDoCheck called');
  }
  ngAfterContentChecked(): void {
    // used after ng-content has been checked
    console.log('5. ngAfterContentChecked called');
  }
  ngAfterContentInit(): void {
    // used for ng-content

    console.log('4. ngAfterContentInit called');
  }
  ngAfterViewInit(): void {
    // Used for viewChild
    console.log('6. ngAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    console.log('7. ngAfterViewChecked called');
  }
  ngOnDestroy(): void {
    console.log('8. ngOnDestroy called');
  }
  loginData() {
    // User Verification Logic
    // this.router.navigateByUrl('structural-directives');
    this.router.navigate(['built-in-pipes']);
  }
}
