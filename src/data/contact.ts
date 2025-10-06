import { Mail, MapPin } from "lucide-react";
import { ContactMethod, SocialLink } from "./types";

export const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    title: "Email",
    value: "itzmore.dev@gmail.com",
    description: "Send me an email anytime",
    color: "data-blue"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Austria",
    description: "Available for remote work worldwide",
    color: "analytics-purple"
  }
];

export const socialLinks: SocialLink[] = [
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/in/moritz-philipp-haaf/", 
    logo: "/lovable-uploads/3dbf94c1-8b1e-4164-9b4e-66b876fb1c55.png",
    color: "bg-blue-600" 
  },
  { 
    name: "GitHub", 
    href: "https://github.com/itzmore-mph", 
    logo: "/lovable-uploads/34ef4087-06b0-4169-8894-d784144a83d3.png",
    color: "bg-gray-800"
  },
  { 
    name: "Upwork", 
    href: "https://www.upwork.com/freelancers/~01924c4b6089ef56d8", 
    logo: "/lovable-uploads/3b9fdfb7-6fd1-4f4e-9f7a-ba9320d49e93.png",
    color: "bg-green-600"
  },
  { 
    name: "Malt", 
    href: "https://www.malt.de/profile/moritzphilipphaaf", 
    logo: "/lovable-uploads/malt-logo-white.png",
    color: "bg-[#FC5757]"
  }
];