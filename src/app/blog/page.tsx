'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Wedding Venues in Agra',
    excerpt: 'Discover the most stunning wedding venues in Agra that offer breathtaking views of the Taj Mahal and other historical monuments.',
    content: `
      <p>Agra, the city of the Taj Mahal, is not just a tourist destination but also a dream wedding location for many couples. The city offers a variety of venues that combine historical charm with modern amenities.</p>
      
      <h3>1. Taj View Gardens</h3>
      <p>Located just across the Yamuna River, this venue offers a stunning view of the Taj Mahal. The gardens are spacious enough to accommodate up to 500 guests and provide a magical backdrop for your wedding photographs.</p>
      
      <h3>2. The Oberoi Amarvilas</h3>
      <p>For luxury weddings, The Oberoi Amarvilas offers an unparalleled experience. Every room in this 5-star hotel has a view of the Taj Mahal, and their wedding arrangements are nothing short of spectacular.</p>
      
      <h3>3. Jaypee Palace Hotel</h3>
      <p>With its sprawling lawns and Mughal-inspired architecture, Jaypee Palace Hotel is perfect for grand weddings. Their team of experts ensures that every detail is taken care of.</p>
      
      <h3>4. ITC Mughal</h3>
      <p>Another luxury option, ITC Mughal offers various venues within its premises for different wedding functions. Their Mughal-themed decor adds a royal touch to the celebrations.</p>
      
      <h3>5. Taj Terrace</h3>
      <p>A boutique venue that offers an intimate setting with the Taj Mahal in the background. Perfect for smaller gatherings and pre-wedding functions.</p>
      
      <p>Each of these venues offers unique features and can be customized according to your preferences. Our team at Agra Mandal Events can help you choose the perfect venue and handle all the arrangements for your special day.</p>
    `,
    image: '/images/blog-agra-wedding.svg',
    author: 'Priya Sharma',
    date: 'June 15, 2023',
    category: 'Weddings',
    city: 'Agra',
    tags: ['wedding venues', 'Agra', 'destination wedding']
  },
  {
    id: 2,
    title: 'How to Plan Lathmar Holi in Mathura',
    excerpt: 'A comprehensive guide to planning and participating in the famous Lathmar Holi celebrations in Mathura and Vrindavan.',
    content: `
      <p>Lathmar Holi is one of the most unique and vibrant Holi celebrations in India, taking place in Barsana and Nandgaon near Mathura. This guide will help you plan your participation in this cultural extravaganza.</p>
      
      <h3>Understanding Lathmar Holi</h3>
      <p>Lathmar Holi is based on a legend involving Lord Krishna and Radha. Men from Nandgaon visit Barsana to tease women, who playfully beat them with sticks (lathis). It's a colorful and joyous celebration that attracts tourists from around the world.</p>
      
      <h3>Best Time to Visit</h3>
      <p>Lathmar Holi usually takes place a week before the main Holi festival. Check the Hindu calendar for exact dates, as they change each year based on the lunar calendar.</p>
      
      <h3>Accommodation</h3>
      <p>Book your stay well in advance as hotels in Mathura and Vrindavan get fully booked during this period. Consider staying in Mathura and traveling to Barsana and Nandgaon for the celebrations.</p>
      
      <h3>What to Wear</h3>
      <p>Wear old, white clothes that you don't mind getting colored. Protect your skin and hair with oil before participating, and consider wearing sunglasses to protect your eyes.</p>
      
      <h3>Photography Tips</h3>
      <p>If you're planning to take photographs, invest in good camera protection. The colored powder can damage your equipment. Consider hiring a local photographer who knows how to navigate the crowds and capture the best moments.</p>
      
      <h3>Local Customs</h3>
      <p>Respect local customs and traditions. This is a religious celebration, so be mindful of temple rules and local sensitivities.</p>
      
      <p>At Agra Mandal Events, we can arrange special Lathmar Holi tours and events that provide an authentic experience while ensuring your comfort and safety. Contact us to plan your cultural immersion in this unique festival.</p>
    `,
    image: '/images/blog-holi.svg',
    author: 'Rahul Verma',
    date: 'February 20, 2023',
    category: 'Cultural Events',
    city: 'Mathura',
    tags: ['Holi', 'Mathura', 'cultural festivals']
  },
  {
    id: 3,
    title: 'Best Caterers in Firozabad',
    excerpt: 'A curated list of top catering services in Firozabad that can elevate your event with delicious food and impeccable service.',
    content: `
      <p>Food is a crucial element of any successful event. In Firozabad, known for its glass industry, you can also find some exceptional catering services that combine traditional flavors with modern presentation.</p>
      
      <h3>Royal Feast Caterers</h3>
      <p>With over 15 years of experience, Royal Feast Caterers specialize in North Indian cuisine. Their signature dishes include Awadhi Biryani and Galouti Kebabs. They can handle events of all sizes, from intimate gatherings to large weddings with 1000+ guests.</p>
      
      <h3>Glass City Catering</h3>
      <p>Known for their innovative presentation using Firozabad's famous glassware, this catering service offers a fusion of Indian and international cuisines. Their themed food stations are particularly popular for corporate events.</p>
      
      <h3>Taste of Tradition</h3>
      <p>If you're looking for authentic local flavors, Taste of Tradition is your best bet. They specialize in traditional UP cuisine with dishes like Bedai-Aloo, Matar ka Nimona, and various milk-based sweets that Firozabad is known for.</p>
      
      <h3>Green Leaf Catering</h3>
      <p>For those looking for vegetarian and Jain options, Green Leaf Catering offers a wide range of sattvic food prepared without onion and garlic. Their South Indian and Gujarati thalis are highly recommended.</p>
      
      <h3>Modern Flavors</h3>
      <p>Catering to younger audiences, Modern Flavors offers contemporary cuisine including live pasta stations, sushi bars, and molecular gastronomy. They're perfect for corporate events and theme parties.</p>
      
      <p>At Agra Mandal Events, we work closely with these caterers and can help you select the best option based on your event type, guest preferences, and budget. We ensure that the food at your event is not just a meal but a memorable experience.</p>
    `,
    image: '/images/blog-corporate.svg',
    author: 'Ananya Gupta',
    date: 'April 5, 2023',
    category: 'Food & Catering',
    city: 'Firozabad',
    tags: ['catering', 'Firozabad', 'event food']
  },
  {
    id: 4,
    title: 'Traditional Village Fairs of Mainpuri',
    excerpt: 'Explore the colorful and culturally rich village fairs of Mainpuri that showcase the authentic rural heritage of Uttar Pradesh.',
    content: `
      <p>Mainpuri, though less known to international tourists, is a treasure trove of cultural experiences, particularly its traditional village fairs or 'melas'. These fairs offer a glimpse into the authentic rural life of Uttar Pradesh.</p>
      
      <h3>Karhal Mela</h3>
      <p>One of the largest fairs in Mainpuri, the Karhal Mela takes place in October-November. It features traditional performances, handicraft stalls, and agricultural exhibitions. The fair is famous for its cattle trading and rural sports competitions.</p>
      
      <h3>Bateshwar Fair</h3>
      <p>Though technically on the border of Agra and Mainpuri, the Bateshwar Fair is a significant cultural event. It combines religious rituals at the 108 Shiva temples with a massive cattle fair. The fair spans over a month and attracts visitors from neighboring states.</p>
      
      <h3>Holi Mela</h3>
      <p>Mainpuri's Holi celebrations are unique with special folk performances like 'Raslila' and 'Charkula'. The fair organized during this time showcases local arts, crafts, and food specialties like 'Gujhia' and 'Malpua'.</p>
      
      <h3>Sawan Mela</h3>
      <p>During the month of Sawan (July-August), several small fairs are organized near Shiva temples across Mainpuri. These fairs feature religious rituals, folk music, and traditional swings or 'jhulas' for young women.</p>
      
      <h3>Dussehra Fair</h3>
      <p>The Dussehra celebrations in Mainpuri include a fair with Ramlila performances, effigy burning, and various entertainment options for children and adults alike. Local craftsmen display their work, and food stalls offer regional delicacies.</p>
      
      <p>These fairs provide excellent opportunities for authentic cultural experiences and photography. At Agra Mandal Events, we can arrange special tours to these fairs, including transportation, local guides, and even participation in certain activities. These experiences can be incorporated into corporate retreats, educational tours, or simply as cultural excursions for tourists looking to explore beyond the usual attractions.</p>
    `,
    image: '/images/blog-mainpuri-fair.jpg',
    author: 'Vikram Singh',
    date: 'September 12, 2023',
    category: 'Cultural Events',
    city: 'Mainpuri',
    tags: ['village fairs', 'Mainpuri', 'rural tourism']
  },
  {
    id: 5,
    title: 'Corporate Event Trends in Agra Mandal',
    excerpt: 'Discover the latest trends in corporate event planning across Agra, Mathura, Firozabad, and Mainpuri regions.',
    content: `
      <p>Corporate events in the Agra Mandal region are evolving rapidly, with companies looking for unique experiences that combine professional settings with cultural elements. Here are the top trends we've observed in recent corporate events across Agra, Mathura, Firozabad, and Mainpuri.</p>
      
      <h3>Heritage Venues</h3>
      <p>Companies are increasingly choosing heritage properties and havelis for their corporate events. These venues offer a unique ambiance that can't be replicated in conventional hotels. In Agra, several heritage properties near the Taj Mahal are being repurposed for corporate retreats and conferences.</p>
      
      <h3>Sustainable Events</h3>
      <p>Sustainability has become a key consideration for corporate events. From digital invitations to locally sourced food and decor made from recyclable materials, companies are making conscious choices to reduce their carbon footprint.</p>
      
      <h3>Cultural Integration</h3>
      <p>International companies hosting events in the region are incorporating local cultural elements like glass-blowing demonstrations in Firozabad, traditional dance performances from Braj region in Mathura, or craft workshops featuring Mainpuri's pottery.</p>
      
      <h3>Hybrid Events</h3>
      <p>Post-pandemic, hybrid events that combine in-person and virtual participation have become standard. Venues across Agra Mandal are upgrading their technical infrastructure to support high-quality streaming and interactive virtual experiences.</p>
      
      <h3>Wellness Components</h3>
      <p>Corporate events now often include wellness activities like yoga sessions (particularly popular in Mathura), meditation breaks, and healthy food options. These elements help keep participants energized and engaged throughout the event.</p>
      
      <p>At Agra Mandal Events, we stay ahead of these trends and can help you incorporate them into your corporate event planning. Whether you're organizing a team-building retreat, a product launch, or an annual conference, we can create a customized experience that aligns with your company's objectives while taking advantage of the unique offerings of the Agra Mandal region.</p>
    `,
    image: '/images/blog-corporate-trends.jpg',
    author: 'Deepak Agarwal',
    date: 'July 8, 2023',
    category: 'Corporate Events',
    city: 'Agra Mandal',
    tags: ['corporate events', 'event trends', 'business meetings']
  },
  {
    id: 6,
    title: 'Budget-Friendly Wedding Planning in Agra Mandal',
    excerpt: 'Smart tips and strategies for planning a beautiful wedding in Agra Mandal region without breaking the bank.',
    content: `
      <p>Planning a wedding can be expensive, but with some smart strategies, you can have a beautiful celebration in the Agra Mandal region without compromising on the experience. Here are our top tips for budget-friendly wedding planning.</p>
      
      <h3>Off-Season Advantages</h3>
      <p>Consider getting married during the off-season (May-July or monsoon months). Venues and vendors offer significant discounts during these periods. While summer can be hot in the region, many venues now have excellent climate control facilities.</p>
      
      <h3>Weekday Weddings</h3>
      <p>Choosing a weekday for your wedding can reduce venue costs by up to 40%. This works particularly well if most of your guests are local to the Agra Mandal region.</p>
      
      <h3>Venue Selection</h3>
      <p>Look beyond Agra city. Venues in Firozabad and Mainpuri offer similar amenities at much lower prices. Some heritage properties in rural areas provide unique settings at reasonable rates.</p>
      
      <h3>Local Resources</h3>
      <p>Use local flowers, decorations, and food ingredients. For example, glass decorations from Firozabad can be both cost-effective and unique. Similarly, local seasonal flowers are much cheaper than imported varieties.</p>
      
      <h3>Combined Functions</h3>
      <p>Instead of having separate events for each ceremony, consider combining some functions on the same day. This reduces venue rental costs and also makes it more convenient for guests.</p>
      
      <h3>Digital Invitations</h3>
      <p>Save on printing and postage by using digital invitations. There are many creative platforms that allow you to design beautiful e-invites that can be easily shared via email and social media.</p>
      
      <h3>Outfit Rentals</h3>
      <p>Designer wedding attire can be extremely expensive. Consider renting outfits for the wedding party or buying from local designers in Agra who offer beautiful pieces at more reasonable prices than big-city designers.</p>
      
      <p>At Agra Mandal Events, we specialize in creating beautiful weddings for every budget. Our local connections and experience allow us to suggest the best value-for-money options without compromising on the quality of your special day.</p>
    `,
    image: '/images/blog-budget-wedding.jpg',
    author: 'Meera Kapoor',
    date: 'October 25, 2023',
    category: 'Weddings',
    city: 'Agra Mandal',
    tags: ['budget wedding', 'wedding planning', 'affordable events']
  }
];

