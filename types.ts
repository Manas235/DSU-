export interface NavItem {
  label: string;
  href: string;
  isPrimary?: boolean;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
  icon: React.ComponentType<any>;
}

export interface Accreditation {
  id: number;
  name: string;
  type: string;
}
