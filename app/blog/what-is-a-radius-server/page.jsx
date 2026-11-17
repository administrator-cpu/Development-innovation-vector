import Link from 'next/link';
import InnerPage from '@/components/layout/InnerPage';
import CtaBand from '@/components/ui/CtaBand';
import Eyebrow from '@/components/ui/Eyebrow';
import JsonLd from '@/components/seo/JsonLd';
import { blogPosts, ispProductsPath } from '@/lib/crm';
import { bharatRadiusComparePath } from '@/lib/bharatRadius';
import { siteConfig } from '@/lib/siteConfig';
import { faqLd, orgRef, pageMetadata } from '@/lib/seo';

const post = blogPosts.find((p) => p.slug === 'what-is-a-radius-server');
const path = `/blog/${post.slug}`;
const pillar = `${ispProductsPath}/bharat-radius`;

export const metadata = pageMetadata({
  title: { absolute: `What Is a RADIUS Server? A Guide for ISPs | ${siteConfig.name}` },
  description: post.metaDescription,
  ogTitle: 'What is a RADIUS server?',
  ogSub: 'A plain-English guide for ISPs',
  path,
  type: 'article',
});

const fmt = (d) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
const H2 = ({ id, children }) => (
  <h2 id={id} className="mt-14 scroll-mt-8 text-[clamp(24px,2.6vw,34px)] leading-[1.12] font-medium tracking-[-0.035em] text-balance">
    {children}
  </h2>
);
const H3 = ({ children }) => <h3 className="mt-8 text-[clamp(18px,1.7vw,22px)] leading-[1.2] font-medium tracking-[-0.025em]">{children}</h3>;
const P = ({ children }) => <p className="mt-5 text-[16.5px] leading-[1.75] text-pretty text-[#2E2B36]">{children}</p>;
const A = ({ href, children }) => (
  <Link href={href} className="text-ink underline underline-offset-4 hover:text-rose">
    {children}
  </Link>
);

const toc = [
  ['short-answer', 'The short answer'],
  ['aaa', 'Authentication, authorisation, accounting'],
  ['pppoe-flow', 'What happens when a subscriber connects'],
  ['why-isps', 'Why an ISP needs one'],
  ['coa', 'Changing a plan without a reconnect'],
  ['choosing', 'What to look for in RADIUS software'],
];

const faqs = [
  {
    q: 'What is a RADIUS server?',
    a: 'A RADIUS server is the system that decides whether a user may connect to a network, what they are allowed to do once connected, and how much they used. For an ISP it checks every PPPoE login, applies the subscriber’s speed and plan, and records each session for billing and logs.',
  },
  {
    q: 'Which ports does RADIUS use?',
    a: 'By standard, RADIUS authentication uses UDP port 1812 and accounting uses UDP port 1813. Change of Authorization and Disconnect messages use UDP port 3799. Some older equipment still uses 1645 and 1646.',
  },
  {
    q: 'Is FreeRADIUS enough on its own?',
    a: 'FreeRADIUS is a reliable RADIUS server, but it has no billing, reseller management or customer portal. ISPs add a panel on top, such as daloRADIUS or a commercial product like Bharat Radius, or build those parts themselves.',
  },
];

