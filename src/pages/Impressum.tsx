import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Impressum = () => {
  const [language, setLanguage] = useState<'en' | 'de'>('en');

  const toggleLanguage = (lang: 'en' | 'de') => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="max-w-4xl mx-auto px-6 py-12">
          {/* Language Toggle */}
          <div className="text-center mb-8">
            <div className="flex justify-center gap-4">
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                onClick={() => toggleLanguage('en')}
                className="px-6"
              >
                English
              </Button>
              <Button
                variant={language === 'de' ? 'default' : 'outline'}
                onClick={() => toggleLanguage('de')}
                className="px-6"
              >
                Deutsch
              </Button>
            </div>
          </div>

          {/* English Content */}
          {language === 'en' && (
            <div className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold text-center mb-8 text-foreground">Legal Notice</h1>
              
              <div className="space-y-4 text-foreground/90">
                <p><strong className="text-foreground">Name:</strong> Moritz Philipp Haaf</p>
                <p><strong className="text-foreground">Address:</strong> Rupertgasse 3/9, 1140 Vienna, Austria</p>
                <p><strong className="text-foreground">Email:</strong> <a href="mailto:itzmore.dev@gmail.com" className="text-primary hover:text-primary/80">itzmore.dev@gmail.com</a></p>
                <p><strong className="text-foreground">Responsible Authority (ECG):</strong> Magistratisches Bezirksamt für den 13. und 14. Bezirk, City of Vienna</p>
                <p><strong className="text-foreground">Business Regulation:</strong> Gewerbeordnung, <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener" className="text-primary hover:text-primary/80">www.ris.bka.gv.at</a></p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Disclaimer</h2>
              <div className="space-y-4 text-foreground/90">
                <p>This website may contain links to external sites; we bear no responsibility for their content.</p>
                <p>All content is provided with due care, but no guarantee for accuracy or completeness is given.</p>
              </div>

              <div className="mt-12">
                <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
              </div>
            </div>
          )}

          {/* German Content */}
          {language === 'de' && (
            <div className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold text-center mb-8 text-foreground">Impressum</h1>
              
              <div className="space-y-4 text-foreground/90">
                <p><strong className="text-foreground">Name:</strong> Moritz Philipp Haaf</p>
                <p><strong className="text-foreground">Anschrift:</strong> Rupertgasse 3/9, 1140 Wien, Österreich</p>
                <p><strong className="text-foreground">E-Mail:</strong> <a href="mailto:itzmore.dev@gmail.com" className="text-primary hover:text-primary/80">itzmore.dev@gmail.com</a></p>
                <p><strong className="text-foreground">Behörde (ECG):</strong> Magistratisches Bezirksamt für den 13. und 14. Bezirk, Stadt Wien</p>
                <p><strong className="text-foreground">Anwendbare Vorschriften:</strong> Gewerbeordnung, <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener" className="text-primary hover:text-primary/80">www.ris.bka.gv.at</a></p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Haftungsausschluss</h2>
              <div className="space-y-4 text-foreground/90">
                <p>Diese Website enthält Links zu externen Inhalten; für deren Richtigkeit wird keine Haftung übernommen.</p>
                <p>Alle Inhalte wurden sorgfältig erstellt, jedoch ohne Gewähr für Vollständigkeit oder Aktualität.</p>
              </div>

              <div className="mt-12">
                <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium">
                  <ArrowLeft className="w-4 h-4" />
                  Zurück zur Startseite
                </Link>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;