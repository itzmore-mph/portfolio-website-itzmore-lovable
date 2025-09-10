import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Safari mobile compatibility wrapper
const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    const root = createRoot(rootElement);
    root.render(<App />);
    
    // Hide loading fallback once React renders
    setTimeout(() => {
      const fallback = document.querySelector('.loading-fallback') as HTMLElement;
      if (fallback && rootElement.children.length > 0) {
        fallback.style.display = 'none';
      }
    }, 100);
  } catch (error) {
    console.error('Failed to render React app:', error);
    const fallback = document.querySelector('.loading-fallback');
    if (fallback) {
      fallback.innerHTML = '<div style="text-align: center; padding: 20px; font-family: Arial, sans-serif;">Failed to load application. Please refresh the page.</div>';
    }
  }
} else {
  console.error('Root element not found');
}
