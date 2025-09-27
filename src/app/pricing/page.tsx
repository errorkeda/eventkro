import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <main>
      <Header />
      
      {/* Page Header */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Pricing Plans</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible and transparent pricing options for all your event needs in Agra Mandal
          </p>
        </div>
      </section>
      
      {/* Pricing Packages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl font-bold text-center mb-2">Our Most Popular Party Packages</h2>
          <p className="section-subtitle text-center text-gray-600 mb-12">
            You can customize everything to suit your needs. This package is just an overview
            of the services we offer to our customers and serves as a demo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="border rounded-xl shadow-sm p-8 text-center hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-600">Basic</h3>
              <p className="text-gray-600 mb-4">Perfect for intimate gatherings</p>
              <p className="text-3xl font-bold mb-2">₹699 <span className="text-lg font-normal">/ person</span></p>
              <p className="text-yellow-500 mb-4">★★★★☆ 4.0/5.0</p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li>✔ Basic decoration with any two colors balloons only</li>
                <li>✔ Basic Food (including starter, food, beverages)</li>
                <li>✔ Cake (1kg), popper, Knife, candle</li>
                <li>✔ Essential party supplies included</li>
              </ul>
              <Link href="/contact" className="btn-primary block">Get Quote</Link>
              <p className="text-sm text-gray-500 mt-2">Minimum 10 guests</p>
            </div>

            {/* Premium Package */}
            <div className="border-2 border-purple-500 rounded-xl shadow-lg p-8 text-center relative hover:shadow-xl transition">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-sm px-3 py-1 rounded-full">Most Popular</span>
              <h3 className="text-2xl font-bold text-purple-600">Premium</h3>
              <p className="text-gray-600 mb-4">Most popular choice for celebrations</p>
              <p className="text-3xl font-bold mb-2">₹999 <span className="text-lg font-normal">/ person</span></p>
              <p className="text-yellow-500 mb-4">★★★★★ 5.0/5.0</p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li>✔ Premium Decoration with balloons, banners, LED etc</li>
                <li>✔ Premium Food (including Starter, Food, beverages, desserts)</li>
                <li>✔ Cake (2 floor), popper, cap, knife, ribbon etc</li>
                <li>✔ Cleaning your party area after party</li>
                <li>✔ DSLR camera only</li>
              </ul>
              <Link href="/contact" className="btn-primary block bg-purple-600 hover:bg-purple-700">Get Quote</Link>
              <p className="text-sm text-gray-500 mt-2">Minimum 20 guests</p>
            </div>

            {/* Elite Package */}
            <div className="border rounded-xl shadow-sm p-8 text-center hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-pink-600">Elite</h3>
              <p className="text-gray-600 mb-4">Ultimate luxury experience</p>
              <p className="text-3xl font-bold mb-2">₹1499 <span className="text-lg font-normal">/ person</span></p>
              <p className="text-yellow-500 mb-4">★★★★★ 5.0/5.0</p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li>✔ Elite theme based decoration (customizable also)</li>
                <li>✔ Elite catering services (including starter, food, beverages, desserts)</li>
                <li>✔ Cleaning your party area after party</li>
                <li>✔ Cake (customizable), popper, cap, knife, ribbon etc</li>
                <li>✔ DSLR camera with specialist photographers</li>
              </ul>
              <Link href="/contact" className="btn-primary block bg-pink-600 hover:bg-pink-700">Get Quote</Link>
              <p className="text-sm text-gray-500 mt-2">Minimum 30 guests</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Custom Quote */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Package?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We understand that every event is unique. Contact us for a personalized quote tailored to your specific requirements.
          </p>
          <button className="btn-primary">Request Custom Quote</button>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
