# pohrajia

A lightweight performance-focused starter for identifying and prioritizing fast wins.

## Top 10 performance improvements

1. Memoize repeated expensive computations.
2. Defer non-critical JavaScript until after the main content is interactive.
3. Compress and cache static assets with aggressive HTTP caching.
4. Virtualize or paginate large lists instead of rendering every row at once.
5. Debounce or throttle high-frequency input handlers such as resize and scroll listeners.
6. Batch DOM reads and writes to avoid layout thrashing.
7. Lazy-load images, videos, and heavy UI sections below the fold.
8. Avoid creating unnecessary objects and functions inside render loops.
9. Reduce network payload size by trimming unused fields and compressing responses.
10. Prefer stable data structures and indexed lookups over repeated O(n) scans.

## Highest-impact, lowest-effort improvement selected for this PR

The biggest low-effort win is memoization: when the same expensive calculation is requested repeatedly, cache it and return the previous result instead of recomputing work.

This repository includes a small reusable helper in `src/performance.js` and a test in `test/performance.test.js` that demonstrates the pattern.

## Implementation

```js
import { memoize } from './src/performance.js';

const expensiveLookup = memoize((userId) => {
  // slow DB or API call
  return { id: userId, role: 'editor' };
});
```

This keeps repeated lookups fast while preserving correctness for identical inputs.
