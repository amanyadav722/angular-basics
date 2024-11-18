import { Component } from '@angular/core';

@Component({
  selector: 'app-doc-editor',
  standalone: true,
  imports: [],
  
  // templateUrl: './doc-editor.component.html',
  template: `
    <div>
      <p>{{ count }}</p>
      <button (click)="incrementCounter()">increment</button>
    </div>
  `,
  styles: `
  p{
    font-style: bold;
    color: green;
  }

  button {
    border: 1px solid blue;
    border-radius: 11px;
    background-color: #90EE90;
  }
  `,

  // styleUrl: './doc-editor.component.scss'
})
export class DocEditorComponent {
  count = 0;
  incrementCounter() {
    this.count++;
  }
}
