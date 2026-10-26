import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { First } from './first/first';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, First, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('LoanProject');
}
