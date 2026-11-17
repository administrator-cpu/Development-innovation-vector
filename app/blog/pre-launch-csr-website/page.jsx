import Image from 'next/image';
import Link from 'next/link';
import InnerPage from '@/components/layout/InnerPage';
import CtaBand from '@/components/ui/CtaBand';
import Eyebrow from '@/components/ui/Eyebrow';
import JsonLd from '@/components/seo/JsonLd';
import { blogPosts } from '@/lib/crm';
import { getCaseStudy } from '@/lib/caseStudies';
import { siteConfig } from '@/lib/siteConfig';
import { orgRef, pageMetadata } from '@/lib/seo';

const post = blogPosts.find((p) => p.slug === 'pre-launch-csr-website');
const study = getCaseStudy('samridhi');
const path = `/blog/${post.slug}`;

export const metadata = pageMetadata({
  title: { absolute: `${post.title} | ${siteConfig.name}` },
  description: post.metaDescription,
  ogTitle: 'Building a website for a CSR programme before it launches',
  ogSub: 'Lessons from samridhi.si',
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
  ['no-made-up-proof', "Don't fill the gap with made-up proof"],
  ['one-form', 'One form, four kinds of people'],
  ['slow-phones', 'Assume a slow phone and no JavaScript'],
  ['consent', 'Consent and privacy from the first sign-up'],
  ['brand', 'Make the brand do the explaining'],
];

export default function PreLaunchCsrPost() {
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
    image: `${siteConfig.url}/og?title=${encodeURIComponent('Building a website for a CSR programme before it launches')}`,
    about: { '@type': 'WebSite', name: study.title, url: study.liveUrl },
  };

  return (
    <InnerPage
      trail={[
        { name: 'Blog', path: '/blog' },
        { name: 'Pre-launch CSR website', path },
      ]}
    >
      <JsonLd data={article} />
      <article className="mx-auto max-w-[760px] px-5 pt-10 sm:px-10 sm:pt-16">
        <Eyebrow>CSR websites</Eyebrow>
        <h1 className="mt-6 text-[clamp(34px,5vw,64px)] leading-[1.02] font-medium tracking-[-0.045em] text-balance">{post.h1}</h1>
        <p className="mt-5 font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
          By the {siteConfig.name} engineering team · Published <time dateTime={post.published}>{fmt(post.published)}</time>
        </p>

        <figure className="m-0 mt-10">
          <Image
            src={study.gallery[0].src}
            alt={study.gallery[0].alt}
            width={study.gallery[0].width}
            height={study.gallery[0].height}
            priority
            sizes="(max-width: 800px) 100vw, 680px"
            className="h-auto w-full rounded-[18px] border border-line"
          />
        </figure>

        <P>
          <strong>
            Most CSR websites are built after the programme has run, with photos of real classes, numbers from real reports and
            stories from real people. Samridhi, FAB5&apos;s new CSR programme, needed its website before any of that existed.
          </strong>{' '}
          Here is what we learned building <a href={study.liveUrl} className="text-ink underline underline-offset-4 hover:text-rose">samridhi.si</a>.
        </P>

        <nav aria-label="On this page" className="mt-10 rounded-[18px] border border-line bg-white p-6">
          <span className="font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase">On this page</span>
          <ol className="m-0 mt-3 flex list-decimal flex-col gap-1.5 pl-5 text-[15px]">
            {toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="text-ink underline-offset-4 hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <H2 id="no-made-up-proof">1. Don&apos;t fill the gap with made-up proof</H2>
        <P>
          The easy route is a big &ldquo;10,000+ lives changed&rdquo; counter and a few glowing quotes. For a programme that
          hasn&apos;t started, that is simply untrue, and anyone checking would spot it.
        </P>
        <P>
          We replaced the impact section with &ldquo;Our promise&rdquo;: three commitments about what Samridhi will publish once it
          runs. Where a testimonial would go, the page shows what each programme is working towards, clearly labelled as such.
        </P>

        <H2 id="one-form">2. One form, four kinds of people</H2>
        <P>
          A CSR site talks to learners, volunteers, partner NGOs and community leaders. We built a single sign-up form that starts
          with one question, &ldquo;I&apos;d like to&hellip;&rdquo;, answered with a tap.
        </P>
        <P>Every link on the page that mentions a programme or role fills that answer in, so nobody has to choose twice.</P>

        <H2 id="slow-phones">3. Assume a slow phone and no JavaScript</H2>
        <P>
          Many Samridhi visitors will be on entry-level Android phones and patchy mobile data. The form is a plain HTML form
          underneath. If the script fails to load, it still posts, still checks the mobile number in the browser, and still lands on
          a thank-you page.
        </P>
        <P>Desktop Lighthouse performance is 99, and layout shift is zero on every screen size.</P>

        <H2 id="consent">4. Consent and privacy from the first sign-up</H2>
        <P>
          India&apos;s Digital Personal Data Protection Act, 2023 expects clear notice and consent before you collect personal data.
          The form has a consent tick linked to a plain-language privacy notice, and the server refuses any sign-up without it.
        </P>
        <P>Each record is saved before any email is sent, so a failed email never loses a sign-up.</P>

        <H2 id="brand">5. Make the brand do the explaining</H2>
        <P>
          FAB5 is a broadband company, so the hero photo sits inside a Wi-Fi signal shape. It tells visitors who is behind Samridhi,
          and why, without a line of corporate copy.
        </P>
        <P>
          Read the full <A href={`/work/${study.slug}`}>Samridhi.si case study</A>, or see how we approach{' '}
          <A href="/services">managed software development</A>.
        </P>
      </article>
      <CtaBand source="blog:pre-launch-csr" title="Planning a CSR or NGO website?" accent="Book a 30-minute call." />
    </InnerPage>
  );
}
