import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initSafariCompat } from '@/utils/safariCompatibility'

// Enhanced Safari detection and fallback system
const isSafari = () => {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent;
  return /Safari/.test(ua) && !/Chrome|Chromium|Edge/.test(ua);
};

const isSafariMobile = () => {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent;
  return (/iPhone|iPad|iPod/i.test(ua) && /Safari/i.test(ua)) || 
         (/iPhone|iPad|iPod/i.test(ua) && /Version/i.test(ua));
};

const isIOSWebView = () => {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent;
  return /iPhone|iPad|iPod/i.test(ua) && !/Safari/i.test(ua);
};

// Initialize Safari compatibility system early
if (typeof window !== "undefined") {
  initSafariCompat();
  
  // Add immediate mobile Safari optimizations
  if ((/iPhone|iPad|iPod/i.test(navigator.userAgent))) {
    // Add critical CSS immediately
    const style = document.createElement('style');
    style.textContent = `
      html, body { 
        -webkit-overflow-scrolling: touch;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
        height: 100%;
        overflow-x: hidden;
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
    document.head.appendChild(style);
    
    // Show immediate loading indicator for mobile Safari
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'mobile-safari-loader';
    loadingDiv.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      ">
        <div style="text-align: center; color: white;">
          <div style="
            width: 60px;
            height: 60px;
            margin: 0 auto 1rem;
            border: 3px solid rgba(255,255,255,0.3);
            border-top: 3px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          "></div>
          <p style="font-size: 1.1rem; opacity: 0.9;">Loading ITzMore.dev...</p>
        </div>
      </div>
      <style>
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      </style>
    `;
    document.body.appendChild(loadingDiv);
    
    console.log('Mobile Safari: Loading indicator added');
  }
}

// Safari-specific loading timeout
let safariLoadingTimeout: NodeJS.Timeout | null = null;

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

// Mobile Safari specific initialization
const initializeMobileSafari = () => {
  console.log('Initializing for mobile Safari...');
  
  // Add mobile Safari specific styles immediately
  const style = document.createElement('style');
  style.textContent = `
    * { 
      -webkit-transform: translateZ(0); 
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }
    body { 
      -webkit-overflow-scrolling: touch; 
      overflow-x: hidden;
    }
    #root {
      min-height: 100vh;
      min-height: -webkit-fill-available;
    }
  `;
  document.head.appendChild(style);
  
  // Force viewport meta tag
  let viewport = document.querySelector('meta[name="viewport"]');
  if (!viewport) {
    viewport = document.createElement('meta');
    viewport.setAttribute('name', 'viewport');
    document.head.appendChild(viewport);
  }
  viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
};

// Main initialization logic
const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    // Early mobile Safari initialization
    if (isSafariMobile() || isIOSWebView()) {
      initializeMobileSafari();
    }
    
    // Set up loading timeout based on device
    let timeoutDuration = 3000; // Default
    if (isSafariMobile() || isIOSWebView()) {
      timeoutDuration = 10000; // 10 seconds for mobile Safari
    } else if (isSafari()) {
      timeoutDuration = 5000; // 5 seconds for desktop Safari
    }
    
    safariLoadingTimeout = setTimeout(() => {
      console.warn('Loading timeout - showing fallback');
      showSafariFallback();
    }, timeoutDuration);

    // Simplified render function
    const renderApp = () => {
      try {
        console.log('Attempting to render React app...');
        const root = createRoot(rootElement);
        root.render(<App />);
        
        // Clear timeout on successful render
        if (safariLoadingTimeout) {
          clearTimeout(safariLoadingTimeout);
          safariLoadingTimeout = null;
        }
        
        // Remove mobile Safari loader
        setTimeout(() => {
          const loader = document.getElementById('mobile-safari-loader');
          if (loader) {
            loader.style.opacity = '0';
            loader.style.transition = 'opacity 0.3s ease-out';
            setTimeout(() => {
              loader.remove();
            }, 300);
          }
        }, 100);
        
        console.log('React app rendered successfully');
        
        // Additional check for mobile Safari
        if (isSafariMobile()) {
          setTimeout(() => {
            if (rootElement.children.length === 0) {
              console.warn('Mobile Safari: No React content detected after render');
              showSafariFallback();
            }
          }, 1000);
        }
        
      } catch (error) {
        console.error('Failed to render React app:', error);
        if (safariLoadingTimeout) {
          clearTimeout(safariLoadingTimeout);
        }
        showSafariFallback();
      }
    };

    // Device-specific initialization strategy
    if (isSafariMobile() || isIOSWebView()) {
      console.log('Mobile Safari/WebView detected');
      
      // For mobile Safari, wait for everything to be fully ready
      const waitForReady = () => {
        if (document.readyState === 'complete') {
          // Wait a bit more for mobile Safari
          setTimeout(renderApp, 300);
        } else {
          // Wait for window load event
          window.addEventListener('load', () => {
            setTimeout(renderApp, 300);
          }, { once: true });
        }
      };
      
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForReady, { once: true });
      } else {
        waitForReady();
      }
      
    } else if (isSafari()) {
      console.log('Desktop Safari detected');
      
      // Desktop Safari - more aggressive but still careful
      if (document.readyState === 'complete') {
        setTimeout(renderApp, 100);
      } else if (document.readyState === 'interactive') {
        setTimeout(renderApp, 200);
      } else {
        document.addEventListener('DOMContentLoaded', () => {
          setTimeout(renderApp, 100);
        }, { once: true });
      }
      
    } else {
      // Non-Safari browsers - immediate render
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderApp, { once: true });
      } else {
        renderApp();
      }
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
  showSafariFallback();
}
