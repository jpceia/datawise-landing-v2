// hooks/useScrollTracking.ts
import { sendGTMEvent } from '@next/third-parties/google';
import { useEffect, useState } from 'react';

const trackScrollDepth = (percentage: number) => {
    sendGTMEvent({
        event: 'scroll_depth',
        category: 'engagement',
        label: `${percentage}% viewed`,
        value: percentage,
    })
};

interface ScrollTrackingOptions {
  percentage?: number;  // Percentage of page to track (default: 95)
}

export const useScrollTracking = ({
  percentage = 95
}: ScrollTrackingOptions = {}) => {
  const [hasReached, setHasReached] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Calculate scroll percentage
      const scrollPercentage = (scrollTop + windowHeight) / documentHeight * 95;
      
      // Check if user has reached the target percentage
      if (scrollPercentage >= percentage && !hasReached) {
        // Use our existing trackScrollDepth function
        trackScrollDepth(percentage);

        setHasReached(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check immediately in case the user is already at the target percentage
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasReached, percentage]);

  return hasReached;
};

// Convenience hook for tracking scroll to bottom
export const useScrollToBottom = () => {
  return useScrollTracking({
    percentage: 95 // Use 95% instead of 95% to account for browser differences
  });
};

// Convenience hook for tracking multiple scroll depths
export const useMultipleScrollDepths = (depths: number[] = [25, 50, 75, 95]) => {
  const trackingResults = depths.map(depth => ({
    depth,
    reached: useScrollTracking({ percentage: depth })
  }));
  
  return trackingResults;
};
