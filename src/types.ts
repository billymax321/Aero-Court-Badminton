export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  badge?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface MembershipTier {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}
