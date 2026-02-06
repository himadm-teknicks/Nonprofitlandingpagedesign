import { ImageWithFallback } from './figma/ImageWithFallback';

export function FeaturedSection() {
  const pressBadges = [
    {
      name: 'The New York Times',
      type: 'text',
    },
    {
      name: 'Vogue',
      type: 'text',
    },
    {
      name: 'Martha Stewart Weddings',
      type: 'text',
    },
    {
      name: 'Brides',
      type: 'text',
    },
    {
      name: 'The Knot',
      type: 'text',
    },
    {
      name: 'Brooklyn Magazine',
      type: 'text',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50/30 py-16 md:py-20 border-t border-blue-100/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-[#427DBD] font-medium mb-4">
            Featured In / Proven Expertise
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-stone-900 leading-relaxed max-w-4xl mx-auto mb-8">
            Vision Event Co's work has been recognized across leading industry publications - not just for weddings, but for the same excellence we bring to nonprofit and fundraising events.
          </h2>
        </div>

        {/* Press Badge Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center mb-12">
          {pressBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 group"
            >
              <div className="text-center">
                <p className="font-serif text-lg md:text-xl text-stone-800 group-hover:text-[#427DBD] transition-colors">
                  {badge.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Context Line */}
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-base md:text-lg text-stone-600 leading-relaxed italic">
            Though much of this recognition comes from high-end wedding planning, the same strategic execution, vendor coordination, and attention to detail drives ROI for your nonprofit's fundraising events.
          </p>
        </div>
      </div>
    </section>
  );
}