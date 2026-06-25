import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Cookie, ShieldCheck, BarChart3, ExternalLink } from "lucide-react";
import { getItem, setItem } from "@/lib/safeStorage";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    manageCookiePreferences?: () => void;
  }
}

const STORAGE_KEY = "cookieConsent";
const CONSENT_VERSION = 2;
const GA_MEASUREMENT_ID = "G-65F9PL28LL";

type Lang = "en" | "de";

interface ConsentRecord {
  v: number;
  ts: string;
  analytics: boolean;
}

const t = {
  en: {
    title: "We value your privacy",
    body: "We use strictly necessary cookies to make this site work. With your consent, we also use Google Analytics (anonymised IP) to understand how visitors use the site so we can improve it. You can accept, reject, or choose which categories to allow. You can change or withdraw your consent at any time from the footer.",
    accept: "Accept all",
    reject: "Reject non‑essential",
    customize: "Customise",
    save: "Save preferences",
    essential: "Strictly necessary",
    essentialDesc: "Required for the site to function (e.g. remembering your cookie choice and security). These cookies cannot be disabled.",
    analytics: "Analytics",
    analyticsDesc: "Google Analytics 4 with IP anonymisation. Helps us measure traffic and improve content. No cross‑site tracking, no advertising.",
    alwaysOn: "Always on",
    detailsTitle: "Cookie preferences",
    detailsIntro: "Choose which categories of cookies you allow. Strictly necessary cookies are always active. We do not use advertising or social‑media tracking cookies.",
    cookieList: "Cookies in use",
    name: "Name",
    provider: "Provider",
    purpose: "Purpose",
    duration: "Duration",
    controller: "Controller: Moritz Philipp Haaf, Vienna, Austria.",
    rights: "Legal basis: Art. 6(1)(a) GDPR (consent) for analytics; Art. 6(1)(f) GDPR (legitimate interest) for essential cookies. You can withdraw consent at any time with effect for the future.",
    privacy: "Privacy Policy",
    imprint: "Imprint",
    close: "Close",
    rows: [
      { name: "cookieConsent", provider: "itzmore.dev", purpose: "Stores your cookie choice and consent timestamp.", duration: "12 months", essential: true },
      { name: "_ga", provider: "Google LLC", purpose: "Distinguishes unique visitors (anonymised).", duration: "2 years", essential: false },
      { name: "_ga_<container-id>", provider: "Google LLC", purpose: "Persists session state for GA4.", duration: "2 years", essential: false },
    ],
  },
  de: {
    title: "Datenschutz ist uns wichtig",
    body: "Wir verwenden ausschließlich technisch notwendige Cookies, damit die Seite funktioniert. Mit Ihrer Einwilligung setzen wir zusätzlich Google Analytics (mit IP‑Anonymisierung) ein, um die Nutzung der Seite zu verstehen und Inhalte zu verbessern. Sie können akzeptieren, ablehnen oder einzelne Kategorien wählen. Ihre Einwilligung können Sie jederzeit über den Link im Footer widerrufen.",
    accept: "Alle akzeptieren",
    reject: "Nur notwendige",
    customize: "Einstellungen",
    save: "Auswahl speichern",
    essential: "Notwendig",
    essentialDesc: "Für den Betrieb der Seite erforderlich (z. B. Speicherung Ihrer Cookie‑Auswahl, Sicherheit). Diese Cookies lassen sich nicht deaktivieren.",
    analytics: "Statistik",
    analyticsDesc: "Google Analytics 4 mit IP‑Anonymisierung. Hilft uns, Reichweite zu messen und Inhalte zu verbessern. Kein websiteübergreifendes Tracking, keine Werbung.",
    alwaysOn: "Immer aktiv",
    detailsTitle: "Cookie‑Einstellungen",
    detailsIntro: "Wählen Sie, welche Kategorien Sie zulassen. Notwendige Cookies sind immer aktiv. Wir verwenden keine Werbe‑ oder Social‑Media‑Tracking‑Cookies.",
    cookieList: "Eingesetzte Cookies",
    name: "Name",
    provider: "Anbieter",
    purpose: "Zweck",
    duration: "Speicherdauer",
    controller: "Verantwortlich: Moritz Philipp Haaf, Wien, Österreich.",
    rights: "Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) für Statistik; Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) für notwendige Cookies. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.",
    privacy: "Datenschutz",
    imprint: "Impressum",
    close: "Schließen",
    rows: [
      { name: "cookieConsent", provider: "itzmore.dev", purpose: "Speichert Ihre Cookie‑Auswahl und den Zeitpunkt.", duration: "12 Monate", essential: true },
      { name: "_ga", provider: "Google LLC", purpose: "Unterscheidet eindeutige Besucher (anonymisiert).", duration: "2 Jahre", essential: false },
      { name: "_ga_<container-id>", provider: "Google LLC", purpose: "Speichert Sitzungsstatus für GA4.", duration: "2 Jahre", essential: false },
    ],
  },
} as const;

