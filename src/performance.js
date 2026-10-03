export function memoize(fn, options = {}) {
  const cache = options.cache ?? new Map();
  const resolver = options.resolver ?? ((...args) => JSON.stringify(args));

  return (...args) => {
    const key = resolver(...args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const value = fn(...args);
    cache.set(key, value);
    return value;
  };
}
