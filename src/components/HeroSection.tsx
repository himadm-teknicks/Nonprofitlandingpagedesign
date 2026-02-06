import { ArrowRight, Info } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const handleCTAClick = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-20 pb-8 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="assets/img/hero BG.webp"
          alt="Elegant nonprofit gala event"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-blue-950/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8 text-center">
        <div className="space-y-4">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
            Raise More. Stress Less.
          </h1>

          {/* Secondary Headline */}
          <h2 className="text-lg md:text-xl lg:text-2xl font-light text-blue-100 leading-snug">
            Nonprofit clients have doubled - and even tripled - event revenue with our help.
          </h2>

          {/* Supporting Copy */}
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Event strategy and execution designed for nonprofits who want more than just a "nice" event. We handle the behind-the-scenes logistics like on-site registration, run of show management, and vendor troubleshooting so your team can focus on what actually drives revenue: donor relationships.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <button
              onClick={handleCTAClick}
              className="cursor-pointer inline-flex items-center gap-2 bg-gradient-to-r from-[#427DBD] to-blue-500 hover:from-blue-600 hover:to-blue-600 text-white px-6 py-3 rounded-md transition-all duration-200 group shadow-lg hover:shadow-xl"
            >
              <span className="text-base font-medium">Book a Free Event Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200/30 to-transparent" />
    </section>
  );
}