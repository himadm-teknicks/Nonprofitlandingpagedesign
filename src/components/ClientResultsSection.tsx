import { Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ClientResultsSection() {
  const testimonials = [
    {
      quote: "We raised 3x more than expected - and I actually got to spend time with donors instead of dealing with the AV guy.",
      client: "Marissa T.",
      role: "Executive Director",
      logo: null,
      result: "Raised 3x more than expected",
    },
    {
      quote: "From the big picture to the detailed execution, you handled everything with the highest level of professionalism, creativity, and care.",
      client: "Sarah",
      role: "Lab/Shul",
      logo: null,
      result: "Handled everything with professionalism, creativity, and care",
    },
    {
      quote: "After two years of DIY events, we tripled our revenue with Vision's support.",
      client: "Kate R.",
      role: "Event Director",
      logo: null,
      result: "Tripled revenue with Vision's support",
    },
    {
      quote: "Cut $15K in A/V and venue fees - while still delivering our best event yet.",
      client: "Susan M.",
      role: "Event Director",
      logo: null,
      result: "Cut $15K in A/V and venue fees",
    },
    {
      quote: "Vision's logistical and creative expertise took the event to the next level - and freed up our development team to focus on fundraising.",
      client: "GrowNYC",
      role: "",
      logo: null,
      result: "Freed up development team to focus on fundraising",
    },
    {
      quote: "Knowing that Daniela and her team are overseeing every aspect of our events gives us tremendous peace of mind and allows us to stay focused on our own mission.",
      client: "The Covenant Foundation",
      role: "",
      logo: null,
      result: "Peace of mind and focus on mission",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50/30 to-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 mb-6 leading-tight">
            Real Events. Real Impact.
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#427DBD] to-blue-400 mx-auto" />
        </div>

        {/* Scrollable Testimonials */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 md:w-96 snap-center"
              >
                <div className="h-full bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100/50 relative">
                  {/* Decorative Quote */}
                  <div className="absolute top-6 right-6 opacity-5">
                    <Quote className="w-16 h-16 text-[#427DBD]" />
                  </div>

                  <div className="relative z-10">
                    {/* Client Logo/Placeholder */}
                    <div className="flex items-center justify-center mb-4">
                      {testimonial.logo ? (
                        <img src={testimonial.logo} alt={testimonial.client} className="h-12 object-contain" />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#427DBD] to-blue-400 flex items-center justify-center">
                          <Quote className="w-6 h-6 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Client Name */}
                    <h4 className="font-medium text-stone-900 text-lg text-center mb-3">
                      {testimonial.client}
                    </h4>

                    {/* Result Brief - Above Quote */}
                    <p className="font-medium text-[#427DBD] text-sm text-center mb-6">
                      {testimonial.result}
                    </p>

                    {/* Quote */}
                    <blockquote className="text-base md:text-lg text-stone-700 leading-relaxed italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>

                  {/* Decorative Accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#427DBD] to-blue-400 rounded-b-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}