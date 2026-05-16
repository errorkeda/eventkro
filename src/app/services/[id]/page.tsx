import { notFound, redirect } from 'next/navigation';
import { services } from '../../data/servicesData';
import { primaryCitySlug } from '../../../lib/serviceSeo';

export default function ServiceRedirectPage({
  params,
}: {
  params: { id: string };
}) {
  const service = services.find((s) => s.id === params.id);
  if (!service) notFound();

  redirect(`/services/${service.id}/${primaryCitySlug(service)}`);
}
