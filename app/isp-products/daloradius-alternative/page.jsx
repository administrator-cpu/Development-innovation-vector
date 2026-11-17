import Link from 'next/link';
import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import FaqList from '@/components/ui/FaqList';
import BookingButton from '@/components/booking/BookingButton';
import JsonLd from '@/components/seo/JsonLd';
import CompareTable from '@/components/isp/CompareTable';
import { ispProductsPath as base } from '@/lib/crm';
import {
  bharatRadiusChecked as checked,
  bharatRadiusCompare as compare,
  bharatRadiusComparePath as path,
  bharatRadiusSite,
  daloradiusSource,
} from '@/lib/bharatRadius';
import { siteConfig } from '@/lib/siteConfig';
import { faqLd, orgRef, pageMetadata } from '@/lib/seo';

const pillar = `${base}/bharat-radius`;

export const metadata = pageMetadata({
  title: { absolute: 'daloRADIUS Alternative for ISPs in India | Bharat Radius' },
  description:
    'Bharat Radius vs FreeRADIUS + daloRADIUS for Indian ISPs: GST billing, reseller wallets, DoT logs and support compared, and when daloRADIUS fits better.',
  ogTitle: 'daloRADIUS alternative',
  ogSub: 'Bharat Radius vs FreeRADIUS + daloRADIUS',
  path,
});

const faqs = [
  {
    q: 'Is daloRADIUS free?',
    a: 'Yes. daloRADIUS is open source under the GPLv2 licence, so the software costs nothing. You still pay for the server, and for the time it takes to install, patch, back up and extend it.',
  },
  {
    q: 'Does Bharat Radius replace FreeRADIUS?',
    a: 'No. Bharat Radius runs on FreeRADIUS. It replaces the management panel and the billing, reseller and compliance work you would otherwise build or do by hand around it.',
  },
  {
    q: 'Can I keep my MikroTik routers?',
    a: 'Yes. MikroTik RouterOS is the main NAS Bharat Radius supports, and a setup script configures PPPoE, accounting, CoA and NAT logging. You point the routers at the new RADIUS server; you do not replace them.',
  },
  {
    q: 'How do I move my subscribers from daloRADIUS?',
    a: 'Export your subscribers and plans to Excel and import them into Bharat Radius. A dry run checks every row before anything is saved. We plan the cut-over with you in the demo so subscribers stay online.',
  },
];

const H2 = ({ id, children }) => (
  <h2 id={id} className="mt-14 scroll-mt-8 text-[clamp(24px,2.6vw,34px)] leading-[1.12] font-medium tracking-[-0.035em] text-balance">
    {children}
  </h2>
);
const P = ({ children }) => <p className="mt-5 text-[16.5px] leading-[1.75] text-pretty text-[#2E2B36]">{children}</p>;
const A = ({ href, children }) => (
  <Link href={href} className="text-ink underline underline-offset-4 hover:text-rose">
    {children}
  </Link>
);
const Ext = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener" className="text-ink underline underline-offset-4 hover:text-rose">
    {children}
  </a>
);

