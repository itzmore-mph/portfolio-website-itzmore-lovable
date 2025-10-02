import { BarChart3, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border text-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 lg:items-center">
          {/* Brand */}
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="p-3 bg-primary rounded-xl shadow-lg">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <span className="font-bold text-xl text-foreground">Football Analytics</span>
          </div>

          {/* Navigation */}
          <div className="flex justify-center">
            <nav className="flex flex-wrap justify-center gap-4 lg:gap-6 text-sm lg:text-base">
              <a href="/#home" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap px-2 py-1 rounded-lg hover:bg-muted">Home</a>
              <a href="/#skills" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap px-2 py-1 rounded-lg hover:bg-muted">Skills</a>
              <a href="/#projects" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap px-2 py-1 rounded-lg hover:bg-muted">Projects</a>
              <a href="/#about" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap px-2 py-1 rounded-lg hover:bg-muted">About</a>
              <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap px-2 py-1 rounded-lg hover:bg-muted">Contact</a>
              <a href="/impressum" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap px-2 py-1 rounded-lg hover:bg-muted">Legal Notice</a>
              <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap px-2 py-1 rounded-lg hover:bg-muted">Privacy Policy</a>
            </nav>
          </div>

          {/* Copyright */}
          <div className="text-center lg:text-right text-muted-foreground">
            <p className="flex items-center justify-center lg:justify-end gap-1 text-sm">
              Made with <Heart className="w-4 h-4 text-primary fill-current" /> for football analytics
            </p>
            <p className="text-sm mt-1">© {currentYear} Football Analytics Portfolio</p>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-10 text-center text-muted-foreground text-sm">
          <p className="mb-3">Transforming football data into winning insights • Available for freelance projects and consulting</p>
          <button 
            onClick={() => (window as any).manageCookiePreferences?.()}
            className="text-xs hover:text-primary underline bg-transparent border-none cursor-pointer px-3 py-1 rounded-lg hover:bg-muted transition-colors"
          >
            Manage Cookie Preferences
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;