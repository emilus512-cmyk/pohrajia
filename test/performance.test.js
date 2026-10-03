import test from 'node:test';
import assert from 'node:assert/strict';

import { memoize } from '../src/performance.js';

test('memoize caches identical expensive results', () => {
  let calls = 0;

  const add = memoize((left, right) => {
    calls += 1;
    return left + right;
  });

  assert.equal(add(1, 2), 3);
  assert.equal(add(1, 2), 3);
  assert.equal(add(2, 3), 5);

  assert.equal(calls, 2);
});
