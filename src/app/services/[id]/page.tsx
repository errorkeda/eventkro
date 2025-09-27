// app/services/[id]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { services } from "../../data/servicesData";
import { FaCalendarCheck, FaGift, FaSun, FaLeaf, FaCamera } from "react-icons/fa";

const iconMap: Record<string, JSX.Element> = {
  roka: <FaCalendarCheck className="text-6xl text-[#ff5722]" />,
  tilak: <FaGift className="text-6xl text-[#ffc107]" />,
  haldi: <FaSun className="text-6xl text-[#e91e63]" />,
  mehendi: <FaLeaf className="text-6xl text-[#4caf50]" />,
  photoshoot: <FaCamera className="text-6xl text-[#3f51b5]" />,
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === params.id);
  if (!service) return { title: "Service Not Found | Eventkro Agra" };

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      images: [service.image],
    },
  };
}

export default function ServiceDetails({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === params.id);
  if (!service) return notFound();

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-[#ff5722] py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="max-w-2xl mx-auto text-lg">{service.description}</p>
        </div>
      </section>

      {/* Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-lg rounded-xl p-8">
            <div className="flex flex-col items-center mb-6">
              {iconMap[service.id] ?? null}
            </div>

            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover rounded-md mb-6"
            />

            <h2 className="text-2xl font-bold mb-4">Our Offerings</h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-start text-gray-700">
                  <span className="text-[#ff5722] mr-3 mt-1">✔</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mb-6">
              <h3 className="font-semibold">Available in:</h3>
              <div className="flex gap-2 mt-2 flex-wrap">
                {service.cities.map((c) => (
                  <span key={c} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="bg-[#ff5722] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e64a19]"
              >
                Book {service.title.split(" in ")[0]}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
