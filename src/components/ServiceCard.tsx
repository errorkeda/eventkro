import Link from 'next/link';
import type { Service } from '../app/data/servicesData';
import { citySlugFromName } from '../lib/cities';
import { ServiceIcon } from '../lib/serviceIcons';

function StarRating({ rating }: { rating: number }) {
  return (
    <p className="text-yellow-500 text-sm mb-2" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(rating)}
      {'☆'.repeat(5 - rating)}
    </p>
  );
}

export default function ServiceCard({ service }: { service: Service }) {
  const defaultSlug = citySlugFromName(service.cities[0]) ?? 'agra';

  return (
    <div className="card text-center hover:-translate-y-2 bg-white rounded-lg shadow-sm p-6 h-full flex flex-col">
      <div className="flex justify-center mb-4">
        <ServiceIcon id={service.id} size="sm" />
      </div>
      <h3 className="text-lg font-bold mb-1">{service.name}</h3>
      <p className="text-sm text-[#ff5722] font-medium mb-2">
        {service.cities.map((c) => `${c}`).join(' · ')}
      </p>
      <StarRating rating={service.rating} />
      <p className="text-gray-600 mb-4 text-sm flex-grow">
        {service.description.length > 100
          ? `${service.description.substring(0, 100)}...`
          : service.description}
      </p>
      <Link
        href={`/services/${service.id}/${defaultSlug}`}
        className="text-[#ff5722] font-medium mt-auto"
      >
        View in {service.cities[0]} →
      </Link>
    </div>
  );
}
