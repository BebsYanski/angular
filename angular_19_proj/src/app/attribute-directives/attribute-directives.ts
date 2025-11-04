import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directives.html',
  styleUrl: './attribute-directives.scss',
})
export class AttributeDirectives {
  textColor: string = 'text-danger';
  changeColor(): void {
    this.textColor = this.textColor === 'text-danger' ? 'text-success' : 'text-danger';
    this.isTextGreen = !this.isTextGreen;
  }

  isTextGreen: boolean = false;
  userClass: string = 'text-info';

  styleColor: string = 'orange';
  updateColor(ngStyleColor: string): any {
    this.styleColor = ngStyleColor;
  }

  isTextBlue: boolean = false;

  customClass: any = {
    color: 'pink',
    height: '150px',
    width: '400px',
    border: '2px solid grey',
  };
}
