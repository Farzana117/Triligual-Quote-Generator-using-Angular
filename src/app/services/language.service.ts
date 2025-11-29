import { Injectable, signal } from '@angular/core';

export type AppLang = 'en' | 'hi' | 'te';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang = signal<AppLang>(
    (localStorage.getItem('lang') as AppLang) || 'en'
  );

  setLang(lang: AppLang) {
    this.currentLang.set(lang);
    localStorage.setItem('lang', lang);
  }
}
