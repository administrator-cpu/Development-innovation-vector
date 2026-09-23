// In-memory sliding window. Fine for one region; use Upstash/Vercel KV at scale.
const buckets = new Map();

export function rateLimited(key, { limit = 5, windowMs = 60 * 60 * 1000 } = {}) {
  const now = Date.now();
  const hits = (buckets.get(key) || []).filter((t) => now - t < windowMs);
  hits.push(now);
  buckets.set(key, hits);
  return hits.length > limit;
}

export function clientIp(request) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';
}
