/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import HowItWorks from './components/HowItWorks';
import Quiz from './components/Quiz';
import Ingredients from './components/Ingredients';
import Testimonials from './components/Testimonials';
import ChatWidget from './components/ChatWidget';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <HowItWorks />
        <Quiz />
        <Ingredients />
        <Testimonials />
        <ChatWidget />
        
        {/* Footer */}
        <footer className="bg-brand-brown text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-2">
                <div className="text-2xl font-display font-bold text-brand-orange flex items-center gap-2 mb-6">
                  <span className="text-3xl">🐾</span>
                  Hector Kitchen
                </div>
                <p className="text-white/60 max-w-sm leading-relaxed">
                  The personalized nutrition solution for your pets. We believe every companion deserves a diet as unique as they are.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-6 uppercase tracking-wider text-sm text-brand-orange">Company</h4>
                <ul className="space-y-4 text-white/60 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Our ingredients</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 uppercase tracking-wider text-sm text-brand-orange">Legal</h4>
                <ul className="space-y-4 text-white/60 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Terms of service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Legal mentions</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-white/10 text-center text-white/40 text-xs">
              © {new Date().getFullYear()} Hector Kitchen. All rights reserved. Made with ❤️ for pets.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
