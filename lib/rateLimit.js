// In-memory sliding window. Fine for one region; use Upstash/Vercel KV at scale.
const buckets = new Map();
let lastSweep = 0;

export function rateLimited(key, { limit = 5, windowMs = 60 * 60 * 1000 } = {}) {
  const now = Date.now();
  // Drop idle keys now and then, so one-off visitors do not accumulate for the life of the instance.
  if (now - lastSweep > windowMs) {
    for (const [k, v] of buckets) if (!v.length || now - v[v.length - 1] >= windowMs) buckets.delete(k);
    lastSweep = now;
  }
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
