import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { getItem, setItem, removeItem } from '@/lib/safeStorage';

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
    const consent = getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'accepted') {
      loadGoogleAnalytics();
    }
  }, []);

  const loadGoogleAnalytics = () => {
    const GA_MEASUREMENT_ID = 'G-65F9PL28LL';
    
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
    setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    loadGoogleAnalytics();
  };

  const declineCookies = () => {
    setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  const manageCookies = () => {
    removeItem('cookieConsent');
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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm text-foreground border-t border-border shadow-lg">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center gap-3">
        <p className="text-xs text-muted-foreground flex-1 text-center sm:text-left">
          {language === 'en' ? (
            <>
              This site uses essential cookies and, with your consent, Google Analytics.{' '}
              <a href="/privacy" className="underline hover:text-foreground">Learn more</a>.
            </>
          ) : (
            <>
              Diese Seite verwendet notwendige Cookies und, mit Ihrer Zustimmung, Google Analytics.{' '}
              <a href="/privacy" className="underline hover:text-foreground">Mehr erfahren</a>.
            </>
          )}
          <span className="ml-2 inline-flex gap-2">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={cn(
                'text-xs underline',
                language === 'en' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('de')}
              className={cn(
                'text-xs underline',
                language === 'de' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              DE
            </button>
          </span>
        </p>

        <div className="flex items-center gap-2 shrink-0">
          <Button onClick={declineCookies} variant="ghost" size="sm" className="text-xs">
            {language === 'en' ? 'Decline' : 'Ablehnen'}
          </Button>
          <Button onClick={acceptCookies} size="sm" className="text-xs">
            {language === 'en' ? 'Accept All' : 'Alle akzeptieren'}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={declineCookies}
            aria-label="Close"
            className="p-1 h-auto text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;