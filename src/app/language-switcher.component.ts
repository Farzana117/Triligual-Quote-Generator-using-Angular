import { Component, inject } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { AppLang, LanguageService } from './services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [NgClass, NgFor],
  template: `
    <div class="lang-switcher">
      <button
        *ngFor="let option of langs"
        (click)="setLang(option.code)"
        [ngClass]="{ 'active': lang() === option.code }"
      >
        {{ option.label }}
      </button>
    </div>
  `,
  styles: [`
    .lang-switcher {
      display: inline-flex;
      gap: 0.5rem;
    }
    button {
      padding: 0.25rem 0.75rem;
      border-radius: 999px;
      border: 1px solid #ccc;
      background: #fff;
      cursor: pointer;
      font-size: 0.85rem;
    }
    button.active {
      font-weight: 600;
      border-color: #000;
    }
  `]
})
export class LanguageSwitcherComponent {
    private languageService = inject(LanguageService);
    
  lang = this.languageService.currentLang;

  langs = [
    { code: 'en' as AppLang, label: 'EN' },
    { code: 'hi' as AppLang, label: 'हिन्दी' },
    { code: 'te' as AppLang, label: 'తెలుగు' }
  ];

  setLang(lang: AppLang) {
    this.languageService.setLang(lang);
  }
}
