import { Injectable, signal } from '@angular/core';
import { QUOTES } from '../data/quotes';
import { Quote } from '../models/quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private allQuotes: Quote[] = QUOTES;

  currentQuote = signal<Quote | null>(null);
  favourites = signal<Quote[]>(this.loadFavourites());

  constructor() {
    this.setRandomQuote();
  }

//   setRandomQuote() {
//     const list = this.allQuotes;
//     const random = list[Math.floor(Math.random() * list.length)];
//     this.currentQuote.set(random);
//   }
    setRandomQuote(category: 'all' | Quote['category'] = 'all') {
        let list = this.allQuotes;

        if (category !== 'all') {
            list = list.filter(q => q.category === category);
        }

        if (!list.length) {
            return;
        }

        const random = list[Math.floor(Math.random() * list.length)];
        this.currentQuote.set(random);
    }  

    removeFavourite(id: number) {
        const updated = this.favourites().filter(q => q.id !== id);
        this.favourites.set(updated);
        localStorage.setItem('favourites', JSON.stringify(updated));
    }


//   toggleFavourite(quote: Quote) {
//     const favs = [...this.favourites()];
//     const exists = favs.some(q => q.id === quote.id);

//     if (exists) {
//       this.favourites.set(favs.filter(q => q.id !== quote.id));
//     } else {
//       favs.push(quote);
//       this.favourites.set(favs);
//     }

//     this.saveFavourites();
//   }

    addFavourite(quote: Quote): { success: boolean; message: string } {
        const favs = this.favourites();

        // Check if it already exists
        if (favs.some(q => q.id === quote.id)) {
            return { success: false, message: 'Already added to favourites' };
        }

        // Add quote
        const updated = [...favs, quote];
        this.favourites.set(updated);
        localStorage.setItem('favourites', JSON.stringify(updated));

        return { success: true, message: 'Added to favourites' };
    }


  private loadFavourites(): Quote[] {
    const raw = localStorage.getItem('favourites');
    return raw ? JSON.parse(raw) : [];
  }

  private saveFavourites() {
    localStorage.setItem('favourites', JSON.stringify(this.favourites()));
  }
}
