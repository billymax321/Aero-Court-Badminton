import { NavItem, Product, TeamMember, MembershipTier } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', path: '/' },
  { label: 'BOOKING', path: '/booking' },
  { label: 'SHOP', path: '/shop' },
  { label: 'MEMBERSHIP', path: '/membership' },
  { label: 'TRAINING', path: '/training' },
  { label: 'ABOUT', path: '/about' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'AERO STRIKE X-1',
    price: '$189.00',
    image: 'https://images.unsplash.com/photo-1626225967045-9410dded2e41?q=80&w=2070&auto=format&fit=crop',
    badge: 'BEST SELLER'
  },
  {
    id: '2',
    name: 'VELOCITY PRO GRIP',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1617083281297-af33e69ad593?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'KINETIC ELITE SHUTTLE',
    price: '$32.00',
    image: 'https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?q=80&w=2070&auto=format&fit=crop',
    badge: 'NEW'
  },
  {
    id: '4',
    name: 'AERO COURT SHOES',
    price: '$125.00',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop'
  }
];

export const TEAM: TeamMember[] = [
  { name: 'VICTOR HUGO', role: 'Head Coach', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop' },
  { name: 'SARAH LYN', role: 'Fitness Trainer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop' },
  { name: 'LI WEI', role: 'Technical Specialist', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop' },
  { name: 'ELENA SMIT', role: 'Nutritionist', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2000&auto=format&fit=crop' },
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    name: 'STARTER',
    price: '$49',
    features: ['Early Booking (24h)', '5% Pro-Shop Discount', 'Standard Locker Access'],
  },
  {
    name: 'ELITE',
    price: '$129',
    features: ['Priority Booking (72h)', '15% Pro-Shop Discount', 'Premium Lounge Access', '1 Free Coaching Session'],
    isPopular: true
  },
  {
    name: 'PRO',
    price: '$249',
    features: ['Unlimited Booking', '25% Pro-Shop Discount', 'Guest Passes', 'Weekly Personal Training'],
  }
];
