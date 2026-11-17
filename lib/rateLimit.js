// In-memory sliding window. Fine for one region; use Upstash/Vercel KV at scale.
const buckets = new Map();

export function rateLimited(key, { limit = 5, windowMs = 60 * 60 * 1000 } = {}) {
  const now = Date.now();
  const hits = (buckets.get(key) || []).filter((t) => now - t < windowMs);
  hits.push(now);
  buckets.set(key, hits);
  return hits.length > limit;
}

// Vercel sets x-real-ip to the connecting client and visitors can't override it. The first
// x-forwarded-for entry is whatever the visitor sent, so trusting it lets a bot rotate fake IPs
// past the limit (on any host that doesn't overwrite the header). Fall back to the last hop.
export function clientIp(request) {
  const real = request.headers.get('x-real-ip')?.trim();
  if (real) return real;
  const hops = (request.headers.get('x-forwarded-for') || '').split(',').map((s) => s.trim()).filter(Boolean);
  return hops[hops.length - 1] || 'local';
}
