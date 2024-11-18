import { Component } from '@angular/core';
import { DocEditorComponent } from './editor/doc-editor/doc-editor.component';
import { Verifier1Component } from './editor/verifier1/verifier1.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  imports: [DocEditorComponent, Verifier1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-pro';
}
