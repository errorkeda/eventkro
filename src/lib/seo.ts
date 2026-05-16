import type { Metadata } from 'next';
import { SITE_NAME, siteUrl } from './site';

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
};

export function pageMetadata({
  title,
  description,
  path = '/',
  keywords,
  image = '/favicon-512x512.png',
}: PageMetadataOptions): Metadata {
  const url = siteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: image,
          width: 512,
          height: 512,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
