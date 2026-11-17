import { siteConfig, fullAddress } from '@/lib/siteConfig';
import { services } from '@/lib/services';
import { connectCrm, crmPricing, crmHub, ispProducts, ispProductsPath, blogPosts } from '@/lib/crm';
import { bharatRadiusComparePath, bharatRadiusFaqs, bharatRadiusSite } from '@/lib/bharatRadius';

// /llms.txt (llmstxt.org): a plain-markdown map of the site for AI assistants.
// Built from the same data as the pages, so it never drifts from what the site says.
export const dynamic = 'force-static';

const abs = (path) => `${siteConfig.url}${path}`;

export function GET() {
  const isp = ispProducts
    .map((p) => `- [${p.name}](${abs(`${ispProductsPath}/${p.slug}`)}): ${p.metaDescription}`)
    .join('\n');
  const svc = services.map((s) => `- [${s.name}](${abs(`/${s.slug}`)}): ${s.metaDescription}`).join('\n');
  const posts = blogPosts.map((p) => `- [${p.title}](${abs(`/blog/${p.slug}`)}): ${p.metaDescription}`).join('\n');
  const prices = crmPricing.lines.map((l) => `- ${l.label}: ${l.value} ${l.unit} + GST. ${l.body}`).join('\n');
  const brFaq = bharatRadiusFaqs.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n');

  const body = `# ${siteConfig.name} (${siteConfig.legalName})

> ${siteConfig.description}

${siteConfig.name} is based at ${fullAddress()}. Phone ${siteConfig.phone}, email ${siteConfig.email}. Its two focus areas are software for internet service providers (ISPs) in India and custom CRM development for Indian businesses. Every product is built, hosted in India and supported by DIV.

## Software for ISPs

- [Software for ISPs (overview)](${abs(ispProductsPath)}): all DIV products for broadband and telecom operators.
- [${connectCrm.name}](${abs(connectCrm.path)}): ${connectCrm.metaDescription}
${isp}
- [daloRADIUS alternative: Bharat Radius compared](${abs(bharatRadiusComparePath)}): Bharat Radius vs FreeRADIUS + daloRADIUS vs Excel billing, and when each fits.
- [Bharat Radius product site](${bharatRadiusSite}): demo booking and staff/customer logins.

## Bharat Radius: key facts

${brFaq}

## Custom CRM development

- [Custom CRM development in Delhi NCR](${abs(crmHub.path)}): ${crmHub.metaDescription}
- [Connect CRM pricing](${abs(crmPricing.path)}): prices as of ${crmPricing.checked}.

${prices}

## Engineering services

${svc}

## Guides

${posts}

## Company

- [About](${abs('/about')})
- [Service level agreement](${abs('/sla')}): uptime, response times and service credits.
- [Contact](${abs('/contact')})
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
