import Script from 'next/script';
import type { Service } from '../app/data/servicesData';
import { buildServiceCitySchemaGraph } from '../lib/serviceSchema';

type Props = {
  service: Service;
  cityName: string;
  citySlug: string;
};

export default function ServiceCitySchema({ service, cityName, citySlug }: Props) {
  const schema = buildServiceCitySchemaGraph(service, cityName, citySlug);

  return (
    <Script
      id={`service-schema-${service.id}-${citySlug}`}
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(schema)}
    </Script>
  );
}
