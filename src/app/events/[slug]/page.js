import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { eventData, eventSlugs } from '../../data/eventData';
import { pageMetadata } from '../../../lib/seo';

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

  return (
    <>
      <Header />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">{event.title}</h1>
          <img
            src={event.image}
            alt={event.title}
            className="w-full max-w-3xl mx-auto h-96 object-cover rounded-lg shadow-md mb-6"
          />
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">{event.description}</p>

          <div className="max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Why Choose Our Services</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {event.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-block bg-pink-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-pink-700 transition"
            >
              Book This Event
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
