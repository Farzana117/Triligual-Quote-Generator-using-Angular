export interface Quote {
  id: number;
  category: 'motivation' | 'success' | 'mindfulness' | 'study';
  author: string;
  text: {
    en: string;
    hi: string;
    te: string;
  };
  length: 'short' | 'medium' | 'long';
}