// Categories for filtering
const categories = [
  'All',
  'Weddings',
  'Corporate Events',
  'Cultural Events',
  'Food & Catering',
];

// Cities for filtering
const cities = [
  'All',
  'Agra',
  'Mathura',
  'Firozabad',
  'Mainpuri',
  'Agra Mandal',
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentBlogPost, setCurrentBlogPost] = useState(null);
  
  // Filter blog posts based on selected category, city, and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesCity = selectedCity === 'All' || post.city === selectedCity;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesCity && matchesSearch;
  });

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/blog-hero.jpg')" }}
        ></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Planning Insights</h1>
            <p className="text-xl">
              Discover tips, trends, and inspiration for planning events across Agra Mandal
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Search and Filter Bar */}
          <div className="bg-white p-4 rounded-xl shadow-md mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5722] bg-white"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5722] bg-white"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {currentBlogPost ? (
            // Single Blog Post View
            <div className="max-w-4xl mx-auto">
              <button
                onClick={() => setCurrentBlogPost(null)}
                className="mb-6 flex items-center text-[#ff5722] font-medium hover:underline"
              >
                ← Back to all articles
              </button>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-[40vh]">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${currentBlogPost.image})` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-[#ff5722] text-white text-sm px-3 py-1 rounded-full">
                        {currentBlogPost.category}
                      </span>
                      <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                        {currentBlogPost.city}
                      </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold">{currentBlogPost.title}</h1>
                    <div className="flex items-center mt-4 text-sm">
                      <div className="flex items-center mr-4">
                        <FaUser className="mr-2" />
                        <span>{currentBlogPost.author}</span>
                      </div>
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2" />
                        <span>{currentBlogPost.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <div 
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: currentBlogPost.content }}
                  ></div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-bold mb-3">Tags:</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentBlogPost.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center"
                        >
                          <FaTag className="mr-1 text-xs" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Related Posts */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts
                    .filter(post => 
                      post.id !== currentBlogPost.id && 
                      (post.category === currentBlogPost.category || post.city === currentBlogPost.city)
                    )
                    .slice(0, 2)
                    .map(post => (
                      <div 
                        key={post.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => setCurrentBlogPost(post)}
                      >
                        <div className="relative h-48">
                          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}></div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 p-4 text-white">
                            <h3 className="font-bold text-lg">{post.title}</h3>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <FaCalendarAlt className="mr-1" />
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <span>{post.city}</span>
                          </div>
                          <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ) : (
            // Blog List View
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map(post => (
                    <div 
                      key={post.id}
                      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => setCurrentBlogPost(post)}
                    >
                      <div className="relative h-48">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 left-4 flex space-x-2">
                          <span className="bg-[#ff5722] text-white text-xs px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                            {post.city}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <div className="flex items-center mr-4">
                            <FaUser className="mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <FaCalendarAlt className="mr-1" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <button className="text-[#ff5722] font-medium hover:underline">
                          Read More →
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-3 py-12 text-center">
                    <h3 className="text-xl font-bold mb-2">No articles found</h3>
                    <p className="text-gray-600">
                      Try adjusting your search criteria or browse all articles.
                    </p>
                    <button 
                      className="mt-4 text-[#ff5722] font-medium hover:underline"
                      onClick={() => {
                        setSelectedCategory('All');
                        setSelectedCity('All');
                        setSearchQuery('');
                      }}
                    >
                      View all articles
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-[#ff5722]/10 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Get the latest event planning tips, trends, and inspiration delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
              />
              <button className="bg-[#ff5722] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#e64a19] transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Event?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Let our team of experts help you create a memorable experience in Agra Mandal.
          </p>
          <Link href="/contact" className="bg-[#ff5722] hover:bg-[#e64a19] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
            Contact Us Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}