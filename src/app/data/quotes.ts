import { Quote } from '../models/quote.model';

export const QUOTES: Quote[] = [
  {
    id: 1,
    category: 'motivation',
    author: 'Jim Rohn',
    text: {
      en: 'Either you run the day or the day runs you.',
      hi: 'या तो आप दिन को चलाते हैं, या दिन आपको चलाता है।',
      te: 'లేదా మీరు రోజును నడిపిస్తారు, లేదా రోజు మిమ్మల్ని నడిపిస్తుంది.'
    },
    length: 'short'
  },
  {
    id: 2,
    category: 'study',
    author: 'Albert Einstein',
    text: {
      en: 'The more I learn, the more I realise how much I don’t know.',
      hi: 'जितना अधिक मैं सीखता हूँ, उतना ही समझता हूँ कि मैं कितना कम जानता हूँ।',
      te: 'నేను ఎంత ఎక్కువగా నేర్చుకుంటానో, నేను ఎంత తక్కువగా తెలుసుకున్నానో అంత ఎక్కువగా తెలుస్తోంది.'
    },
    length: 'medium'
  },
  {
    id: 3,
    category: 'success',
    author: 'APJ Abdul Kalam',
    text: {
      en: 'Dreams are not what you see in sleep, they are things that do not let you sleep.',
      hi: 'सपने वो नहीं जो हम नींद में देखते हैं, सपने वो हैं जो हमें सोने नहीं देते।',
      te: 'స్వప్నాలు అంటే నిద్రలో చూడేవి కాదు, నిద్రపోనివ్వని ఆలోచనలు.'
    },
    length: 'medium'
  },
  {
    id: 4,
    category: 'mindfulness',
    author: 'Unknown',
    text: {
      en: 'Breathe. You are exactly where you need to be.',
      hi: 'साँस लें। आप ठीक वहीं हैं जहाँ आपको होना चाहिए।',
      te: 'శ్వాస తీసుకోండి. మీరు ఉండాల్సిన చోటే ఉన్నారు.'
    },
    length: 'short'
  },
  {
    id: 5,
    category: 'motivation',
    author: 'Swami Vivekananda',
    text: {
      en: 'Arise, awake and stop not till the goal is reached.',
      hi: 'उठो, जागो और लक्ष्य की प्राप्ति तक रुको मत।',
      te: 'లేచి నిలబడు, మేలుకో, లక్ష్యాన్ని చేరే వరకు ఆగవద్దు.'
    },
    length: 'short'
  }
];
