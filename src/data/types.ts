import { LucideIcon } from "lucide-react";

// Navigation Types
export interface NavItem {
  name: string;
  href: string;
}

// Project Types
export interface Project {
  title: string;
  description: string;
  image: string | null;
  tags: string[];
  metrics: string[];
  icon: LucideIcon;
  color: string;
  liveUrl?: string;
  githubUrl?: string;
  isPlaceholder?: boolean;
}

// Skills Types
export interface Skill {
  name: string;
  level: "Basic" | "Intermediate" | "Experienced";
  link?: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: Skill[];
}

export interface KeyStrength {
  icon: LucideIcon;
  title: string;
  description: string;
}

// Experience Types
export interface ExternalLink {
  name: string;
  url: string;
}

export interface Experience {
  date: string;
  company: string;
  position: string;
  location: string;
  details: string[];
  current?: boolean;
  links?: ExternalLink[];
}

// Contact Types
export interface ContactMethod {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
  color: string;
}

export interface SocialLink {
  name: string;
  href: string;
  logo: string;
  color: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

// About Types
export interface AboutHighlight {
  icon: LucideIcon;
  title: string;
  primary: string;
  secondary: string;
  third?: string;
  color: string;
}

// Stats Types
export interface StatData {
  value: string;
  label: string;
}