import { ModernTemplate1 } from './ModernTemplate1';
import { TraditionalTemplate1 } from './TraditionalTemplate1';
import { TraditionalElegantTemplate } from './TraditionalElegantTemplate';
import { TraditionalRoyalTemplate } from './TraditionalRoyalTemplate';
import { TraditionalPremiumTemplate } from './TraditionalPremiumTemplate';
import { MinimalTemplate1 } from './MinimalTemplate1';
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
    thumbnail: '',
    isPremium: false,
  },
  {
    id: 'simple-2',
    name: 'Simple Modern',
    category: 'simple',
    thumbnail: '',
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
    default:
      return ModernTemplate1;
  }
};
