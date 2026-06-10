import Link from 'next/link';
import Image from 'next/image';
import type { Service } from '../app/data/servicesData';
import { citySlugFromName } from '../lib/cities';
import { getServiceCityContent } from '../lib/serviceSeo';
import { getServiceCityFaqItems } from '../lib/serviceSchema';
import { ServiceIcon } from '../lib/serviceIcons';
import FaqAccordion from './FaqAccordion';

type Props = {
  service: Service;
  cityName: string;
  citySlug: string;
};

export default function ServiceDetailContent({ service, cityName, citySlug }: Props) {
  const content = getServiceCityContent(service, cityName);
  const faqItems = getServiceCityFaqItems(service, cityName);

  return (
    <>
      <section className="bg-[#ff5722] py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-white/80 mb-4" aria-label="Breadcrumb">
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span>{content.h1}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.h1}</h1>
          <p className="max-w-2xl mx-auto text-lg">{content.intro}</p>
          <p
            className="text-yellow-300 mt-4 text-lg"
            aria-label={`${service.rating} out of 5 stars`}
          >
            {'★'.repeat(service.rating)}
            {'☆'.repeat(5 - service.rating)}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-lg rounded-xl p-8">
            <div className="flex flex-col items-center mb-6">
              <ServiceIcon id={service.id} size="lg" />
            </div>

            <Image
              src={service.image}
              alt={`${content.h1} by Eventkro`}
              className="w-full h-64 object-cover rounded-md mb-6"
              width={800}
              height={256}
              priority
            />

            <h2 className="text-2xl font-bold mb-4">
              {service.name} in {cityName} — What We Offer
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-start text-gray-700">
                  <span className="text-[#ff5722] mr-3 mt-1">✔</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Also available in</h3>
              <div className="flex flex-wrap gap-2">
                {service.cities.map((c) => {
                  const slug = citySlugFromName(c);
                  if (!slug) return null;
                  const isActive = slug === citySlug;
                  return (
                    <Link
                      key={c}
                      href={`/services/${service.id}/${slug}`}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                        isActive
                          ? 'bg-[#ff5722] text-white'
                          : 'bg-white border border-gray-200 text-gray-700 hover:border-[#ff5722] hover:text-[#ff5722]'
                      }`}
                    >
                      {c}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="bg-[#ff5722] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e64a19]"
              >
                Book {service.name} in {cityName}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" aria-labelledby="service-faq-heading">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 id="service-faq-heading" className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions — {service.name} in {cityName}
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </>
  );
}
