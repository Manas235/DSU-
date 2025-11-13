import { NavItem, NewsItem, StatItem, Accreditation } from './types';
import { GraduationCap, Users, BookOpen, Award, Globe, Lightbulb } from 'lucide-react';

export const TOP_BAR_LINKS: NavItem[] = [
  { label: 'ACADEMIC CALENDAR', href: '#' },
  { label: 'EXAMINATION NEWS & EVENTS', href: '#' },
  { label: 'NEWSLETTER', href: '#' },
  { label: 'ALUMNI', href: '#' },
  { label: 'E-BROCHURE', href: '#' },
  { label: 'LOGIN', href: '#' },
];

export const MAIN_NAV_LINKS: NavItem[] = [
  { label: 'HOME', href: '#' },
  { label: 'ABOUT US', href: '#' },
  { label: 'ACADEMICS', href: '#' },
  { label: 'ADMISSIONS', href: '#' },
  { label: 'INTERNATIONAL', href: '#' },
  { label: 'RESEARCH', href: '#' },
  { label: 'INNOVATION', href: '#' },
  { label: 'PLACEMENT', href: '#' },
  { label: 'NAAC', href: '#' },
  { label: 'LIBRARY', href: '#' },
  { label: 'HOSTEL@HAROHALLI', href: '#' },
  { label: 'TRANSPORT', href: '#' },
  { label: 'PUBLIC SELF DISCLOSURE', href: '#' },
  { label: 'CONTACT', href: '#' },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: "DSU Ranked Among Top Emerging Universities in India",
    date: "Oct 15, 2023",
    category: "Awards",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop",
    excerpt: "Dayananda Sagar University continues to set benchmarks in academic excellence and research innovation."
  },
  {
    id: 2,
    title: "International Conference on AI & Robotics Held at Main Campus",
    date: "Oct 10, 2023",
    category: "Events",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop",
    excerpt: "Experts from around the globe gathered to discuss the future of automation and machine learning."
  },
  {
    id: 3,
    title: "Admissions Open for 2026-27 Academic Year",
    date: "Sep 28, 2023",
    category: "Admissions",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
    excerpt: "Prospective students can now apply for Undergraduate and Postgraduate programs across all disciplines."
  },
  {
    id: 4,
    title: "Student Innovation Wins National Hackathon",
    date: "Sep 20, 2023",
    category: "Achievements",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
    excerpt: "A team of final year CSE students secured the first prize with their innovative healthcare solution."
  }
];

export const STATS: StatItem[] = [
  { id: 1, value: "60+", label: "Years of Excellence", icon: GraduationCap },
  { id: 2, value: "150+", label: "Programs", icon: BookOpen },
  { id: 3, value: "25,000+", label: "Students", icon: Users },
  { id: 4, value: "95%", label: "Placement Rate", icon: Award },
];

export const ACCREDITATIONS: Accreditation[] = [
  { id: 1, name: "NAAC A+", type: "Accredited" },
  { id: 2, name: "KSURF", type: "5 Star Rating" },
  { id: 3, name: "IIRF", type: "Ranked Top 10" },
  { id: 4, name: "Careers360", type: "AAAA+ Rating" },
  { id: 5, name: "NBA", type: "Accredited Programs" },
  { id: 6, name: "DSIR", type: "Recognized" },
];

export const FEATURES = [
  {
    title: "Research Excellence",
    description: "Cutting-edge labs and funding for innovative projects across biotechnology, engineering, and pharmacy.",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Global Collaborations",
    description: "Partnerships with 50+ international universities providing exchange programs and joint research opportunities.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Vibrant Campus Life",
    description: "A holistic environment with sports complexes, cultural hubs, and student clubs that foster personal growth.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600&auto=format&fit=crop"
  },
];