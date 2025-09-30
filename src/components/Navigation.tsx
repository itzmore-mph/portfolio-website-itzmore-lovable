import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { navItems } from "@/data/navigation";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/98 backdrop-blur-xl shadow-lg border-b border-border/80' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" aria-label="Go to homepage">
            <OptimizedImage 
              src={isScrolled 
                ? "/lovable-uploads/6b68b2a5-c182-4e8e-ba5e-046e6d0a528c.png" 
                : "/lovable-uploads/71489f7b-3e18-490e-84a7-2d503590e5e9.png"
              }
              alt="itzmore logo - Data Analytics and Football Analytics Portfolio" 
              className="h-8 w-auto transition-all duration-300"
              width={32}
              height={32}
              priority={true}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-white hover:text-white/80'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              variant={isScrolled ? "default" : "secondary"}
              size="sm"
              className={!isScrolled ? "bg-primary hover:bg-primary-hover text-white hover:scale-[1.03] transition-all duration-200 shadow-lg hover:shadow-glow px-8 py-3 rounded-xl font-semibold group h-auto" : ""}
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon" 
            className={`md:hidden p-2 ${
              isScrolled 
                ? 'text-foreground hover:bg-accent' 
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div className={`absolute transition-all duration-300 ${
                isMobileMenuOpen 
                  ? 'rotate-45 translate-y-0' 
                  : 'rotate-0 -translate-y-1.5'
              } w-4 h-0.5 ${isScrolled ? 'bg-foreground' : 'bg-white'} rounded-full`} />
              <div className={`absolute transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              } w-4 h-0.5 ${isScrolled ? 'bg-foreground' : 'bg-white'} rounded-full`} />
              <div className={`absolute transition-all duration-300 ${
                isMobileMenuOpen 
                  ? '-rotate-45 translate-y-0' 
                  : 'rotate-0 translate-y-1.5'
              } w-4 h-0.5 ${isScrolled ? 'bg-foreground' : 'bg-white'} rounded-full`} />
            </div>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={`
          md:hidden fixed top-18 left-0 right-0 z-50 
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
          }
        `}>
          <div className="bg-background/98 backdrop-blur-xl border-b border-border/80 shadow-xl">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`
                      block text-lg font-medium text-foreground hover:text-primary 
                      transition-all duration-200 transform hover:translate-x-2
                      animate-slide-right animate-delay-${index * 100 + 100}
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-border/50">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="w-full font-semibold"
                    onClick={() => {
                      const contactSection = document.querySelector('#contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;