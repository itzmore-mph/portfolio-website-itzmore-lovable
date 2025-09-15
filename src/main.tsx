import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initSafariCompat } from '@/utils/safariCompatibility'

// Immediate Safari mobile detection - before anything else
const isIOSDevice = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

const isSafariMobile = () => {
  const ua = navigator.userAgent;
  return isIOSDevice() && (/Safari/i.test(ua) || /Version/i.test(ua));
};

const isSafari = () => {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent;
  return /Safari/.test(ua) && !/Chrome|Chromium|Edge/.test(ua);
};

// Safari Mobile Fallback - Simple static portfolio
const showSafariMobileFallback = () => {
  console.log('Showing Safari mobile fallback');
  document.body.innerHTML = `
    <div style="
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      color: white;
      padding: 2rem;
      overflow-x: hidden;
    ">
      <header style="text-align: center; padding-bottom: 3rem;">
        <div style="
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          background: rgba(255,255,255,0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: bold;
        ">IT</div>
        <h1 style="font-size: 2.5rem; margin: 0 0 1rem 0; font-weight: 700;">ITzMore.dev</h1>
        <p style="font-size: 1.2rem; opacity: 0.9; margin: 0;">Senior Data Analytics Engineer & Full-Stack Developer</p>
      </header>

      <main style="max-width: 800px; margin: 0 auto;">
        <section style="
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
          padding: 2rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(255,255,255,0.2);
        ">
          <h2 style="font-size: 1.8rem; margin: 0 0 1rem 0;">About Me</h2>
          <p style="line-height: 1.6; margin: 0 0 1rem 0; opacity: 0.95;">
            Passionate Data Analyst with strong Data Science expertise, experienced in transforming complex datasets into actionable insights. Currently leading international dashboard and automation projects at Publicis Media Austria while developing cutting-edge football analytics solutions.
          </p>
        </section>

        <section style="
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
          padding: 2rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(255,255,255,0.2);
        ">
          <h2 style="font-size: 1.8rem; margin: 0 0 1rem 0;">Core Expertise</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
            <div>
              <h3 style="font-size: 1.1rem; margin: 0 0 0.5rem 0; font-weight: 600;">🔍 Data Analytics</h3>
              <p style="font-size: 0.9rem; opacity: 0.9; margin: 0;">Python, R, SQL, Tableau, Power BI</p>
            </div>
            <div>
              <h3 style="font-size: 1.1rem; margin: 0 0 0.5rem 0; font-weight: 600;">⚽ Sports Analytics</h3>
              <p style="font-size: 0.9rem; opacity: 0.9; margin: 0;">Football Analytics, Performance Metrics</p>
            </div>
            <div>
              <h3 style="font-size: 1.1rem; margin: 0 0 0.5rem 0; font-weight: 600;">💻 Development</h3>
              <p style="font-size: 0.9rem; opacity: 0.9; margin: 0;">React, TypeScript, Python, APIs</p>
            </div>
            <div>
              <h3 style="font-size: 1.1rem; margin: 0 0 0.5rem 0; font-weight: 600;">🤖 Machine Learning</h3>
              <p style="font-size: 0.9rem; opacity: 0.9; margin: 0;">Predictive Models, AI Integration</p>
            </div>
          </div>
        </section>

        <section style="
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
          padding: 2rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(255,255,255,0.2);
          text-align: center;
        ">
          <h2 style="font-size: 1.8rem; margin: 0 0 1rem 0;">Let's Connect</h2>
          <p style="margin: 0 0 1.5rem 0; opacity: 0.9;">Ready to transform your data into insights?</p>
          
          <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
            <a href="mailto:itzmore.dev@gmail.com" style="
              display: inline-block;
              background: rgba(255,255,255,0.2);
              color: white;
              text-decoration: none;
              padding: 0.75rem 1.5rem;
              border-radius: 0.5rem;
              font-weight: 600;
              border: 1px solid rgba(255,255,255,0.3);
            ">✉️ itzmore.dev@gmail.com</a>
            
            <a href="https://calendly.com/itzmore-dev" target="_blank" style="
              display: inline-block;
              background: rgba(255,255,255,0.9);
              color: #667eea;
              text-decoration: none;
              padding: 0.75rem 1.5rem;
              border-radius: 0.5rem;
              font-weight: 600;
            ">📅 Schedule a Call</a>
          </div>

          <div style="margin-top: 1.5rem; display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            <a href="https://www.linkedin.com/in/moritz-philipp-haaf/" target="_blank" style="
              color: white;
              text-decoration: none;
              opacity: 0.8;
              font-size: 0.9rem;
            ">🔗 LinkedIn</a>
            <a href="https://github.com/itzmore-mph" target="_blank" style="
              color: white;
              text-decoration: none;
              opacity: 0.8;
              font-size: 0.9rem;
            ">🐙 GitHub</a>
            <a href="https://www.upwork.com/freelancers/~01924c4b6089ef56d8" target="_blank" style="
              color: white;
              text-decoration: none;
              opacity: 0.8;
              font-size: 0.9rem;
            ">💼 Upwork</a>
          </div>
        </section>

        <section style="text-align: center; padding: 1rem 0;">
          <p style="margin: 0 0 1rem 0; opacity: 0.7; font-size: 0.9rem;">
            Having trouble? Try reloading for the full interactive experience.
          </p>
          <button onclick="window.location.reload()" style="
            background: rgba(255,255,255,0.2);
            color: white;
            border: 1px solid rgba(255,255,255,0.3);
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-size: 1rem;
            cursor: pointer;
            font-weight: 600;
          ">🔄 Reload Page</button>
        </section>
      </main>
      
      <footer style="text-align: center; padding-top: 2rem; opacity: 0.7; font-size: 0.8rem;">
        <p>© 2025 Moritz Philipp Haaf • Based in Vienna, Austria</p>
      </footer>
    </div>
  `;
};

