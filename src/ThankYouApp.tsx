import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ClientResultsSection } from './components/ClientResultsSection';
import { SectionSeparator } from './components/SectionSeparator';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { CheckCircle, Phone, Calendar, FileText } from 'lucide-react';

export default function ThankYouApp() {
  const params = new URLSearchParams(window.location.search);
  const firstName = params.get('name') || '';

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header hideCTA />

      {/* Hero Section - Same style as landing page */}
      <section className="relative pt-20 pb-8 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={`${import.meta.env.BASE_URL}assets/img/hero BG.webp`}
            alt="Elegant nonprofit gala event"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-blue-950/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-8 text-center">
          <div className="space-y-4">
            <div className="flex justify-center mb-2">
              <CheckCircle className="w-12 h-12 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Thanks for Reaching Out{firstName ? `, ${firstName}` : ''}
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl font-light text-blue-100 leading-snug">
              We're Excited to Connect
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Your inquiry is confirmed! Our team will be in touch shortly to coordinate a convenient time to discuss your event, your goals, and how we can help make it your most successful one yet.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200/30 to-transparent" />
      </section>

      {/* What to Expect Section - Same layout as FormSection on LP */}
      <section className="bg-gradient-to-b from-blue-50/30 to-stone-50/50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Steps */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 mb-4 leading-tight">
                  Here's What to Expect Next
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#427DBD] to-blue-400 mb-6" />
              </div>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#427DBD] to-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-stone-900 mb-2">A Quick Intro Email or Call</h3>
                    <p className="text-stone-600 leading-relaxed">
                      We'll reach out to align on your timeline, budget, and vision.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#427DBD] to-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-stone-900 mb-2">Free Strategy Call</h3>
                    <p className="text-stone-600 leading-relaxed">
                      If needed, we'll book a free strategy call with Daniela or Colleen to dive deeper into your goals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#427DBD] to-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-stone-900 mb-2">A Tailored Game Plan</h3>
                    <p className="text-stone-600 leading-relaxed">
                      From there, we'll provide a tailored game plan, whether you need full production or just a few extra hands.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex items-center justify-center">
              <div className="rounded-lg overflow-hidden shadow-xl border border-blue-100/50">
                <ImageWithFallback
                  src={`${import.meta.env.BASE_URL}assets/img/difference.jpg`}
                  alt="Vision Event Co. team at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />
      <ClientResultsSection />
      <Footer />
    </div>
  );
}
