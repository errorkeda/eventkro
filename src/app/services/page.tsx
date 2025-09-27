// app/services/page.tsx
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { services } from "../data/servicesData";
import { FaCalendarCheck, FaGift, FaSun, FaLeaf, FaCamera } from "react-icons/fa";

const iconMap: Record<string, JSX.Element> = {
  roka: <FaCalendarCheck className="text-5xl text-[#ff5722]" />,
  tilak: <FaGift className="text-5xl text-[#ffc107]" />,
  haldi: <FaSun className="text-5xl text-[#e91e63]" />,
  mehendi: <FaLeaf className="text-5xl text-[#4caf50]" />,
  photoshoot: <FaCamera className="text-5xl text-[#3f51b5]" />,
};

export default function ServicesPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-[#ff5722] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive event planning services for all occasions across the Agra Mandal region
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="card text-center hover:-translate-y-2 bg-white rounded-lg shadow-sm p-6">
                <div className="mb-4">{iconMap[service.id]}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description.substring(0, 100)}...</p>
                <Link href={`/services/${service.id}`} className="text-[#ff5722] font-medium">
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#ff5722] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Event?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us today to discuss your event needs and get a customized quote.
          </p>
          <Link href="/contact" className="bg-white text-[#ff5722] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md">
            Contact Us Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
