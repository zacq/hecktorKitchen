import { User, ArrowRight } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-brown/5">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-display font-bold text-brand-orange flex items-center gap-2">
            <span className="text-3xl">🐾</span>
            Hector Kitchen
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-brand-brown/70">
            <a href="#how-it-works" className="hover:text-brand-orange transition-colors">How it works</a>
            <a href="#our-diet" className="hover:text-brand-orange transition-colors">Our diet</a>
            <a href="#discover" className="hover:text-brand-orange transition-colors">Discover</a>
            <a href="#faq" className="hover:text-brand-orange transition-colors">FAQ</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-brand-soft-orange rounded-full transition-colors">
            <User className="w-6 h-6" />
          </button>
          <button className="btn-primary !py-2.5 !text-sm hidden sm:flex">
            Discover the ideal ration <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