// Show immediate loading screen for Safari mobile
if (isSafariMobile()) {
  console.log('Safari Mobile detected - showing immediate loading screen');
  
  // Add critical mobile Safari CSS immediately
  const criticalStyle = document.createElement('style');
  criticalStyle.textContent = `
    html, body { 
      height: 100%;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
    }
    * { 
      -webkit-transform: translateZ(0);
      -webkit-backface-visibility: hidden;
      box-sizing: border-box;
    }
    #root {
      min-height: 100vh;
      min-height: -webkit-fill-available;
    }
    .safari-loader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    }
    .safari-loader-content {
      text-align: center;
      color: white;
      padding: 2rem;
    }
    .safari-spinner {
      width: 50px;
      height: 50px;
      border: 3px solid rgba(255,255,255,0.3);
      border-top: 3px solid white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 1rem;
    }
    @keyframes spin { 
      0% { transform: rotate(0deg); } 
      100% { transform: rotate(360deg); } 
    }
  `;
  document.head.appendChild(criticalStyle);
  
  // Show immediate loading screen
  const loaderDiv = document.createElement('div');
  loaderDiv.className = 'safari-loader';
  loaderDiv.innerHTML = `
    <div class="safari-loader-content">
      <div class="safari-spinner"></div>
      <h2 style="margin: 0 0 0.5rem 0; font-size: 1.5rem;">ITzMore.dev</h2>
      <p style="margin: 0; opacity: 0.9; font-size: 1rem;">Loading Portfolio...</p>
    </div>
  `;
  document.body.appendChild(loaderDiv);
  
  // Set very aggressive timeout for Safari mobile
  setTimeout(() => {
    console.warn('Safari Mobile: Timeout reached - showing static fallback');
    showSafariMobileFallback();
  }, 3000); // Only 3 seconds for mobile
}

// Initialize Safari compatibility system early
if (typeof window !== "undefined") {
  try {
    initSafariCompat();
  } catch (error) {
    console.error('Safari compatibility init failed:', error);
  }
}

// Safari-specific loading timeout
let safariLoadingTimeout: NodeJS.Timeout | null = null;

// Main initialization logic
const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    // Set up loading timeout based on device
    let timeoutDuration = 4000; // Default
    if (isSafariMobile()) {
      timeoutDuration = 5000; // 5 seconds for mobile Safari
    } else if (isSafari()) {
      timeoutDuration = 4000; // 4 seconds for desktop Safari
    }
    
    if (!isSafariMobile()) { // Only set timeout if not already handled above
      safariLoadingTimeout = setTimeout(() => {
        console.warn('Loading timeout - showing fallback');
        showSafariMobileFallback();
      }, timeoutDuration);
    }

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
        
        // Remove Safari mobile loader
        setTimeout(() => {
          const loader = document.querySelector('.safari-loader') as HTMLElement;
          if (loader) {
            loader.style.opacity = '0';
            loader.style.transition = 'opacity 0.3s ease-out';
            setTimeout(() => {
              loader.remove();
            }, 300);
          }
        }, 100);
        
        console.log('React app rendered successfully');
        
      } catch (error) {
        console.error('Failed to render React app:', error);
        if (safariLoadingTimeout) {
          clearTimeout(safariLoadingTimeout);
        }
        showSafariMobileFallback();
      }
    };

    // Device-specific initialization strategy
    if (isSafariMobile()) {
      console.log('Mobile Safari detected');
      
      // For mobile Safari, wait for everything to be fully ready
      const waitForReady = () => {
        if (document.readyState === 'complete') {
          setTimeout(renderApp, 500); // Increased delay for mobile
        } else {
          window.addEventListener('load', () => {
            setTimeout(renderApp, 500);
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
    showSafariMobileFallback();
  }
} else {
  console.error('Root element not found');
  showSafariMobileFallback();
}