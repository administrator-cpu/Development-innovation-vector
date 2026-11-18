import Link from 'next/link';
import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import FaqList from '@/components/ui/FaqList';
import BookingButton from '@/components/booking/BookingButton';
import PillButton from '@/components/ui/PillButton';
import JsonLd from '@/components/seo/JsonLd';
import CompareTable from '@/components/isp/CompareTable';
import { connectCrm, crmPricing } from '@/lib/crm';
import { siteConfig } from '@/lib/siteConfig';
import { faqLd, orgRef, pageMetadata } from '@/lib/seo';

const path = '/compare/zoho-crm-vs-connect-crm';
const checked = '19 November 2026';

// Zoho facts. Free edition (3 users): zoho.com/crm/zohocrm-pricing.html, checked 19 Nov 2026.
// INR edition prices: Zoho's India pricing page renders prices with JavaScript, so these were
// taken from several reports of that page (Oct–Nov 2026). VERIFY on
// https://www.zoho.com/in/crm/zohocrm-pricing.html before each deploy, and update `checked`.
const zoho = {
  pricingUrl: 'https://www.zoho.com/in/crm/zohocrm-pricing.html',
  free: 'Free edition for up to 3 users',
  paid: '₹800 to ₹2,600 per user a month, billed yearly (Standard to Ultimate), GST extra',
  professional: 1400,
};

const compare = {
  columns: ['Connect CRM', 'Zoho CRM'],
  rows: [
    ['Built for', 'ISPs and telecom resellers: the connection, from approval to disconnection', 'Any business: leads, contacts, deals and accounts'],
    ['How it is priced', `${crmPricing.lines[0].value} development, then ${crmPricing.lines[1].value} a month up to 1,000 connections`, 'Per user, per month'],
    ['Free plan or trial', 'No. A 30-minute demo on a live system', `Yes. ${zoho.free}, plus free trials`],
    ['Who sets it up', 'DIV builds it to your process', 'You, or a Zoho partner you hire'],
    ['Connection pipeline (approval → active → notice → disconnected)', 'Built in', 'Configure it yourself'],
    ['Customer and carrier MRC on each link', 'Built in', 'Custom fields'],
    ['CAF, PO and Charge Deviation Form PDFs', 'Built in', 'Templates you build'],
    ['Lead and deal management', 'Not today', 'Core feature'],
    ['Email marketing, web forms, sales automation', 'No', 'Yes, across editions'],
    ['App marketplace and other apps', 'Separate DIV products (Bharat Radius, TR-069, Samadhan)', 'Large marketplace, plus Zoho Books, Desk and others'],
    ['Changes after launch', `Quoted by DIV, ${crmPricing.lines[2].value} each`, 'Self-serve, in settings'],
    ['Support', 'The engineers who built it, under DIV’s SLA', 'Zoho support plans and partners'],
  ],
};

