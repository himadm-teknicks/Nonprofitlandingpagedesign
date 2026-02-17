import { Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SlidersIcon, GrowthIcon, ShieldIcon, SparkleIcon, MonitorIcon, AwardIcon } from './CustomIcons';

export function TrustSection() {
  const benefits = [
    {
      icon: SlidersIcon,
      title: 'À la carte services',
      description: 'Hire us for just what you need - no bloated packages or minimums.',
      hasCallout: false,
    },
    {
      icon: GrowthIcon,
      title: 'High fundraising ROI',
      description: 'Clients regularly raise 2–3x more—and often enough to cover our fees entirely. They also get their time back to focus on cultivation, not logistics.',
      statCallout: 'Over 75% of nonprofits still rely on in-person, relationship-driven fundraising. We help make those events your most valuable channel.',
      hasCallout: true,
    },
    {
      icon: ShieldIcon,
      title: 'Vendor Contract Savings',
      description: 'We renegotiate bad deals, cut surprise costs, and protect your budget.',
      quote: 'They helped us negotiate surprise costs with our venue and A/V—after we\'d already signed contracts. Wish we\'d brought them in sooner!',
      attribution: 'GrowNYC',
      hasCallout: true,
    },
    {
      icon: SparkleIcon,
      title: 'Full-Scope On-Site Management',
      description: 'We handle day-of execution from check-in to clean-up - including registration staffing, floor plan layout, timing cues, and real-time troubleshooting.',
      hasCallout: false,
    },
    {
      icon: MonitorIcon,
      title: 'In-person + virtual event experience',
      description: 'Seamless experience across formats - from 500-person galas to hybrid community gatherings.',
      quote: 'Everyone—whether they joined in person or online—felt connected, uplifted, and supported.',
      attribution: 'Lab/Shul',
      hasCallout: true,
    },
    {
      icon: AwardIcon,
      title: 'Proven nonprofit experience',
      description: 'We understand board approvals, compliance, and fundraising cycles.',
      hasCallout: false,
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-stone-50/50 to-blue-50/20 py-16 md:py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header with Image Accent */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 mb-6 leading-tight">
              Why Nonprofits Trust Vision Event Co.
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#427DBD] to-blue-400 mb-6" />
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
              The nonprofit space demands more than flawless logistics. It calls for a partner who understands your mission, your donors, and the high-stakes nature of fundraising events.
            </p>
          </div>
          
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src={`${import.meta.env.BASE_URL}assets/img/why trust vision.jpg`}
              alt="Professional nonprofit event"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent" />
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-blue-100/50">
              <div className="flex gap-5">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#427DBD] to-blue-500 rounded-xl flex items-center justify-center shadow-md">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-stone-900 mb-3 leading-snug">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  {benefit.description && (
                    <p className="text-sm text-stone-700 leading-relaxed mb-3">
                      {benefit.description}
                    </p>
                  )}

                  {/* Stat Callout */}
                  {benefit.hasCallout && benefit.statCallout && (
                    <div className="bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200/50 rounded-lg p-4 mb-3">
                      <p className="text-sm text-stone-700 leading-relaxed">
                        {benefit.statCallout}
                      </p>
                    </div>
                  )}

                  {/* Quote */}
                  {benefit.hasCallout && benefit.quote && (
                    <div className="border-l-4 border-[#427DBD] pl-4 py-2 bg-gradient-to-r from-blue-50/40 to-transparent rounded-r-md">
                      <p className="text-sm italic text-stone-700 mb-2 leading-relaxed">
                        "{benefit.quote}"
                      </p>
                      <p className="text-xs font-medium text-stone-900">
                        — {benefit.attribution}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Large Client Quote Callout with Image */}
        <div className="relative bg-gradient-to-br from-stone-800 via-stone-700 to-stone-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-5">
            {/* Quote Content */}
            <div className="relative z-10 p-6 md:p-6 flex flex-col justify-center md:col-span-3">
              {/* Decorative Quote Mark */}
              <div className="absolute top-2 left-2 opacity-10">
                <Quote className="w-12 h-12 text-blue-300" />
              </div>
              
              <div className="relative">
                <blockquote className="text-lg md:text-xl font-light text-white leading-relaxed mb-3">
                  "They intuitively understand our values and create an environment where every guest feels completely at ease."
                </blockquote>
                <cite className="not-italic text-transparent bg-gradient-to-r from-[#427DBD] to-blue-400 bg-clip-text font-medium text-sm">
                  — The Covenant Foundation
                </cite>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative h-32 md:h-48 md:col-span-2">
              <ImageWithFallback
                src={`${import.meta.env.BASE_URL}assets/img/testimonial.webp`}
                alt="Professional event planning"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-800 via-stone-800/60 to-transparent md:from-stone-800/90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}