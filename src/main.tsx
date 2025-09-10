import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initSafariCompat } from '@/utils/safariCompatibility'

// Initialize Safari compatibility system
initSafariCompat();

// Enhanced Safari detection and fallback system
const isSafari = () => {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent;
  return /Safari/.test(ua) && !/Chrome|Chromium|Edge/.test(ua);
};

const isSafariMobile = () => {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent;
  return /iPhone|iPad|iPod/i.test(ua) && /Safari/i.test(ua);
};

// Safari-specific loading timeout
let safariLoadingTimeout: NodeJS.Timeout;

const showSafariFallback = () => {
  const rootElement = document.getElementById("root");
  if (!rootElement) return;
  
  rootElement.innerHTML = `
    <div style="
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    ">
      <div style="
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        padding: 3rem;
        border-radius: 1rem;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        text-align: center;
        max-width: 500px;
        width: 100%;
      ">
        <div style="
          width: 80px;
          height: 80px;
          margin: 0 auto 2rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2rem;
          font-weight: bold;
        ">
          IT
        </div>
        <h1 style="
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1rem;
          line-height: 1.2;
        ">
          ITzMore.dev
        </h1>
        <p style="
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 2rem;
          line-height: 1.6;
        ">
          Senior Data Analytics Engineer & Full-Stack Developer
        </p>
        <div style="
          display: flex;
          flex-direction: column;
          gap: 1rem;
        ">
          <div style="
            padding: 1rem;
            background: #f8f9fa;
            border-radius: 0.5rem;
            border-left: 4px solid #667eea;
          ">
            <strong style="color: #333;">Specializing in:</strong><br>
            Data Analytics • Machine Learning • Full-Stack Development
          </div>
          <button onclick="window.location.reload()" style="
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
          " onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
            🔄 Reload Page
          </button>
          <p style="
            font-size: 0.9rem;
            color: #888;
            margin-top: 1rem;
          ">
            If this page doesn't load automatically, please try refreshing or use a different browser.
          </p>
        </div>
      </div>
    </div>
  `;
};

// Safari mobile compatibility wrapper
const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    // Set Safari loading timeout
    if (isSafari()) {
      safariLoadingTimeout = setTimeout(() => {
        console.warn('Safari loading timeout - showing fallback');
        showSafariFallback();
      }, isSafariMobile() ? 8000 : 5000); // Longer timeout for mobile
    }

    // For Safari mobile, ensure DOM is ready
    const renderApp = () => {
      try {
        const root = createRoot(rootElement);
        root.render(<App />);
        
        // Clear Safari timeout on successful render
        if (safariLoadingTimeout) {
          clearTimeout(safariLoadingTimeout);
        }
        
        // Hide loading fallback once React renders
        setTimeout(() => {
          const fallback = document.querySelector('.loading-fallback') as HTMLElement;
          if (fallback && rootElement.children.length > 0) {
            fallback.style.display = 'none';
          }
        }, isSafariMobile() ? 500 : 200); // Increased timeout for Safari
        
        // Add success indicator for debugging
        if (isSafari()) {
          console.log('Safari: React app rendered successfully');
        }
        
      } catch (error) {
        console.error('Failed to render React app:', error);
        // Clear timeout and show fallback
        if (safariLoadingTimeout) {
          clearTimeout(safariLoadingTimeout);
        }
        showSafariFallback();
      }
    };

    // Enhanced Safari initialization
    const initializeApp = () => {
      if (isSafari()) {
        // For Safari, add additional checks
        if (document.readyState === 'complete') {
          // DOM is fully loaded
          setTimeout(renderApp, 100);
        } else if (document.readyState === 'interactive') {
          // DOM is ready, but resources may still be loading
          setTimeout(renderApp, 200);
        } else {
          // Still loading
          window.addEventListener('DOMContentLoaded', renderApp);
        }
      } else {
        // Non-Safari browsers
        renderApp();
      }
    };

    // For Safari mobile, ensure everything is ready
    if (isSafariMobile() && document.readyState !== 'complete') {
      window.addEventListener('load', initializeApp);
    } else {
      initializeApp();
    }
    
  } catch (error) {
    console.error('Critical error in main.tsx:', error);
    if (safariLoadingTimeout) {
      clearTimeout(safariLoadingTimeout);
    }
    showSafariFallback();
  }
} else {
  console.error('Root element not found');
  // Show fallback even without root element
  document.body.innerHTML = `
    <div style="
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      background: #f5f5f5;
      text-align: center;
      padding: 2rem;
    ">
      <div>
        <h1 style="color: #d32f2f; margin-bottom: 1rem;">Application Error</h1>
        <p style="color: #666; margin-bottom: 1rem;">Could not find root element. Please refresh the page.</p>
        <button onclick="window.location.reload()" style="
          background: #1976d2;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          cursor: pointer;
          font-size: 1rem;
        ">
          Refresh Page
        </button>
      </div>
    </div>
  `;
}