const faqs = [
  {
    q: 'Is Connect CRM a Zoho alternative for ISPs?',
    a: 'For the connection side of an ISP or telecom reseller, yes: approval, provisioning, active billing, notice and disconnection come built in, with carrier cost and order paperwork on each link. For leads, marketing and a large app ecosystem, Zoho CRM is the stronger product.',
  },
  {
    q: 'Which is cheaper?',
    a: `It depends on team size. Zoho CRM is priced per user, so cost grows with your team. Connect CRM is priced by connections: ${crmPricing.lines[0].value} to build, then ${crmPricing.lines[1].value} a month for up to 1,000 connections, however many staff use it. Add GST to both.`,
  },
  {
    q: 'Can we use both?',
    a: 'Yes. Some teams keep leads and marketing in a general CRM and run live connections in Connect CRM. We do not offer a ready Zoho integration today; ask in the demo if you need one.',
  },
  {
    q: 'Is there a free trial of Connect CRM?',
    a: 'No. You get a 30-minute demo with an engineer on a live Connect CRM with sample data, and a written quote.',
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

export const metadata = pageMetadata({
  title: { absolute: `Zoho CRM vs Connect CRM for ISPs | ${siteConfig.name}` },
  description:
    'Zoho CRM vs Connect CRM for ISPs and telecom resellers in India: pricing, setup, features and support compared honestly, including where Zoho is stronger.',
  ogTitle: 'Zoho CRM vs Connect CRM',
  ogSub: 'An honest comparison for ISPs',
  path,
});

export default function ZohoComparePage() {
  const inr = (n) => `₹${n.toLocaleString('en-IN')}`;
  const team = 10;
  const zohoMonthly = team * zoho.professional;

  return (
    <InnerPage
      trail={[
        { name: 'Connect CRM', path: connectCrm.path },
        { name: 'Zoho CRM vs Connect CRM', path },
      ]}
      current="/#platform"
    >
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Zoho CRM vs Connect CRM for ISPs',
            url: `${siteConfig.url}${path}`,
            about: { '@id': `${siteConfig.url}${connectCrm.path}#software` },
            publisher: orgRef,
          },
          faqLd(faqs),
        ]}
      />
      <PageHero
        eyebrow="Comparison"
        title="Zoho CRM vs Connect CRM"
        accent="for ISPs and telecom resellers."
        lead="Zoho CRM is a general-purpose CRM used by businesses of every kind. Connect CRM is built by DIV around one job: running an ISP’s customer connections. Here is where each one fits, including where Zoho is the better choice."
      >
        <BookingButton tone="dark" source="compare:zoho">
          Book a free demo
        </BookingButton>
        <PillButton href={crmPricing.path}>Connect CRM pricing</PillButton>
      </PageHero>

      <section className="mx-auto max-w-[1320px] px-5 pt-6 sm:px-10">
        <CompareTable compare={compare} caption="Connect CRM compared with Zoho CRM" />
        <p className="mt-4 text-[13px] leading-[1.6] text-muted">
          Zoho details from{' '}
          <a href={zoho.pricingUrl} target="_blank" rel="noopener" className="text-ink underline underline-offset-4">
            Zoho CRM’s pricing page
          </a>
          ; Connect CRM details from DIV. Both checked {checked}. Prices change; check Zoho’s page for current figures.
        </p>
      </section>

      <article className="mx-auto max-w-[760px] px-5 sm:px-10">
        <H2 id="short-answer">The short answer</H2>
        <P>
          <strong>
            Choose Zoho CRM if most of your work is finding and closing new customers, you want to set it up yourself, and you
            want marketing, forms and an app marketplace. Choose Connect CRM if your pain is the links you already sell: approvals,
            provisioning, carrier costs, order paperwork, notice periods and rate changes.
          </strong>
        </P>

        <H2 id="where-zoho-is-stronger">Where Zoho CRM is stronger</H2>
        <P>
          Zoho CRM is a mature product with a {zoho.free.toLowerCase()} and free trials of its paid editions, so you can start the
          same day without talking to anyone. Lead and deal management, web forms, email marketing and sales automation are core
          features. It connects to the rest of Zoho’s apps, such as Zoho Books for GST invoicing, and to a large marketplace of
          third-party apps. Admins can change fields, layouts and workflows themselves.
        </P>
        <P>Connect CRM has none of that breadth. It has no lead module today, no free trial, and changes go through DIV.</P>

        <H2 id="where-connect-crm-is-stronger">Where Connect CRM is stronger</H2>
        <P>
          Zoho can be shaped into an ISP system, but someone has to design it. Connect CRM starts there. Each link moves through
          commercial approval, order approval, implementation, active, notice period and disconnected. It carries its service type,
          bandwidth, IPs, upstream carrier, and both the customer’s and the carrier’s MRC. Upgrades, downgrades, shifts and extra
          IPs are raised from the link, and the CAF, purchase order and Charge Deviation Form are generated as PDFs from the record.
        </P>
        <P>
          Dates act on their own. The salesperson who booked a link is emailed every day for the last five days of its notice
          period, the link disconnects on its final date, and scheduled rate revisions apply on their effective date. See{' '}
          <A href={`${connectCrm.path}/automated-follow-up-reminders`}>exactly what is automated</A>.
        </P>

        <H2 id="cost">What it costs for a 10-person team</H2>
        <P>
          On Zoho CRM Professional at about {inr(zoho.professional)} per user a month billed yearly, {team} users come to about{' '}
          {inr(zohoMonthly)} a month, plus any partner fees to set it up for ISP work. Connect CRM costs{' '}
          {crmPricing.lines[0].value} to build and {crmPricing.lines[1].value} a month for up to 1,000 connections, whatever the
          number of users. GST is extra on both. This is an illustration, not a quote; the exact Connect CRM figure comes in
          writing after a demo.
        </P>

        <H2 id="hosting">Hosting and data</H2>
        <P>
          Zoho runs data centres in several regions, including India; check your account’s region with Zoho. Connect CRM is hosted
          and run by DIV; ask us in the demo where your data and documents will be stored, and we will put it in writing.
        </P>
      </article>

      <FaqList items={faqs} title="Questions" accent="before you choose" />
      <CtaBand source="compare:zoho" title="See Connect CRM on your links." accent="Book a 30-minute demo." />
    </InnerPage>
  );
}
