import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [language, setLanguage] = useState<'en' | 'de'>('en');

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'accepted') {
      loadGoogleAnalytics();
    }
  }, []);

  const loadGoogleAnalytics = () => {
    // Replace with your actual GA4 measurement ID
    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
    
    // Load gtag script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialize gtag
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        anonymize_ip: true
      });
    `;
    document.head.appendChild(script2);
  };

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    loadGoogleAnalytics();
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  const manageCookies = () => {
    localStorage.removeItem('cookieConsent');
    setShowBanner(true);
  };

  // Expose manageCookies function globally for footer link
  useEffect(() => {
    (window as any).manageCookiePreferences = manageCookies;
  }, []);

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 text-white p-4 shadow-lg border-t border-slate-700">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <div className="flex gap-2 mb-3">
              <Button
                size="sm"
                variant={language === 'en' ? 'default' : 'ghost'}
                onClick={() => setLanguage('en')}
                className="text-xs px-2 py-1 h-auto"
              >
                EN
              </Button>
              <Button
                size="sm"
                variant={language === 'de' ? 'default' : 'ghost'}
                onClick={() => setLanguage('de')}
                className="text-xs px-2 py-1 h-auto"
              >
                DE
              </Button>
            </div>
            
            {language === 'en' ? (
              <p className="text-sm mb-4">
                This website uses essential cookies and, with your consent, Google Analytics to analyze usage. 
                <a href="/impressum" className="text-primary hover:text-primary/80 underline ml-1">
                  Learn more
                </a>.
              </p>
            ) : (
              <p className="text-sm mb-4">
                Diese Website verwendet nur technisch notwendige Cookies sowie – mit Ihrer Zustimmung – Google Analytics zur Analyse der Nutzung. 
                <a href="/impressum" className="text-primary hover:text-primary/80 underline ml-1">
                  Mehr erfahren
                </a>.
              </p>
            )}
            
            <div className="flex flex-wrap gap-2">
              <Button onClick={acceptCookies} size="sm" className="text-xs">
                {language === 'en' ? 'Accept All' : 'Alle akzeptieren'}
              </Button>
              <Button onClick={declineCookies} variant="outline" size="sm" className="text-xs">
                {language === 'en' ? 'Decline' : 'Ablehnen'}
              </Button>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={declineCookies}
            className="p-1 h-auto text-white/60 hover:text-white"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;