export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-brand-charcoal via-brand-charcoal/95 to-brand-charcoal border-t border-brand-sage/30 shadow-2xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Brand and tagline */}
        <div className="text-center mb-6">
          <h3 className="font-serif text-xl font-bold text-white mb-2">Second Veterinarian</h3>
          <p className="text-brand-offwhite/80 text-sm">Clarity for your pet's serious diagnosis</p>
        </div>

        {/* Compact links - horizontal on mobile */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-brand-offwhite/80 mb-6">
          <a href="#" className="hover:text-brand-gold transition-colors duration-300 hover:underline">
            About Us
          </a>
          <span className="text-brand-sage/40">•</span>
          <a href="#" className="hover:text-brand-gold transition-colors duration-300 hover:underline">
            Contact Us
          </a>
          <span className="text-brand-sage/40">•</span>
          <a href="#" className="hover:text-brand-gold transition-colors duration-300 hover:underline">
            Terms of Service
          </a>
          <span className="text-brand-sage/40">•</span>
          <a href="#" className="hover:text-brand-gold transition-colors duration-300 hover:underline">
            Privacy Policy
          </a>
          <span className="text-brand-sage/40">•</span>
          <a href="#" className="hover:text-brand-gold transition-colors duration-300 hover:underline">
            Guarantee Policy
          </a>
        </div>

        {/* Trust indicators - compact horizontal layout */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs text-brand-offwhite/60 mb-4">
          <span className="flex items-center gap-1">🔒 Encrypted & Private</span>
          <span className="text-brand-sage/40">•</span>
          <span className="flex items-center gap-1">⚡ 24/7 Support</span>
          <span className="text-brand-sage/40">•</span>
          <span className="flex items-center gap-1">💯 Money-Back Guarantee</span>
        </div>

        {/* Copyright - compact */}
        <div className="text-center text-xs text-brand-offwhite/60 border-t border-brand-sage/20 pt-4">
          <p>© 2025 Second Veterinarian LLC. All Rights Reserved.</p>
          <p className="mt-1">A US-based company serving pet owners across the United States.</p>
        </div>
      </div>
    </footer>
  )
}
