import Link from 'next/link';
import InnerPage from '@/components/layout/InnerPage';
import CtaBand from '@/components/ui/CtaBand';
import Eyebrow from '@/components/ui/Eyebrow';
import JsonLd from '@/components/seo/JsonLd';
import { blogPosts, connectCrm, crmHub, crmPricing } from '@/lib/crm';
import { plans } from '@/lib/content';
import { siteConfig } from '@/lib/siteConfig';
import { orgRef, pageMetadata } from '@/lib/seo';

const post = blogPosts.find((p) => p.slug === 'custom-crm-development-cost-india');
const path = `/blog/${post.slug}`;

export const metadata = pageMetadata({
  title: { absolute: `${post.title} | ${siteConfig.name}` },
  description: post.metaDescription,
  ogTitle: 'What custom CRM development costs in India',
  ogSub: 'Real figures in rupees',
  path,
  type: 'article',
});

const fmt = (d) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
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

const toc = [
  ['short-answer', 'The short answer'],
  ['what-drives-cost', 'What drives the cost'],
  ['our-prices', 'What a CRM costs with DIV'],
  ['running-costs', 'Running costs people forget'],
  ['keep-it-down', 'How to keep the cost down'],
];

export default function CrmCostPost() {
  const platform = plans.find((p) => p.tier === 'Platform');
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
    image: `${siteConfig.url}/og?title=${encodeURIComponent('What custom CRM development costs in India')}`,
  };

  return (
    <InnerPage
      trail={[
        { name: 'Blog', path: '/blog' },
        { name: 'CRM development cost', path },
      ]}
    >
      <JsonLd data={article} />
      <article className="mx-auto max-w-[760px] px-5 pt-10 sm:px-10 sm:pt-16">
        <Eyebrow>CRM costs</Eyebrow>
        <h1 className="mt-6 text-[clamp(34px,5vw,64px)] leading-[1.02] font-medium tracking-[-0.045em] text-balance">{post.h1}</h1>
        <p className="mt-5 font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
          By the {siteConfig.name} engineering team · Published <time dateTime={post.published}>{fmt(post.published)}</time>
          {post.updated !== post.published ? <> · Updated <time dateTime={post.updated}>{fmt(post.updated)}</time></> : null}
        </p>

        <P>
          <strong>
            A custom CRM in India can cost anything from a few thousand rupees to several lakh, depending on how many workflows,
            users and integrations it has. With DIV, a CRM built on Connect CRM costs from ₹9,999 to develop, then ₹2,499 a
            month for hosting and maintenance for up to 1,000 connections, plus GST.
          </strong>{' '}
          The rest of this article explains what moves the price and what to ask for in a quote.
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
          Price follows scope. A CRM that runs one process for one team, such as leads to orders, is a small project. A CRM that
          joins sales, billing, field work and support on one customer record is a much larger one. Before comparing quotes, write
          down which process you need first. It is the single biggest factor in what you pay.
        </P>

        <H2 id="what-drives-cost">What drives the cost</H2>
        <P>
          <strong>Number of workflows.</strong> Each stage, approval and hand-off has to be modelled, built and tested. Starting
          with the process that hurts most keeps the first bill small.
        </P>
        <P>
          <strong>Starting point.</strong> Building on an existing product is cheaper than starting from a blank page. That is
          why we build ISP CRMs on <A href={connectCrm.path}>Connect CRM</A> rather than from zero.
        </P>
        <P>
          <strong>Data migration.</strong> Cleaning and importing years of spreadsheets takes real time, especially if records
          are duplicated or inconsistent. Ask whether migration is included in the quote.
        </P>
        <P>
          <strong>Integrations.</strong> Every connection to accounting, network or messaging tools adds build and testing work,
          and more to maintain later.
        </P>
        <P>
          <strong>Documents and reports.</strong> Generated documents and custom dashboards are worth having, but each template
          and report is work to set up.
        </P>
        <P>
          <strong>Hosting, support and changes.</strong> Development is a one-time cost; running the CRM is not. A quote that
          leaves out hosting, backups and support is not the real price.
        </P>

        <H2 id="our-prices">What a CRM costs with DIV</H2>
        <P>These are our figures as of {crmPricing.checked}, before GST:</P>
        <div className="mt-6 overflow-x-auto rounded-[18px] border border-line bg-white">
          <table className="w-full border-collapse text-left text-[15px]">
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="px-5 py-3 font-mono text-[10.5px] font-normal tracking-[0.12em] text-muted uppercase">Item</th>
                <th scope="col" className="px-5 py-3 font-mono text-[10.5px] font-normal tracking-[0.12em] text-muted uppercase">Cost</th>
              </tr>
            </thead>
            <tbody>
              {crmPricing.lines.map((l) => (
                <tr key={l.label} className="border-b border-line last:border-0">
                  <th scope="row" className="px-5 py-4 font-medium">{l.label}</th>
                  <td className="px-5 py-4">{l.value} {l.unit}</td>
                </tr>
              ))}
              {platform ? (
                <tr>
                  <th scope="row" className="px-5 py-4 font-medium">Multi-team CRM (CRM, billing and support on one record)</th>
                  <td className="px-5 py-4">From {platform.from} setup</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
        <P>
          Connect CRM is a custom service, so every setup is quoted after a demo. The full breakdown is on the{' '}
          <A href={crmPricing.path}>Connect CRM pricing page</A>.
        </P>

        <H2 id="running-costs">Running costs people forget</H2>
        <P>
          A CRM keeps costing money after launch: servers, backups, security updates, and the small changes every business asks for
          once people start using it. Ask every vendor three questions. What does hosting cost each month, and up to what volume?
          What does a change cost after launch? Who answers when it breaks? With us, hosting and maintenance is ₹2,499 a month for
          up to 1,000 connections, and changes are quoted at ₹1,000–₹5,000 each before work starts.
        </P>

        <H2 id="keep-it-down">How to keep the cost down</H2>
        <P>
          Start with one process and add the rest once the first one is in daily use. Clean your spreadsheets before migration.
          Choose a team that will run the CRM as well as build it, so you are not paying a second vendor to learn the system. And
          get every quote in writing, with hosting and changes included.
        </P>
        <P>
          Want a figure for your business? See our <A href={crmHub.path}>custom CRM development services in Delhi NCR</A>, or book
          a demo below.
        </P>
      </article>
      <CtaBand source="blog:crm-cost" title="Get a written CRM quote." accent="Book a 30-minute call." />
    </InnerPage>
  );
}
