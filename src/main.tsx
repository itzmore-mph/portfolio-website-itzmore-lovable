import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initSafariCompat } from '@/utils/safariCompatibility'

// Simple Safari detection
const isSafari = () => {
  try {
    const ua = navigator.userAgent;
    return /Safari/.test(ua) && !/Chrome|Chromium|Edge/.test(ua);
  } catch {
    return false;
  }
};

const isMobile = () => {
  try {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  } catch {
    return false;
  }
};

// Initialize Safari compatibility early
if (typeof window !== "undefined") {
  try {
    initSafariCompat();
  } catch (error) {
    console.error('Safari compatibility init failed:', error);
  }
}

// Add Safari-specific styles immediately for better compatibility
if (isSafari() && isMobile()) {
  const safariStyles = document.createElement('style');
  safariStyles.textContent = `
    html, body { 
      height: 100vh;
      height: -webkit-fill-available;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
    }
    * { 
      -webkit-transform: translateZ(0);
      -webkit-backface-visibility: hidden;
    }
    #root {
      min-height: 100vh;
      min-height: -webkit-fill-available;
    }
  `;
  document.head.appendChild(safariStyles);
}

// Simple render function
const renderApp = () => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    try {
      console.log('Rendering React app...');
      const root = createRoot(rootElement);
      root.render(<App />);
      console.log('React app rendered successfully');
    } catch (error) {
      console.error('Failed to render React app:', error);
      // Simple fallback - just show error message
      rootElement.innerHTML = `
        <div style="
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          font-family: system-ui, sans-serif;
          text-align: center;
          padding: 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        ">
          <h1>ITzMore.dev</h1>
          <p>Loading issue detected. Please refresh the page.</p>
          <button onclick="window.location.reload()" style="
            background: rgba(255,255,255,0.2);
            color: white;
            border: 1px solid rgba(255,255,255,0.3);
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            cursor: pointer;
            margin-top: 1rem;
          ">Refresh Page</button>
        </div>
      `;
    }
  }
};

// Render immediately or wait for DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}