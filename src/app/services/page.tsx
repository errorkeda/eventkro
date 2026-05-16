import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import ServiceCard from '../../components/ServiceCard';
import {
  getServicesByCategory,
  serviceCategories,
} from '../data/servicesData';

export default function ServicesPage() {
  return (
    <main>
      <Header />

      <section className="bg-[#ff5722] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Balloon decoration, wedding ceremonies, and full event planning across
            Agra, Mathura, Firozabad &amp; Mainpuri
          </p>
        </div>
      </section>

      {serviceCategories.map((cat) => {
        const items = getServicesByCategory(cat.id);
        return (
          <section
            key={cat.id}
            className={`py-16 ${cat.id === 'balloon' ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="container mx-auto px-4">
              <h2 className="section-title">{cat.title}</h2>
              <p className="section-subtitle">{cat.subtitle}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {items.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-16 bg-[#ff5722] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Event?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us today for balloon decoration or full event planning — free quote
            within 24 hours.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#ff5722] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md"
          >
            Contact Us Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
