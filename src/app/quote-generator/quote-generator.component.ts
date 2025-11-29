import { Component, inject, computed, signal } from '@angular/core';
import { NgIf, NgFor, TitleCasePipe } from '@angular/common';
import { QuoteService } from '../services/quote.service';
import { LanguageService } from '../services/language.service';
import { UI_TEXT } from '../ui-text';
import { ToastService } from '../services/toast.service';


@Component({
  selector: 'app-quote-generator',
  standalone: true,
  imports: [NgIf, NgFor, TitleCasePipe],
  templateUrl: './quote-generator.component.html',
  styleUrls: ['./quote-generator.component.css']
})
export class QuoteGeneratorComponent {
  private quoteService = inject(QuoteService);
  private languageService = inject(LanguageService);
  private toast = inject(ToastService);


categoryFilter = signal<'all' | 'motivation' | 'success' | 'mindfulness' | 'study'>('all');

categories = [
  { code: 'all', labelKey: 'categoryAll' },
  { code: 'motivation', labelKey: 'categoryMotivation' },
  { code: 'success', labelKey: 'categorySuccess' },
  { code: 'mindfulness', labelKey: 'categoryMindfulness' },
  { code: 'study', labelKey: 'categoryStudy' }
] as const;

categoryLabel(labelKey: string) {
  return UI_TEXT[labelKey][this.lang()];
}

  quote = this.quoteService.currentQuote;
  favourites = this.quoteService.favourites;
  lang = this.languageService.currentLang;

  title = computed(() => UI_TEXT['appTitle'][this.lang()]);
  newQuoteLabel = computed(() => UI_TEXT['newQuote'][this.lang()]);
  saveFavLabel = computed(() => UI_TEXT['saveFavourite'][this.lang()]);
  favouritesLabel = computed(() => UI_TEXT['favourites'][this.lang()]);
  noFavouritesText = computed(() => UI_TEXT['noFavourites'][this.lang()]);
  subtitle = computed(() => UI_TEXT['subtitle'][this.lang()]);

  newRandomQuote() {
    this.quoteService.setRandomQuote(this.categoryFilter());
  }

    onCategoryChange(value: string) {
  // make sure it's a valid code
        if (
            value === 'all' ||
            value === 'motivation' ||
            value === 'success' ||
            value === 'mindfulness' ||
            value === 'study'
        ) {
            this.categoryFilter.set(value);
            this.quoteService.setRandomQuote(value);
        }
    }

    
    removeFavourite(id: number) {
        this.quoteService.removeFavourite(id);
    }


//   toggleFavourite() {
//     const q = this.quote();
//     if (q) {
//       this.quoteService.toggleFavourite(q);
//     }
//   }

    // addFavourite() {
    //     const q = this.quote();
    //     if (!q) return;

    //     const result = this.quoteService.addFavourite(q);

    //     // Show alert (simple)
    //     alert(result.message);
    // }

    addFavourite() {
        const quote = this.quote();
        if (!quote) return;

        const result = this.quoteService.addFavourite(quote);

        if (result.success) {
            // Toast when added
            this.toast.show("Quote added to favourites!", "success");
        } else {
            // Toast when already exists
            this.toast.show("This quote is already in favourites!", "warning");
        }
    }


}
