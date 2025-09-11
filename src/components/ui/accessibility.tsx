import { useEffect } from 'react';

// Skip to main content link for keyboard navigation
export const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium transition-all"
    >
      Skip to main content
    </a>
  );
};

// Focus management for modals and dynamic content
export const useFocusManagement = (isOpen: boolean, triggerRef?: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (isOpen) {
      // Save the currently focused element
      const previouslyFocusedElement = document.activeElement as HTMLElement;
      
      // Focus the modal or first focusable element
      const modal = document.querySelector('[role="dialog"]') as HTMLElement;
      if (modal) {
        const firstFocusable = modal.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as HTMLElement;
        firstFocusable?.focus();
      }

      return () => {
        // Return focus to the previously focused element
        if (triggerRef?.current) {
          triggerRef.current.focus();
        } else {
          previouslyFocusedElement?.focus();
        }
      };
    }
  }, [isOpen, triggerRef]);
};

// Announce dynamic content changes to screen readers
export const announceToScreenReader = (message: string) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove the announcement after a short delay
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Enhanced button component with proper ARIA attributes
interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  loadingText?: string;
}

export const AccessibleButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading = false,
  loadingText = 'Loading...',
  disabled,
  ...props 
}: AccessibleButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      aria-disabled={disabled || isLoading}
      aria-describedby={isLoading ? `${props.id}-loading` : undefined}
    >
      {isLoading ? (
        <>
          <span aria-hidden="true" className="animate-spin mr-2">⟳</span>
          <span id={`${props.id}-loading`}>{loadingText}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};