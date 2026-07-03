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
  image?: string | null;
  tags: string[];
  metrics: string[];
  metricBadge?: string;
  /** Short muted explainer rendered under the metric badge, e.g. what an ICC score means. */
  metricExplainer?: string;
  icon: LucideIcon;
  color: string;
  liveUrl?: string;
  githubUrl?: string;
  /** Case-study / write-up URL. Used as the primary CTA when present. */
  caseStudyUrl?: string;
  isPlaceholder?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: string[];
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
  /** Marks the single active employment (Publicis) so we can render a "Current Position" badge. */
  current?: boolean;
  /** Marks a role that is still active in parallel (e.g. Freelance) — rendered as "Ongoing". */
  ongoing?: boolean;
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

// Trust / logo strip Types
export interface TrustLogo {
  name: string;
  /** Optional logo asset path. When absent, a text fallback is rendered. */
  logo?: string;
}
