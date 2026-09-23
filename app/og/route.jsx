import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const DEFAULT_TITLE = 'Managed software development in India';
const DEFAULT_SUB = 'We build your software, then we run it — for years.';

export function GET(request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get('title') || DEFAULT_TITLE).slice(0, 110);
  const sub = (searchParams.get('sub') || DEFAULT_SUB).slice(0, 140);
  const big = title.length <= 48;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#FBFAF8',
          color: '#16151A',
          padding: '72px 80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', fontSize: 44, letterSpacing: '-0.03em' }}>DIV</div>
          <div style={{ display: 'flex', fontSize: 22, letterSpacing: '0.14em', color: '#6B6577' }}>THEDIV.IN</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: big ? 78 : 60, lineHeight: 1.04, letterSpacing: '-0.04em', maxWidth: 1020 }}>
            {title}
          </div>
          <div style={{ display: 'flex', marginTop: 28, fontSize: 30, lineHeight: 1.35, color: '#6B6577', maxWidth: 960 }}>
            {sub}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              height: 6,
              borderRadius: 3,
              backgroundImage: 'linear-gradient(90deg, #FF0B55 0%, #FF7A5C 46%, #FFB03B 100%)',
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 22, fontSize: 22, color: '#6B6577' }}>
            <span>Managed software development · Noida, India</span>
            <span>99.9% uptime SLA</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: { 'Cache-Control': 'public, max-age=86400, s-maxage=31536000, stale-while-revalidate=86400' },
    },
  );
}
