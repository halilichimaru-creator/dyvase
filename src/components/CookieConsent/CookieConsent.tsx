'use client';

import { useState, useEffect } from 'react';
import './CookieConsent.css';

interface CookieSettings {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = 'dyvase-cookie-consent';
const CONSENT_DURATION_MS = 180 * 24 * 60 * 60 * 1000; // 6 months

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (savedConsent) {
      const { timestamp, settings: savedSettings } = JSON.parse(savedConsent);
      const isExpired = Date.now() - timestamp > CONSENT_DURATION_MS;
      if (!isExpired) {
        applySettings(savedSettings);
        return;
      }
    }
    setShowBanner(true);
  }, []);

  const applySettings = (newSettings: CookieSettings) => {
    if (newSettings.analytics) {
      injectGoogleScripts();
    } else {
      removeGoogleScripts();
    }
  };

  const saveConsent = (newSettings: CookieSettings) => {
    const consentData = {
      timestamp: Date.now(),
      settings: newSettings,
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    applySettings(newSettings);
    setShowBanner(false);
    setShowCustomizer(false);
  };

  const handleAcceptAll = () => {
    const allOn = { essential: true, analytics: true, marketing: true };
    setSettings(allOn);
    saveConsent(allOn);
  };

  const handleRefuseAll = () => {
    const allOff = { essential: true, analytics: false, marketing: false };
    setSettings(allOff);
    saveConsent(allOff);
  };

  const handleSaveCustom = () => {
    saveConsent(settings);
  };

  const injectGoogleScripts = () => {
    if (typeof window.gtag !== 'undefined') return; // Already injected

    // GTM
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NFK2XCR4');`;
    gtmScript.id = 'gtm-script';
    document.head.appendChild(gtmScript);

    // GTag
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-SBP7G01P53';
    gaScript.id = 'ga-script-src';
    document.head.appendChild(gaScript);

    const gaConfigScript = document.createElement('script');
    gaConfigScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-SBP7G01P53');
    `;
    gaConfigScript.id = 'ga-script-config';
    document.head.appendChild(gaConfigScript);
  };

  const removeGoogleScripts = () => {
    ['gtm-script', 'ga-script-src', 'ga-script-config'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.remove();
    });
  };

  useEffect(() => {
    const handleOpen = () => setShowBanner(true);
    window.addEventListener('open-cookie-settings', handleOpen);
    return () => window.removeEventListener('open-cookie-settings', handleOpen);
  }, []);

  if (!showBanner && !showCustomizer) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-consent__overlay" />
      <div className="cookie-consent__banner">
        {!showCustomizer ? (
          <div className="cookie-consent__main">
            <h3>🍪 Votre vie privée nous importe</h3>
            <p>
              Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic du site et diffuser des publicités pertinentes. 
              Vous pouvez choisir d'accepter tous les cookies, de les refuser ou de personnaliser vos préférences.
            </p>
            <div className="cookie-consent__actions">
              <button className="btn btn-secondary" onClick={() => setShowCustomizer(true)}>Personnaliser</button>
              <button className="btn btn-outline" onClick={handleRefuseAll}>Tout refuser</button>
              <button className="btn btn-primary" onClick={handleAcceptAll}>Tout accepter</button>
            </div>
          </div>
        ) : (
          <div className="cookie-consent__custom">
            <h3>Personnaliser vos préférences</h3>
            <div className="cookie-consent__option">
              <div className="cookie-consent__option-info">
                <strong>Essentiels</strong>
                <p>Nécessaires au bon fonctionnement du site. Ils ne peuvent pas être désactivés.</p>
              </div>
              <input type="checkbox" checked disabled />
            </div>
            <div className="cookie-consent__option">
              <div className="cookie-consent__option-info">
                <strong>Analytiques</strong>
                <p>Nous permettent de comprendre comment vous utilisez le site pour l'améliorer.</p>
              </div>
              <input 
                type="checkbox" 
                checked={settings.analytics} 
                onChange={(e) => setSettings({...settings, analytics: e.target.checked})}
              />
            </div>
            <div className="cookie-consent__option">
              <div className="cookie-consent__option-info">
                <strong>Marketing</strong>
                <p>Utilisés pour vous proposer des contenus adaptés à vos centres d'intérêt.</p>
              </div>
              <input 
                type="checkbox" 
                checked={settings.marketing} 
                onChange={(e) => setSettings({...settings, marketing: e.target.checked})}
              />
            </div>
            <div className="cookie-consent__actions">
              <button className="btn btn-secondary" onClick={() => setShowCustomizer(false)}>Retour</button>
              <button className="btn btn-primary" onClick={handleSaveCustom}>Enregistrer les choix</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