const loadGoogleAnalytics = () => {
  if (document.querySelector(`script[data-ga-id="${GA_MEASUREMENT_ID}"]`)) return;
  const s1 = document.createElement("script");
  s1.async = true;
  s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  s1.dataset.gaId = GA_MEASUREMENT_ID;
  document.head.appendChild(s1);
  const s2 = document.createElement("script");
  s2.dataset.gaId = GA_MEASUREMENT_ID;
  s2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'granted'});
    gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
  `;
  document.head.appendChild(s2);
};

const parseConsent = (raw: string | null): ConsentRecord | null => {
  if (!raw) return null;
  // Backward compat with v1 string values.
  if (raw === "accepted") return { v: 1, ts: "", analytics: true };
  if (raw === "declined") return { v: 1, ts: "", analytics: false };
  try {
    const r = JSON.parse(raw) as ConsentRecord;
    if (typeof r?.analytics === "boolean") return r;
  } catch {
    /* noop */
  }
  return null;
};

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [language, setLanguage] = useState<Lang>("en");

  useEffect(() => {
    const browser = (navigator.language || "en").toLowerCase();
    if (browser.startsWith("de")) setLanguage("de");
    const record = parseConsent(getItem(STORAGE_KEY));
    if (!record || record.v < CONSENT_VERSION) {
      setShowBanner(true);
      return;
    }
    setAnalytics(record.analytics);
    if (record.analytics) loadGoogleAnalytics();
  }, []);

  const persist = useCallback((analyticsOn: boolean) => {
    const record: ConsentRecord = {
      v: CONSENT_VERSION,
      ts: new Date().toISOString(),
      analytics: analyticsOn,
    };
    setItem(STORAGE_KEY, JSON.stringify(record));
  }, []);

  const acceptAll = () => {
    persist(true);
    setAnalytics(true);
    setShowBanner(false);
    setShowDetails(false);
    loadGoogleAnalytics();
  };

  const rejectAll = () => {
    persist(false);
    setAnalytics(false);
    setShowBanner(false);
    setShowDetails(false);
  };

  const saveCustom = () => {
    persist(analytics);
    setShowBanner(false);
    setShowDetails(false);
    if (analytics) loadGoogleAnalytics();
  };

  const openPreferences = useCallback(() => {
    const record = parseConsent(getItem(STORAGE_KEY));
    setAnalytics(record?.analytics ?? false);
    setShowBanner(true);
    setShowDetails(true);
  }, []);

  useEffect(() => {
    window.manageCookiePreferences = openPreferences;
    return () => {
      if (window.manageCookiePreferences === openPreferences) {
        window.manageCookiePreferences = undefined;
      }
    };
  }, [openPreferences]);

  if (!showBanner) return null;

  const L = t[language];

  return (
    <>
      {!showDetails && (
      <div
        role="dialog"
        aria-modal="false"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-body"
        className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-4 sm:pb-4"
      >
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-background/95 text-foreground shadow-xl backdrop-blur-md">
          <div className="flex items-start gap-3 p-4 sm:p-5">
            <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Cookie className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <h2 id="cookie-consent-title" className="text-base font-semibold leading-tight sm:text-lg">
                  {L.title}
                </h2>
                <div className="flex gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    aria-pressed={language === "en"}
                    className={cn(
                      "rounded px-1.5 py-0.5",
                      language === "en"
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("de")}
                    aria-pressed={language === "de"}
                    className={cn(
                      "rounded px-1.5 py-0.5",
                      language === "de"
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    DE
                  </button>
                </div>
              </div>
              <p id="cookie-consent-body" className="text-sm leading-relaxed text-muted-foreground">
                {L.body}
              </p>
              <p className="text-[11px] leading-relaxed text-muted-foreground/80">
                {L.rights}{" "}
                <a href="/privacy" className="underline hover:text-foreground">
                  {L.privacy}
                </a>
                {" · "}
                <a href="/impressum" className="underline hover:text-foreground">
                  {L.imprint}
                </a>
              </p>
              <div className="flex flex-col-reverse gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowDetails(true)}
                >
                  {L.customize}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={rejectAll}
                  className="sm:min-w-[140px]"
                >
                  {L.reject}
                </Button>
                <Button
                  type="button"
                  size="sm"
                  onClick={acceptAll}
                  className="sm:min-w-[140px]"
                >
                  {L.accept}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{L.detailsTitle}</DialogTitle>
            <DialogDescription>{L.detailsIntro}</DialogDescription>
          </DialogHeader>

          <div className="space-y-3">
            <div className="flex items-start justify-between gap-4 rounded-lg border border-border p-3">
              <div className="flex gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium">{L.essential}</p>
                  <p className="text-xs text-muted-foreground">{L.essentialDesc}</p>
                </div>
              </div>
              <span className="shrink-0 text-xs font-medium text-muted-foreground">
                {L.alwaysOn}
              </span>
            </div>

            <div className="flex items-start justify-between gap-4 rounded-lg border border-border p-3">
              <div className="flex gap-3">
                <BarChart3 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <label htmlFor="consent-analytics" className="text-sm font-medium">
                    {L.analytics}
                  </label>
                  <p className="text-xs text-muted-foreground">{L.analyticsDesc}</p>
                </div>
              </div>
              <Switch
                id="consent-analytics"
                checked={analytics}
                onCheckedChange={setAnalytics}
                aria-label={L.analytics}
              />
            </div>
          </div>

          <div className="mt-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {L.cookieList}
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-left text-xs">
                <thead className="bg-muted/40 text-muted-foreground">
                  <tr>
                    <th className="px-3 py-2 font-medium">{L.name}</th>
                    <th className="px-3 py-2 font-medium">{L.provider}</th>
                    <th className="px-3 py-2 font-medium">{L.purpose}</th>
                    <th className="px-3 py-2 font-medium">{L.duration}</th>
                  </tr>
                </thead>
                <tbody>
                  {L.rows.map((r) => (
                    <tr key={r.name} className="border-t border-border/60">
                      <td className="px-3 py-2 font-mono">{r.name}</td>
                      <td className="px-3 py-2">{r.provider}</td>
                      <td className="px-3 py-2 text-muted-foreground">{r.purpose}</td>
                      <td className="px-3 py-2">{r.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground">{L.controller}</p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline hover:text-foreground"
              >
                Google Privacy Policy <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            </p>
          </div>

          <DialogFooter className="gap-2 sm:gap-2">
            <Button type="button" variant="outline" onClick={rejectAll}>
              {L.reject}
            </Button>
            <Button type="button" variant="secondary" onClick={saveCustom}>
              {L.save}
            </Button>
            <Button type="button" onClick={acceptAll}>
              {L.accept}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;
