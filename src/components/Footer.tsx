import { BarChart3, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-lg">
              <BarChart3 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">Football Analytics</span>
          </div>

          {/* Navigation */}
          <div className="flex justify-center">
            <nav className="flex flex-wrap gap-6">
              <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
              <a href="#skills" className="text-white/80 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
              <a href="/impressum" className="text-white/80 hover:text-white transition-colors">Impressum</a>
            </nav>
          </div>

          {/* Copyright */}
          <div className="text-right text-white/60">
            <p className="flex items-center justify-end gap-1 text-sm">
              Made with <Heart className="w-4 h-4 text-red-400 fill-current" /> for football analytics
            </p>
            <p className="text-sm mt-1">© {currentYear} Football Analytics Portfolio</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>Transforming football data into winning insights • Available for freelance projects and consulting</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;