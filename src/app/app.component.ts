import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <section>
    <h1>{{title}}</h1>
    <router-outlet />
  </section>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Welcome to challenges';
}
