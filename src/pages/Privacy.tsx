import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  const [language, setLanguage] = useState<'en' | 'de'>('en');

  const toggleLanguage = (lang: 'en' | 'de') => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary-variant py-16">
        <Container>
          <div className="flex items-center gap-4 mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </Link>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {language === 'en' ? 'Privacy Policy' : 'Datenschutzerklärung'}
          </h1>
          <p className="text-white/90 text-lg">
            {language === 'en' 
              ? 'Your privacy matters. Learn how we handle your data in accordance with GDPR.'
              : 'Ihr Datenschutz ist wichtig. Erfahren Sie, wie wir Ihre Daten gemäß DSGVO verarbeiten.'
            }
          </p>
        </Container>
      </div>

      {/* Content */}
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          {/* Language Toggle */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-4">
                <Globe className="w-5 h-5 text-muted-foreground" />
                <div className="flex gap-2">
                  <Button
                    variant={language === 'en' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => toggleLanguage('en')}
                  >
                    English
                  </Button>
                  <Button
                    variant={language === 'de' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => toggleLanguage('de')}
                  >
                    Deutsch
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* English Content */}
          {language === 'en' && (
            <Card>
              <CardContent className="p-8 prose prose-lg max-w-none">
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    <strong>Last Updated:</strong> December 2024
                  </p>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">1. General Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      This website is a personal portfolio created by Moritz Philipp Haaf. Protecting your personal data is important to me. This Privacy Policy explains how I handle and protect your data in accordance with the General Data Protection Regulation (GDPR).
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">2. Data Collection &amp; Analytics</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      This website uses analytics to collect anonymized usage statistics (e.g., page views, session duration, device and browser type). Analytics cookies are used to measure how visitors interact with the site.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The analytics cookies are <strong>non-essential</strong> and only loaded after you give consent via the cookie consent banner. You may decline or withdraw consent at any time without affecting your browsing experience.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">3. Cookies</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">The following cookies may be set:</p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li><strong>Essential cookies:</strong> Required for basic website functionality</li>
                      <li><strong>Analytics cookies:</strong> Help understand visitor behavior (optional, requires consent)</li>
                      <li><strong>Preference cookies:</strong> Remember your language and cookie preferences</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      To manage your cookie preferences, use the "Manage Cookie Preferences" link in the footer or reload the page to view the banner again.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">4. Contact via Email</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you contact me via the contact form or email, your personal data (e.g., name, email address, message content) will only be used for the purpose of communication and will not be shared without your consent.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">5. External Links</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      This site may include links to external services such as GitHub, LinkedIn, Upwork, or Malt. I am not responsible for their data protection practices. Please refer to the respective providers' privacy policies.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      According to the GDPR, you have the right to access, correct, delete, and restrict the use of your personal data. You also have the right to lodge a complaint with the Austrian Data Protection Authority (Datenschutzbehörde).
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">7. Contact</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      For any data protection questions, please contact:
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg mt-4">
                      <p className="font-semibold">Moritz Philipp Haaf</p>
                      <p className="text-muted-foreground">
                        Email: <a href="mailto:itzmore.dev@gmail.com" className="text-primary hover:underline">itzmore.dev@gmail.com</a>
                      </p>
                      <p className="text-muted-foreground">Location: Vienna, Austria</p>
                    </div>
                  </section>
                </div>
              </CardContent>
            </Card>
          )}

          {/* German Content */}
          {language === 'de' && (
            <Card>
              <CardContent className="p-8 prose prose-lg max-w-none">
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    <strong>Stand:</strong> Dezember 2024
                  </p>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">1. Allgemeine Informationen</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Diese Website ist ein persönliches Portfolio von Moritz Philipp Haaf. Der Schutz Ihrer persönlichen Daten ist mir wichtig. Diese Datenschutzerklärung informiert Sie darüber, wie ich Ihre Daten gemäß der Datenschutz-Grundverordnung (DSGVO) verarbeite.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">2. Datenerhebung &amp; Analyse</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Diese Website verwendet Analysedienste, um anonymisierte Nutzungsstatistiken (z. B. Seitenaufrufe, Sitzungsdauer, Gerätetyp und Browser) zu erfassen. Analytics-Cookies werden verwendet, um zu messen, wie Besucher mit der Seite interagieren.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Die Analytics-Cookies sind <strong>nicht wesentlich</strong> und werden nur nach Ihrer Zustimmung über das Cookie-Banner geladen. Sie können die Nutzung jederzeit ablehnen oder widerrufen, ohne dass dies Ihre Browsererfahrung beeinträchtigt.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">3. Cookies</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">Folgende Cookies können gesetzt werden:</p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li><strong>Notwendige Cookies:</strong> Erforderlich für die grundlegende Website-Funktionalität</li>
                      <li><strong>Analytics-Cookies:</strong> Helfen das Besucherverhalten zu verstehen (optional, erfordert Zustimmung)</li>
                      <li><strong>Präferenz-Cookies:</strong> Speichern Ihre Sprach- und Cookie-Einstellungen</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Um Ihre Cookie-Einstellungen zu verwalten, verwenden Sie den Link „Cookie-Einstellungen verwalten" im Footer oder laden Sie die Seite neu, um das Banner erneut anzuzeigen.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">4. Kontakt per E-Mail</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Wenn Sie mich über das Kontaktformular oder per E-Mail kontaktieren, werden Ihre Daten (z. B. Name, E-Mail-Adresse, Nachrichteninhalt) ausschließlich zur Kommunikation genutzt und nicht ohne Ihre Zustimmung weitergegeben.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">5. Externe Links</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Diese Website enthält Links zu externen Diensten wie GitHub, LinkedIn, Upwork oder Malt. Ich bin nicht verantwortlich für deren Datenschutzrichtlinien. Bitte informieren Sie sich bei den jeweiligen Anbietern.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">6. Ihre Rechte</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Gemäß DSGVO haben Sie das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten. Außerdem können Sie sich bei der Österreichischen Datenschutzbehörde beschweren.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">7. Kontakt</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Für Fragen zum Datenschutz kontaktieren Sie bitte:
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg mt-4">
                      <p className="font-semibold">Moritz Philipp Haaf</p>
                      <p className="text-muted-foreground">
                        E-Mail: <a href="mailto:itzmore.dev@gmail.com" className="text-primary hover:underline">itzmore.dev@gmail.com</a>
                      </p>
                      <p className="text-muted-foreground">Standort: Wien, Österreich</p>
                    </div>
                  </section>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Back to Portfolio Link */}
          <div className="mt-8 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'en' ? 'Back to Portfolio' : 'Zurück zum Portfolio'}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Privacy;