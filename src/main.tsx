import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enhanced Safari compatibility check
const isSafariMobile = () => {
  if (typeof window === "undefined") return false;
  const userAgent = navigator.userAgent;
  return /iPhone|iPad|iPod/i.test(userAgent) && /Safari/i.test(userAgent);
};

// Safari mobile compatibility wrapper
const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    // For Safari mobile, ensure DOM is ready
    const renderApp = () => {
      try {
        const root = createRoot(rootElement);
        root.render(<App />);
        
        // Hide loading fallback once React renders
        setTimeout(() => {
          const fallback = document.querySelector('.loading-fallback') as HTMLElement;
          if (fallback && rootElement.children.length > 0) {
            fallback.style.display = 'none';
          }
        }, isSafariMobile() ? 300 : 100); // Longer timeout for Safari
        
      } catch (error) {
        console.error('Failed to render React app:', error);
        // Fallback content for Safari
        rootElement.innerHTML = `
          <div style="
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            text-align: center;
            background: #f8fafc;
          ">
            <div>
              <h1 style="color: #1e293b; margin-bottom: 16px;">Loading...</h1>
              <p style="color: #64748b;">Please wait while the application loads.</p>
              <button onclick="window.location.reload()" style="
                margin-top: 16px;
                padding: 8px 16px;
                background: #3b82f6;
                color: white;
                border: none;
                border-radius: 6px;
                cursor: pointer;
              ">Retry</button>
            </div>
          </div>
        `;
      }
    };

    // For Safari mobile, wait for DOM to be fully ready
    if (isSafariMobile() && document.readyState !== 'complete') {
      window.addEventListener('load', renderApp);
    } else {
      renderApp();
    }
    
  } catch (error) {
    console.error('Critical error in main.tsx:', error);
    const fallback = document.querySelector('.loading-fallback');
    if (fallback) {
      fallback.innerHTML = '<div style="text-align: center; padding: 20px; font-family: Arial, sans-serif;">Failed to load application. Please refresh the page.</div>';
    }
  }
} else {
  console.error('Root element not found');
}
