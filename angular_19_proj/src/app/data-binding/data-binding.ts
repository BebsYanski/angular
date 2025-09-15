import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss',
})
export class DataBinding {
  // Data binding
  // 1. One way (component -> HTML and vice versa)
  // a. Interpolation {}
  // b. property binding []
  // c. Event Binding () (flow from view to component (html -> component))
  name: string = 'Yannick Bebs';
  topic: string = 'Data Binding';

  image: string = '/image.png';
  random = '';

  onSave() {
    console.log('Save');
    alert('Save');
  }

  onChange() {
    alert(`Country changed `);
  }
}
