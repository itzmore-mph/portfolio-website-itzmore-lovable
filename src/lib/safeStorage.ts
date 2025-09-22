/**
 * Safe storage wrapper that handles QuotaExceededError and other storage failures
 * Common in iOS Safari with private mode, ITP, or limited storage
 */

interface SafeStorageInterface {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
  clear: () => void;
}

class SafeStorage implements SafeStorageInterface {
  private storage: Storage | null = null;
  private fallback: Map<string, string> = new Map();

  constructor(storageType: 'localStorage' | 'sessionStorage') {
    try {
      const testStorage = storageType === 'localStorage' ? window.localStorage : window.sessionStorage;
      
      // Test if storage is available and writable
      const testKey = '__storage_test__';
      testStorage.setItem(testKey, 'test');
      testStorage.removeItem(testKey);
      
      this.storage = testStorage;
    } catch (e) {
      console.warn(`${storageType} not available, using fallback:`, e);
      this.storage = null;
    }
  }

  getItem(key: string): string | null {
    try {
      if (this.storage) {
        return this.storage.getItem(key);
      }
      return this.fallback.get(key) || null;
    } catch (e) {
      console.warn('Storage getItem failed:', e);
      return this.fallback.get(key) || null;
    }
  }

  setItem(key: string, value: string): void {
    try {
      if (this.storage) {
        this.storage.setItem(key, value);
        return;
      }
      this.fallback.set(key, value);
    } catch (e) {
      console.warn('Storage setItem failed:', e);
      this.fallback.set(key, value);
    }
  }

  removeItem(key: string): void {
    try {
      if (this.storage) {
        this.storage.removeItem(key);
      }
      this.fallback.delete(key);
    } catch (e) {
      console.warn('Storage removeItem failed:', e);
      this.fallback.delete(key);
    }
  }

  clear(): void {
    try {
      if (this.storage) {
        this.storage.clear();
      }
      this.fallback.clear();
    } catch (e) {
      console.warn('Storage clear failed:', e);
      this.fallback.clear();
    }
  }
}

// Create safe storage instances
export const safeStorage = new SafeStorage('localStorage');
export const safeSession = new SafeStorage('sessionStorage');

// Convenience exports for common operations
export const getItem = (key: string, useSession = false): string | null => {
  return useSession ? safeSession.getItem(key) : safeStorage.getItem(key);
};

export const setItem = (key: string, value: string, useSession = false): void => {
  return useSession ? safeSession.setItem(key, value) : safeStorage.setItem(key, value);
};

export const removeItem = (key: string, useSession = false): void => {
  return useSession ? safeSession.removeItem(key) : safeStorage.removeItem(key);
};