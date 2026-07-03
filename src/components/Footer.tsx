import { OptimizedImage } from "@/components/ui/optimized-image";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border text-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 lg:items-center">
          {/* Brand — itzmore logo/wordmark, matches Navigation */}
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <Link to="/" aria-label="itzmore.dev homepage" className="flex items-center">
              <OptimizedImage
                src="/lovable-uploads/6b68b2a5-c182-4e8e-ba5e-046e6d0a528c.png"
                alt="itzmore logo"
                className="h-8 w-auto"
                width={32}
                height={32}
                priority
              />
            </Link>
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
            <p className="text-sm">© {currentYear} itzmore.dev | Moritz Philipp Haaf</p>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-10 text-center text-muted-foreground text-sm">
          <button
            onClick={() => (window as unknown as { manageCookiePreferences?: () => void }).manageCookiePreferences?.()}
            className="text-xs hover:text-primary underline bg-transparent border-none cursor-pointer px-3 py-1 rounded-lg hover:bg-muted transition-colors focus-ring-primary"
          >
            Manage Cookie Preferences
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