export default function RadiusServerPost() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.published,
    dateModified: post.updated,
    author: orgRef,
    publisher: orgRef,
    mainEntityOfPage: `${siteConfig.url}${path}`,
    image: `${siteConfig.url}/og?title=${encodeURIComponent('What is a RADIUS server?')}`,
  };

  return (
    <InnerPage
      trail={[
        { name: 'Blog', path: '/blog' },
        { name: 'What is a RADIUS server', path },
      ]}
    >
      <JsonLd data={[article, faqLd(faqs)]} />
      <article className="mx-auto max-w-[760px] px-5 pt-10 sm:px-10 sm:pt-16">
        <Eyebrow>ISP software</Eyebrow>
        <h1 className="mt-6 text-[clamp(34px,5vw,64px)] leading-[1.02] font-medium tracking-[-0.045em] text-balance">{post.h1}</h1>
        <p className="mt-5 font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
          By the {siteConfig.name} engineering team · Published <time dateTime={post.published}>{fmt(post.published)}</time>
          {post.updated !== post.published ? <> · Updated <time dateTime={post.updated}>{fmt(post.updated)}</time></> : null}
        </p>

        <P>
          <strong>
            A RADIUS server is the system that decides who may connect to your network, what speed and plan they get, and how much
            they used. Every time a broadband subscriber’s router logs in over PPPoE, your access router asks the RADIUS server
            whether to let them in. Without one, plans, data caps, billing and session logs all have to be managed by hand on each
            router.
          </strong>
        </P>

        <nav aria-label="On this page" className="mt-10 rounded-[18px] border border-line bg-white p-6">
          <span className="font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase">On this page</span>
          <ol className="m-0 mt-3 flex list-decimal flex-col gap-1.5 pl-5 text-[15px]">
            {toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="text-ink underline-offset-4 hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <H2 id="short-answer">The short answer</H2>
        <P>
          RADIUS stands for Remote Authentication Dial-In User Service. It is an open standard (RFC 2865 for authentication, RFC
          2866 for accounting) that almost every access router supports, including MikroTik, Cisco and Juniper. Your routers do
          the switching; the RADIUS server holds the rules. That split is what lets a small ISP run hundreds or thousands of
          subscribers from one place.
        </P>

        <H2 id="aaa">Authentication, authorisation, accounting</H2>
        <P>RADIUS does three jobs, usually called AAA.</P>
        <H3>Authentication: is this a real subscriber?</H3>
        <P>
          The router sends the subscriber’s username and password to the RADIUS server. The server checks them against its
          database and answers yes or no. It can also check that the login comes from the right device, for example by locking
          the account to one MAC address so a password cannot be shared.
        </P>
        <H3>Authorisation: what are they allowed?</H3>
        <P>
          If the answer is yes, the server sends back the subscriber’s settings: the speed limit for their plan, a static IP or
          an address from a pool, and how long the session may last. The router enforces them.
        </P>
        <H3>Accounting: what did they use?</H3>
        <P>
          While the subscriber is online, the router reports to the RADIUS server when the session started, how much data went
          up and down, and when it ended. Those records drive data caps, fair usage policy (FUP), usage-based billing and the
          session logs regulators ask for.
        </P>

        <H2 id="pppoe-flow">What happens when a subscriber connects</H2>
        <P>On a typical PPPoE broadband network, a login takes well under a second and goes like this:</P>
        <ol className="mt-5 flex list-decimal flex-col gap-3 pl-6 text-[16.5px] leading-[1.7] text-[#2E2B36]">
          <li>The customer’s ONU or Wi-Fi router dials a PPPoE session to your access router (the NAS), such as a MikroTik.</li>
          <li>The NAS sends an Access-Request to the RADIUS server on UDP port 1812, protected by a shared secret.</li>
          <li>The RADIUS server checks the username, password, account status and validity.</li>
          <li>It replies with Access-Accept and the plan’s attributes (speed, IP address), or Access-Reject.</li>
          <li>The NAS brings the session up and sends an Accounting-Start on port 1813, then interim updates and an Accounting-Stop when the session ends.</li>
        </ol>

        <H2 id="why-isps">Why an ISP needs one</H2>
        <P>
          <strong>One place for every subscriber.</strong> Without RADIUS, each PPPoE account lives on a router. Add a second
          router and you are keeping two lists in step. With RADIUS, every router asks the same server.
        </P>
        <P>
          <strong>Plans that enforce themselves.</strong> When a prepaid plan expires, the next login is refused. When a
          subscriber upgrades, the new speed applies from the next session, or at once with CoA (below).
        </P>
        <P>
          <strong>Usage you can bill and cap.</strong> Accounting records are the raw data for data caps, FUP speeds and usage
          reports. No accounting, no FUP.
        </P>
        <P>
          <strong>Records you are required to keep.</strong> ISPs in India are expected to keep records of subscriber sessions,
          including which IP address a subscriber had and when. RADIUS accounting, together with NAT logs from your routers, is
          where those records come from. Check the exact retention period your licence requires with your adviser.
        </P>
        <P>
          <strong>Resellers and LCOs.</strong> Once subscribers live in one database, you can let each partner manage only their
          own, with their own rates.
        </P>

        <H2 id="coa">Changing a plan without a reconnect</H2>
        <P>
          RFC 5176 added two messages that the RADIUS side can send to the router: Change of Authorization (CoA), which changes a
          live session (for example, dropping to the post-FUP speed or applying an upgrade), and Disconnect, which ends it. Both
          use UDP port 3799. CoA is what lets a subscriber pay for a top-up and get the new speed straight away, without
          rebooting their router.
        </P>

        <H2 id="choosing">What to look for in RADIUS software</H2>
        <P>
          FreeRADIUS, the open-source server most ISPs use, is excellent at the protocol itself. What it does not include is
          everything an ISP runs around it. When you compare options, check for:
        </P>
        <ul className="mt-5 flex list-disc flex-col gap-2 pl-6 text-[16.5px] leading-[1.7] text-[#2E2B36]">
          <li>Support for your NAS hardware, with a tested setup for PPPoE, accounting and CoA</li>
          <li>Plans with speed, validity, data caps and post-FUP speed, for prepaid and postpaid subscribers</li>
          <li>GST invoices and online payment links your subscribers can actually use</li>
          <li>Reseller and LCO logins with their own wallets and rates</li>
          <li>A session and NAT log archive kept in India, with tamper-evidence</li>
          <li>A self-care portal so subscribers can see bills and usage without calling you</li>
          <li>Who hosts it, who patches it, and who answers when it fails</li>
        </ul>
        <P>
          Open-source panels such as daloRADIUS cover part of this list for free if you can host and extend them yourself; our{' '}
          <A href={bharatRadiusComparePath}>daloRADIUS comparison</A> sets out where each fits. DIV’s own product,{' '}
          <A href={pillar}>Bharat Radius</A>, runs on FreeRADIUS and covers the full list, hosted in India. See all of our{' '}
          <A href={ispProductsPath}>software for ISPs</A>.
        </P>

        <section aria-labelledby="faq" className="mt-14">
          <h2 id="faq" className="text-[clamp(24px,2.6vw,34px)] leading-[1.12] font-medium tracking-[-0.035em]">Quick answers</h2>
          {faqs.map((f) => (
            <div key={f.q}>
              <H3>{f.q}</H3>
              <P>{f.a}</P>
            </div>
          ))}
        </section>
      </article>
      <CtaBand source="blog:radius-server" title="Running RADIUS for an ISP?" accent="See Bharat Radius in 30 minutes." />
    </InnerPage>
  );
}
