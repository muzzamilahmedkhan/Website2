import { useState } from 'react';
import { Paintbrush, Phone, Mail, MapPin, CheckCircle2, Droplet, Wallpaper, Building2 } from 'lucide-react';
import { supabase } from './lib/supabase';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try calling us instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-slate-800 text-white py-4 px-6 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Paintbrush className="w-8 h-8 text-orange-400" />
            <div>
              <h1 className="text-2xl font-bold">DC Painting & Decorating</h1>
              <p className="text-sm text-gray-300 flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Coleraine, Northern Ireland
              </p>
            </div>
          </div>
          <button
            onClick={scrollToContact}
            className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Get a Quote
          </button>
        </div>
      </header>

      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Professional Painting & Decorating</h2>
          <div className="flex flex-wrap justify-center gap-8 text-lg">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-orange-400" />
              <span className="font-semibold">50+ Years Experience</span>
            </div>
            <div className="w-px bg-white/30"></div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-orange-400" />
              <span className="font-semibold">Gold CSCS Certified</span>
            </div>
            <div className="w-px bg-white/30"></div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-orange-400" />
              <span className="font-semibold">Free Quotes</span>
            </div>
          </div>
          <button
            onClick={scrollToContact}
            className="mt-12 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg text-xl font-semibold transition-colors shadow-xl"
          >
            Contact Us Today
          </button>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Droplet className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Fibrelining</h3>
              <p className="text-gray-600 leading-relaxed">
                Specialist fibrelining services for roofs, gutters, and surfaces. Durable, weatherproof protection that stands the test of time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-orange-500">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Wallpaper className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Wallpapering</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert wallpaper installation and removal. From contemporary designs to classic patterns, we ensure a flawless finish every time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-green-500">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Commercial & Domestic</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete painting and decorating for homes and businesses. Interior and exterior work delivered to the highest standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">Our Work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop"
                alt="Professional painting work"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop"
                alt="Interior decorating"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop"
                alt="Commercial painting"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop"
                alt="Wallpapering service"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1572297794819-167b05a5f31b?w=600&h=400&fit=crop"
                alt="Exterior painting"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop"
                alt="Decorating services"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-800">Get in Touch</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Ready to transform your space? Contact us for a free, no-obligation quote.
          </p>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
              <a href="tel:02870123456" className="flex items-center gap-3 text-lg text-gray-700 hover:text-blue-600 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">028 7012 3456</span>
              </a>
              <a href="mailto:info@dcpainting.co.uk" className="flex items-center gap-3 text-lg text-gray-700 hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">info@dcpainting.co.uk</span>
              </a>
            </div>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Thank you! We'll get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-300">© 2025 DC Painting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