export default function DaloradiusAlternativePage() {
  const page = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'daloRADIUS alternative for ISPs in India',
    url: `${siteConfig.url}${path}`,
    about: { '@id': `${siteConfig.url}${pillar}#software` },
    publisher: orgRef,
  };

  return (
    <InnerPage
      trail={[
        { name: 'Software for ISPs', path: base },
        { name: 'Bharat Radius', path: pillar },
        { name: 'daloRADIUS alternative', path },
      ]}
      current="/#platform"
    >
      <JsonLd data={[page, faqLd(faqs)]} />
      <PageHero
        eyebrow="Comparison"
        title="A daloRADIUS alternative"
        accent="built for Indian ISPs."
        lead="Bharat Radius and daloRADIUS both sit on FreeRADIUS. This page sets out what each one gives you, what each one costs in time and money, and when daloRADIUS is still the right choice."
      >
        <BookingButton tone="dark" source="isp-compare:daloradius">
          Book a free demo
        </BookingButton>
      </PageHero>

      <section className="mx-auto max-w-[1320px] px-5 pt-6 sm:px-10">
        <CompareTable compare={compare} caption="Bharat Radius compared with FreeRADIUS plus daloRADIUS and with Excel billing" />
        <p className="mt-4 text-[13px] leading-[1.6] text-muted">
          daloRADIUS column from <Ext href={daloradiusSource.url}>{daloradiusSource.label}</Ext>; Bharat Radius column from{' '}
          <Ext href={bharatRadiusSite}>bharatradius.com</Ext>. Both checked {checked}. “Not in its feature list” means the
          project does not list it; it may be possible with custom code.
        </p>
      </section>

      <article className="mx-auto max-w-[760px] px-5 sm:px-10">
        <H2 id="short-answer">The short answer</H2>
        <P>
          <strong>
            If you have a Linux engineer on staff and only need RADIUS authentication with simple plans, daloRADIUS is free and does
            the job. If you need GST invoices, reseller and LCO wallets, online payments and a DoT log archive, and you would rather
            not run the server yourself, Bharat Radius covers those out of the box.
          </strong>
        </P>

        <H2 id="what-is-daloradius">What daloRADIUS is</H2>
        <P>
          daloRADIUS is an open-source web panel for FreeRADIUS, written in PHP. It reads and writes the same database FreeRADIUS
          uses, and gives you user management, accounting reports, graphs, a billing engine with plans and rates, PayPal
          transactions and a portal where users can see their own records. The project describes itself as built for hotspots and
          general-purpose ISP deployments, and has been developed since the late 2000s.
        </P>
        <P>
          Because it is self-hosted, everything around the panel is your job: the Linux server, PHP and database updates,
          backups, security patches, and any feature that is not already in the project.
        </P>

        <H2 id="where-isps-get-stuck">Where Indian ISPs usually get stuck</H2>
        <P>
          <strong>GST.</strong> daloRADIUS invoices are general-purpose. Invoices numbered per financial year, CGST + SGST or IGST
          by the customer’s state, and a GSTR-1 export are not in its feature list, so many operators end up billing in Excel or
          a separate accounting tool alongside it.
        </P>
        <P>
          <strong>Resellers and LCOs.</strong> Local cable operators and franchise partners need their own login, a prepaid
          wallet, their own plan rates, and no view of anyone else’s subscribers. That is custom work on daloRADIUS.
        </P>
        <P>
          <strong>Payments.</strong> daloRADIUS records PayPal transactions. Indian subscribers pay by UPI and cards through
          gateways such as Razorpay and Cashfree, which need their own integration.
        </P>
        <P>
          <strong>Compliance logs.</strong> ISPs are expected to keep session and NAT records for long periods. On a self-hosted
          stack you design the archive, the retention and the tamper-evidence yourself.
        </P>
        <P>
          <strong>Who fixes it at 2 a.m.</strong> With an open-source panel, support is the community forum or whoever on your
          team set it up.
        </P>

        <H2 id="what-bharat-radius-adds">What Bharat Radius adds on the same FreeRADIUS core</H2>
        <P>
          <A href={pillar}>Bharat Radius</A> keeps FreeRADIUS as the RADIUS server, so authentication works the way your network
          already expects. Around it, DIV has built GST invoicing with GSTR-1 export, Razorpay and Cashfree payment links, prepaid
          wallets and rates for every reseller and LCO, live plan changes through CoA, a customer self-care portal with support
          tickets, and an archive of session and NAT logs on Indian servers, sealed each day with SHA-256.
        </P>
        <P>
          DIV hosts it in India and handles updates and support, and it has been tested with more than 100,000 subscribers on one
          4-vCPU server. The trade-off is cost: it is a paid product, priced by subscriber count.
        </P>

        <H2 id="when-daloradius">When daloRADIUS is the better choice</H2>
        <P>
          Choose daloRADIUS if your network is small, your billing is simple or already handled elsewhere, you do not work with
          resellers, and you have someone who is comfortable maintaining a Linux, PHP and database stack. You will have full
          control of the code and no licence fee.
        </P>

        <H2 id="switching">Switching from daloRADIUS</H2>
        <P>
          You do not need to change your routers. Export subscribers and plans to Excel, import them into Bharat Radius (a dry run
          checks every row first), run the MikroTik setup script, and move subscribers across in batches. We plan the cut-over
          with you in a 30-minute demo. New to RADIUS? Start with{' '}
          <A href="/blog/what-is-a-radius-server">what a RADIUS server does for an ISP</A>.
        </P>
      </article>

      <FaqList items={faqs} title="Questions" accent="before you switch" />

      <CtaBand source="isp-compare:daloradius" title="See Bharat Radius on your network." accent="Book a 30-minute demo." />
    </InnerPage>
  );
}
