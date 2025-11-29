import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { QuoteGeneratorComponent } from './quote-generator/quote-generator.component';
import { LanguageSwitcherComponent } from './language-switcher.component';
import { ToastComponent } from './toast.component';

@Component({
  selector: 'app-root',
  imports: [ QuoteGeneratorComponent, LanguageSwitcherComponent, ToastComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('quote_generate_app');
}
