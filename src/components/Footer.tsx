import { BarChart3, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 lg:items-center">
          {/* Brand */}
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="p-3 bg-primary rounded-xl shadow-lg">
              <BarChart3 className="w-7 h-7 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">Football Analytics</span>
          </div>

          {/* Navigation */}
          <div className="flex justify-center">
            <nav className="flex flex-wrap justify-center gap-4 lg:gap-6 text-sm lg:text-base">
              <a href="/index#home" className="text-white/80 hover:text-white transition-colors whitespace-nowrap px-2 py-1 rounded-lg hover:bg-white/5">Home</a>
              <a href="index#skills" className="text-white/80 hover:text-white transition-colors whitespace-nowrap px-2 py-1 rounded-lg hover:bg-white/5">Skills</a>
              <a href="/index#projects" className="text-white/80 hover:text-white transition-colors whitespace-nowrap px-2 py-1 rounded-lg hover:bg-white/5">Projects</a>
              <a href="/index#about" className="text-white/80 hover:text-white transition-colors whitespace-nowrap px-2 py-1 rounded-lg hover:bg-white/5">About</a>
              <a href="/index#contact" className="text-white/80 hover:text-white transition-colors whitespace-nowrap px-2 py-1 rounded-lg hover:bg-white/5">Contact</a>
              <a href="/impressum" className="text-white/80 hover:text-white transition-colors whitespace-nowrap px-2 py-1 rounded-lg hover:bg-white/5">Legal Notice</a>
              <a href="/privacy" className="text-white/80 hover:text-white transition-colors whitespace-nowrap px-2 py-1 rounded-lg hover:bg-white/5">Privacy Policy</a>
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

        <div className="border-t border-white/20 mt-12 pt-10 text-center text-white/70 text-sm">
          <p className="mb-3">Transforming football data into winning insights • Available for freelance projects and consulting</p>
          <button 
            onClick={() => (window as any).manageCookiePreferences?.()}
            className="text-xs hover:text-primary/80 underline bg-transparent border-none cursor-pointer px-3 py-1 rounded-lg hover:bg-white/5 transition-colors"
          >
            Manage Cookie Preferences
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;