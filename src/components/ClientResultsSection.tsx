import { Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef, useState, useEffect } from 'react';

export function ClientResultsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Vision took over the logistics so we could actually talk to donors during the event - and it resulted in us raising 3x more than expected.",
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
      result: "Highest level of professionalism, creativity, and care",
    },
    {
      quote: "They handled run of show, guest check-in, last-minute AV chaos - everything. Our team actually got to enjoy the event",
      client: "Kate R.",
      role: "Event Director",
      logo: null,
      result: "Our team got to enjoy the event",
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

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const slideWidth = container.children[0]?.clientWidth || 0;
      const gap = 24; // 6 * 4px (gap-6)
      const scrollPosition = (slideWidth + gap) * index;
      container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const slideWidth = container.children[0]?.clientWidth || 0;
      const gap = 24;
      const currentIndex = Math.round(scrollLeft / (slideWidth + gap));
      setCurrentSlide(currentIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

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
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide" ref={scrollContainerRef}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 md:w-96 snap-center"
              >
                <div className="h-full bg-white rounded-xl shadow-md transition-all duration-300 border border-blue-100/50 overflow-hidden flex flex-col">
                  <div className="p-8 relative flex-grow">
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
                  </div>

                  {/* Decorative Accent */}
                  <div className="h-1 bg-gradient-to-r from-[#427DBD] to-blue-400" />
                </div>
              </div>
            ))}
          </div>

          {/* Bullet Point Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`cursor-pointer w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-[#427DBD] w-8'
                    : 'bg-stone-300 hover:bg-stone-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}