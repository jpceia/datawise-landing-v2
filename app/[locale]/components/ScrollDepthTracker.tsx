'use client';

import {useMultipleScrollDepths} from '@/lib/hooks/useScrollTracking';

export default function ScrollDepthTracker() {
  useMultipleScrollDepths([25, 50, 75]);
  return null;
}
