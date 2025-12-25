import { ModernTemplate1 } from './ModernTemplate1';
import { TraditionalTemplate1 } from './TraditionalTemplate1';
import { TraditionalElegantTemplate } from './TraditionalElegantTemplate';
import { TraditionalRoyalTemplate } from './TraditionalRoyalTemplate';
import { TraditionalPremiumTemplate } from './TraditionalPremiumTemplate';
import { MinimalTemplate1 } from './MinimalTemplate1';
import { SimpleTemplate } from './SimpleTemplate';
import { Template } from '../../types/biodata';

export const TEMPLATES: Template[] = [
  {
    id: 'modern-1',
    name: 'Modern Classic',
    category: 'modern',
    thumbnail: '',
    isPremium: false,
  },
  {
    id: 'traditional-1',
    name: 'Traditional Elegant',
    category: 'traditional',
    thumbnail: '',
    isPremium: false,
  },
  {
    id: 'minimal-1',
    name: 'Clean Minimal',
    category: 'minimal',
    thumbnail: '',
    isPremium: false,
  },
  {
    id: 'modern-2',
    name: 'Modern Professional',
    category: 'modern',
    thumbnail: '',
    isPremium: false,
  },
  {
    id: 'traditional-2',
    name: 'Traditional Classic',
    category: 'traditional',
    thumbnail: '',
    isPremium: false,
  },
  {
    id: 'minimal-2',
    name: 'Simple Clean',
    category: 'minimal',
    thumbnail: '',
    isPremium: false,
  },
  {
    id: 'modern-3',
    name: 'Modern Elegant',
    category: 'modern',
    thumbnail: '',
    isPremium: false,
  },
  {
    id: 'traditional-3',
    name: 'Traditional Royal',
    category: 'traditional',
    thumbnail: '',
    isPremium: false,
  },
  {
    id: 'minimal-3',
    name: 'Minimal Elegant',
    category: 'minimal',
    thumbnail: '',
    isPremium: false,
  },
  {
    id: 'simple-1',
    name: 'Simple Basic',
    category: 'simple',
    thumbnail: '/images/simpleImg/101.webp',
    isPremium: false,
  },
  {
    id: 'simple-2',
    name: 'Simple Modern',
    category: 'simple',
    thumbnail: '/images/simpleImg/102.webp',
    isPremium: false,
  },
  {
    id: 'simple-3',
    name: 'Simple Classic',
    category: 'simple',
    thumbnail: '/images/simpleImg/105.webp',
    isPremium: false,
  },
  {
    id: 'simple-4',
    name: 'Simple Elegant',
    category: 'simple',
    thumbnail: '/images/simpleImg/107.webp',
    isPremium: false,
  },
  {
    id: 'simple-5',
    name: 'Simple Professional',
    category: 'simple',
    thumbnail: '/images/simpleImg/109.webp',
    isPremium: false,
  },
  {
    id: 'simple-6',
    name: 'Simple Premium',
    category: 'simple',
    thumbnail: '/images/simpleImg/110.webp',
    isPremium: false,
  },
  {
    id: 'simple-7',
    name: 'Simple Clean',
    category: 'simple',
    thumbnail: '/images/simpleImg/111.webp',
    isPremium: false,
  },
  {
    id: 'simple-8',
    name: 'Simple Traditional',
    category: 'simple',
    thumbnail: '/images/simpleImg/112.webp',
    isPremium: false,
  },
  {
    id: 'simple-9',
    name: 'Simple Minimal',
    category: 'simple',
    thumbnail: '/images/simpleImg/114.webp',
    isPremium: false,
  },
  {
    id: 'simple-10',
    name: 'Simple Contemporary',
    category: 'simple',
    thumbnail: '/images/simpleImg/116.webp',
    isPremium: false,
  },
  {
    id: 'simple-11',
    name: 'Simple Refined',
    category: 'simple',
    thumbnail: '/images/simpleImg/117.webp',
    isPremium: false,
  },
  {
    id: 'simple-12',
    name: 'Simple Sophisticated',
    category: 'simple',
    thumbnail: '/images/simpleImg/123.webp',
    isPremium: false,
  },
  {
    id: 'simple-13',
    name: 'Simple Polished',
    category: 'simple',
    thumbnail: '/images/simpleImg/125.webp',
    isPremium: false,
  },
  {
    id: 'simple-14',
    name: 'Simple Styled',
    category: 'simple',
    thumbnail: '/images/simpleImg/127.webp',
    isPremium: false,
  },
  {
    id: 'simple-15',
    name: 'Simple Deluxe',
    category: 'simple',
    thumbnail: '/images/simpleImg/156.webp',
    isPremium: false,
  },
  {
    id: 'modern-4',
    name: 'Modern Premium',
    category: 'modern',
    thumbnail: '',
    isPremium: false,
  },
  {
    id: 'traditional-4',
    name: 'Traditional Premium',
    category: 'traditional',
    thumbnail: '',
    isPremium: false,
  },
  {
    id: 'minimal-4',
    name: 'Minimal Premium',
    category: 'minimal',
    thumbnail: '',
    isPremium: false,
  },
  {
    id: 'modern-5',
    name: 'Modern Luxury',
    category: 'modern',
    thumbnail: '',
    isPremium: false,
  },
];

export const getTemplateComponent = (templateId: string) => {
  switch (templateId) {
    case 'traditional-1':
      return TraditionalElegantTemplate;
    case 'traditional-2':
      return TraditionalTemplate1;
    case 'traditional-3':
      return TraditionalRoyalTemplate;
    case 'traditional-4':
      return TraditionalPremiumTemplate;
    case 'minimal-1':
    case 'minimal-2':
    case 'minimal-3':
    case 'minimal-4':
      return MinimalTemplate1;
    case 'simple-1':
    case 'simple-2':
    case 'simple-3':
    case 'simple-4':
    case 'simple-5':
    case 'simple-6':
    case 'simple-7':
    case 'simple-8':
    case 'simple-9':
    case 'simple-10':
    case 'simple-11':
    case 'simple-12':
    case 'simple-13':
    case 'simple-14':
    case 'simple-15':
      return SimpleTemplate;
    default:
      return ModernTemplate1;
  }
};
