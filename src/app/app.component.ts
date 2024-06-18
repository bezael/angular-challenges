import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <section>
    <h1>{{title()}}</h1>
    <router-outlet />
  </section>`,
})
export class AppComponent {
  title = signal<string>('Welcome to challenges');
}
