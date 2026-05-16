import { notFound } from 'next/navigation';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import ServiceDetailContent from '../../../../components/ServiceDetailContent';
import ServiceCitySchema from '../../../../components/ServiceCitySchema';
import { services } from '../../../data/servicesData';
import { cityNameFromSlug } from '../../../../lib/cities';
import {
  buildServiceCityMetadata,
  getServiceCityParams,
  serviceAvailableInCity,
} from '../../../../lib/serviceSeo';

export function generateStaticParams() {
  return getServiceCityParams();
}

export async function generateMetadata({
  params,
}: {
  params: { id: string; city: string };
}) {
  const service = services.find((s) => s.id === params.id);
  const cityName = cityNameFromSlug(params.city);

  if (!service || !cityName || !serviceAvailableInCity(service, params.city)) {
    return { title: 'Service Not Found | Eventkro' };
  }

  return buildServiceCityMetadata(service, cityName, params.city);
}

export default function ServiceCityPage({
  params,
}: {
  params: { id: string; city: string };
}) {
  const service = services.find((s) => s.id === params.id);
  const cityName = cityNameFromSlug(params.city);

  if (!service || !cityName || !serviceAvailableInCity(service, params.city)) {
    notFound();
  }

  return (
    <main>
      <ServiceCitySchema
        service={service}
        cityName={cityName}
        citySlug={params.city}
      />
      <Header />
      <ServiceDetailContent
        service={service}
        cityName={cityName}
        citySlug={params.city}
      />
      <Footer />
    </main>
  );
}
