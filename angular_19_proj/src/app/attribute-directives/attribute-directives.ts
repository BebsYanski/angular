import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule],
  templateUrl: './attribute-directives.html',
  styleUrl: './attribute-directives.scss',
})
export class AttributeDirectives {
  textColor: string = 'text-danger';
  changeColor(): void {
    this.textColor = this.textColor === 'text-danger' ? 'text-success' : 'text-danger';
  }
}
