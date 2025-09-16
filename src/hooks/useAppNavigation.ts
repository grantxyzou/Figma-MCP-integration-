import { useEffect, useRef, useCallback } from 'react';

interface NavigationHistory {
  view: string;
  timestamp: number;
}

interface UseAppNavigationProps {
  currentView: string;
  onNavigate: (view: string) => void;
  canGoBack?: () => boolean;
  canGoForward?: () => boolean;
}

export const useAppNavigation = ({
  currentView,
  onNavigate,
  canGoBack,
  canGoForward
}: UseAppNavigationProps) => {
  const historyRef = useRef<NavigationHistory[]>([]);
  const currentIndexRef = useRef(0);
  const isNavigatingRef = useRef(false);

  // Initialize history with current view
  useEffect(() => {
    if (historyRef.current.length === 0) {
      historyRef.current = [{ view: currentView, timestamp: Date.now() }];
      currentIndexRef.current = 0;
    }
  }, [currentView]);

  // Add new view to history (when user navigates forward)
  const pushToHistory = useCallback((view: string) => {
    if (isNavigatingRef.current) return;
    
    const newEntry = { view, timestamp: Date.now() };
    
    // Remove any forward history if we're not at the end
    if (currentIndexRef.current < historyRef.current.length - 1) {
      historyRef.current = historyRef.current.slice(0, currentIndexRef.current + 1);
    }
    
    historyRef.current.push(newEntry);
    currentIndexRef.current = historyRef.current.length - 1;
    
    // Keep history reasonable size (max 50 entries)
    if (historyRef.current.length > 50) {
      historyRef.current = historyRef.current.slice(-50);
      currentIndexRef.current = historyRef.current.length - 1;
    }
  }, []);

  // Navigate back in history
  const goBack = useCallback(() => {
    if (currentIndexRef.current > 0) {
      isNavigatingRef.current = true;
      currentIndexRef.current--;
      const previousView = historyRef.current[currentIndexRef.current].view;
      onNavigate(previousView);
      
      // Reset flag after navigation
      setTimeout(() => {
        isNavigatingRef.current = false;
      }, 10);
      
      return true;
    }
    return false;
  }, [onNavigate]);

  // Navigate forward in history
  const goForward = useCallback(() => {
    if (currentIndexRef.current < historyRef.current.length - 1) {
      isNavigatingRef.current = true;
      currentIndexRef.current++;
      const nextView = historyRef.current[currentIndexRef.current].view;
      onNavigate(nextView);
      
      // Reset flag after navigation
      setTimeout(() => {
        isNavigatingRef.current = false;
      }, 10);
      
      return true;
    }
    return false;
  }, [onNavigate]);

  // Check if we can navigate back/forward
  const hasBack = currentIndexRef.current > 0;
  const hasForward = currentIndexRef.current < historyRef.current.length - 1;

  // Browser back/forward button handling
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      event.preventDefault();
      
      // Determine direction based on history
      const canGoBackResult = canGoBack ? canGoBack() : hasBack;
      
      if (canGoBackResult) {
        goBack();
      }
    };

    // Push current state to browser history
    if (!isNavigatingRef.current) {
      window.history.pushState({ view: currentView }, '', `#${currentView}`);
    }

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [currentView, goBack, canGoBack, hasBack]);

  // Trackpad swipe gesture handling
  useEffect(() => {
    let startX = 0;
    let startY = 0;
    let isSwipeCandidate = false;

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
        isSwipeCandidate = true;
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!isSwipeCandidate || event.touches.length !== 1) return;

      const currentX = event.touches[0].clientX;
      const currentY = event.touches[0].clientY;
      const deltaX = currentX - startX;
      const deltaY = currentY - startY;

      // Check if it's a horizontal swipe (more horizontal than vertical)
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        event.preventDefault();
        
        if (deltaX > 0 && hasBack) {
          // Swipe right - go back
          goBack();
        } else if (deltaX < 0 && hasForward) {
          // Swipe left - go forward
          goForward();
        }
        
        isSwipeCandidate = false;
      }
    };

    const handleTouchEnd = () => {
      isSwipeCandidate = false;
    };

    // Mouse wheel handling for trackpad swipes (macOS)
    const handleWheel = (event: WheelEvent) => {
      // Detect horizontal scrolling (trackpad swipe)
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY) && Math.abs(event.deltaX) > 30) {
        // Only handle if it's a significant horizontal movement
        if (event.deltaX > 0 && hasForward) {
          // Swipe left (positive deltaX) - go forward
          event.preventDefault();
          goForward();
        } else if (event.deltaX < 0 && hasBack) {
          // Swipe right (negative deltaX) - go back
          event.preventDefault();
          goBack();
        }
      }
    };

    // Keyboard shortcuts
    const handleKeyDown = (event: KeyboardEvent) => {
      // Cmd+Left Arrow or Alt+Left Arrow for back
      if ((event.metaKey || event.altKey) && event.key === 'ArrowLeft' && hasBack) {
        event.preventDefault();
        goBack();
      }
      // Cmd+Right Arrow or Alt+Right Arrow for forward
      else if ((event.metaKey || event.altKey) && event.key === 'ArrowRight' && hasForward) {
        event.preventDefault();
        goForward();
      }
    };

    // Add event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [goBack, goForward, hasBack, hasForward]);

  // Track view changes to update history
  useEffect(() => {
    if (!isNavigatingRef.current) {
      pushToHistory(currentView);
    }
  }, [currentView, pushToHistory]);

  return {
    goBack,
    goForward,
    hasBack,
    hasForward,
    historyLength: historyRef.current.length,
    currentIndex: currentIndexRef.current
  };
};