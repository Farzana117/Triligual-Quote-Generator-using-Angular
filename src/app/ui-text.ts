import { AppLang } from './services/language.service';

export const UI_TEXT: Record<string, Record<AppLang, string>> = {
  appTitle: {
    en: 'Quote Generator',
    hi: 'कोट जनरेटर',
    te: 'కోట్ జనరేటర్'
  },
  subtitle: {
    en: 'Motivation in English, Hindi and Telugu',
    hi: 'अंग्रेज़ी, हिन्दी और तेलुगु में प्रेरणादायक विचार',
    te: 'ఇంగ్లీష్, హిందీ, తెలుగు లో ప్రేరణాత్మక కోట్స్'
  },
  newQuote: {
    en: 'New quote',
    hi: 'नया कोट',
    te: 'కొత్త కోట్'
  },
  saveFavourite: {
    en: 'Save to favourites',
    hi: 'पसंदीदा में सहेजें',
    te: 'ఇష్టాలలో సేవ్ చేయండి'
  },
  favourites: {
    en: 'Favourites',
    hi: 'पसंदीदा',
    te: 'ఇష్టాలు'
  },
  noFavourites: {
    en: 'No favourites yet. Save some quotes you like!',
    hi: 'अभी तक कोई पसंदीदा नहीं। जो कोट पसंद आए, उसे सहेजें!',
    te: 'ఇప్పటివరకు ఇష్టాలు లేవు. నచ్చిన కోట్స్‌ను సేవ్ చేయండి!'
  },
  //category types
  categoryAll: {
    en: 'All',
    hi: 'सभी',
    te: 'అన్నీ'
  },
  categoryMotivation: {
    en: 'Motivation',
    hi: 'प्रेरणा',
    te: 'ప్రేరణ'
  },
  categorySuccess: {
    en: 'Success',
    hi: 'सफलता',
    te: 'విజయం'
  },
  categoryMindfulness: {
    en: 'Mindfulness',
    hi: 'सचेतनता',
    te: 'మనోనిగ్రహం'
  },
  categoryStudy: {
    en: 'Study',
    hi: 'पढ़ाई',
    te: 'చదువు'
  }
};

