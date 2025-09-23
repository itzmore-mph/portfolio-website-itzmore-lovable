import { BarChart3, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:items-center">
          {/* Brand */}
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <div className="p-2 bg-primary rounded-lg">
              <BarChart3 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">Football Analytics</span>
          </div>

          {/* Navigation */}
          <div className="flex justify-center">
            <nav className="flex flex-wrap justify-center gap-3 lg:gap-4 text-sm lg:text-base">
              <a href="#home" className="text-white/80 hover:text-white transition-colors whitespace-nowrap">Home</a>
              <a href="#skills" className="text-white/80 hover:text-white transition-colors whitespace-nowrap">Skills</a>
              <a href="#projects" className="text-white/80 hover:text-white transition-colors whitespace-nowrap">Projects</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors whitespace-nowrap">About</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors whitespace-nowrap">Contact</a>
              <a href="/impressum" className="text-white/80 hover:text-white transition-colors whitespace-nowrap">Legal Notice</a>
              <a href="/privacy" className="text-white/80 hover:text-white transition-colors whitespace-nowrap">Privacy Policy</a>
            </nav>
          </div>

          {/* Copyright */}
          <div className="text-center lg:text-right text-white/60">
            <p className="flex items-center justify-center lg:justify-end gap-1 text-sm">
              Made with <Heart className="w-4 h-4 text-red-400 fill-current" /> for football analytics
            </p>
            <p className="text-sm mt-1">© {currentYear} Football Analytics Portfolio</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>Transforming football data into winning insights • Available for freelance projects and consulting</p>
          <button 
            onClick={() => (window as any).manageCookiePreferences?.()}
            className="text-xs hover:text-primary/80 underline mt-2 text-xs bg-transparent border-none cursor-pointer"
          >
            Manage Cookie Preferences
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;