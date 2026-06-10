import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { eventData, eventSlugs } from '../../data/eventData';
import { pageMetadata } from '../../../lib/seo';
import { siteUrl } from '../../../lib/site';

export function generateStaticParams() {
  return eventSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const event = eventData[params.slug];
  if (!event) {
    return { title: 'Event Not Found | Eventkro' };
  }

  return pageMetadata({
    title: event.seo.title,
    description: event.seo.description,
    path: `/events/${params.slug}`,
    keywords: event.seo.keywords,
    image: event.image,
  });
}

export default function EventPage({ params }) {
  const event = eventData[params.slug];

  if (!event) {
    return <div className="text-center py-16">Event not found</div>;
  }

  const pageUrl = siteUrl(`/events/${params.slug}`);
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: event.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <Script id="event-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Header />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-500 mb-6 text-center" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#ff5722]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{event.title}</span>
          </nav>
          <h1 className="text-4xl font-bold text-center mb-6">{event.title}</h1>
          <Image
            src={event.image}
            alt={`${event.title} by Eventkro in Agra`}
            className="w-full max-w-3xl mx-auto h-96 object-cover rounded-lg shadow-md mb-6"
            width={768}
            height={384}
            priority
          />
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8 text-lg">
            {event.description}
          </p>

          {event.bodyParagraphs?.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-gray-700 max-w-3xl mx-auto mb-4 text-base leading-relaxed"
            >
              {paragraph}
            </p>
          ))}

          <div className="max-w-3xl mx-auto mb-8 mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-center">Why Choose Eventkro</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {event.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          {event.relatedLinks && event.relatedLinks.length > 0 && (
            <div className="max-w-3xl mx-auto mb-8 flex flex-wrap justify-center gap-3">
              {event.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#ff5722] border border-[#ff5722] px-4 py-2 rounded-md hover:bg-[#ff5722] hover:text-white transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-block bg-pink-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-pink-700 transition"
            >
              Book This Event — Free Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-semibold mb-6">What Our Clients Say</h2>
          <p className="text-gray-600 italic">{event.testimonial.quote}</p>
          <p className="mt-2 font-semibold">{event.testimonial.client}</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
