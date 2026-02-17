import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Calendar } from 'lucide-react';

export function FeaturedSection() {
  const clients = [
    {
      name: 'The Covenant Foundation',
      imageName: 'covenant foundation',
      image: `${import.meta.env.BASE_URL}assets/img/covenant foundation.svg`,
      event: 'Annual Dinner + Breakfast Symposium',
      guests: '2-Day Event, 400 Guests',
      services: [
        'Multiple Receptions',
        'Award Program',
        'Performances',
        'Speaker Management',
        'Workshop Breakouts',
        'Inventory Management',
        'Travel Coordination',
      ],
    },
    {
      name: 'GrowNYC',
      imageName: 'grownyc',
      image: `${import.meta.env.BASE_URL}assets/img/grownyc.png`,
      event: 'Annual Fundraising Gala',
      guests: '300 Guests',
      services: [
        'Dinner',
        'Venue Sourcing',
        'Registration Management',
        'Vendor Sourcing',
        'Live Auction Coordination',
        'Sponsor Logistics',
        'Favor Distribution',
      ],
    },
    {
      name: 'The Eagle Academy Foundation',
      imageName: 'eagleacademy',
      image: `${import.meta.env.BASE_URL}assets/img/eagleacademy.png`,
      event: '20th Anniversary Fundraising Gala',
      guests: '500 Guests',
      services: [
        'Dinner',
        'Event Software Configuration',
        'Live Auction Coordination',
        'Vendor Sourcing',
        'Guest Communication',
        'Program Development',
        'Marketing Strategy',
      ],
    },
    {
      name: 'Melee the Show',
      imageName: 'melee logo',
      image: `${import.meta.env.BASE_URL}assets/img/melee logo.webp`,
      event: 'Bi-Annual Trade Show',
      guests: '3-Day Event, 600 Guests',
      services: [
        'Registration Management',
        'Exhibitor Coordination',
        'Reception Execution',
        'Vendor Consulting',
        'Food & Beverage Selection',
        'On-Site Management',
      ],
    },
    {
      name: 'The Alfred E. Smith Memorial Foundation',
      imageName: 'alfredsmith',
      image: `${import.meta.env.BASE_URL}assets/img/alfredsmith.png`,
      event: 'Annual Fundraising Dinner',
      guests: '800 Guests',
      services: [
        'On-Site Support',
        'Inventory Management',
        'Volunteer Coordination',
        'Event Concierge',
      ],
    },
    {
      name: 'Lab/Shul',
      imageName: 'labshul',
      image: `${import.meta.env.BASE_URL}assets/img/labshul.png`,
      event: 'Annual Gala + High Holidays Celebration',
      guests: '4-Day Event, 300–900 Guests',
      services: [
        'Multiple Breakouts',
        'Award Program',
        'Performer Coordination',
        'Vendor Sourcing',
        'Inventory Management',
        'Registration Logistics',
      ],
    },
    {
      name: 'Vellore Christian Medical College',
      imageName: 'vellore',
      image: `${import.meta.env.BASE_URL}assets/img/vellore.jpg`,
      event: 'Annual Fundraising Gala',
      guests: '300 Guests',
      services: [
        'Dinner',
        'Live Auction',
        'Food & Beverage Selection',
        'Program Development',
        'Vendor Sourcing',
        'Travel Coordination',
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50/30 py-16 md:py-20 border-t border-blue-100/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-[#427DBD] font-medium mb-4">
            Trusted by NYC Nonprofits
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-stone-900 leading-relaxed max-w-4xl mx-auto">
            From annual galas to multi-day symposiums, Vision Event Co. supports mission-driven organizations with high-impact events tailored for fundraising success.
          </h2>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md transition-all duration-300 border border-blue-100/50 overflow-hidden group flex flex-col"
            >
              {/* Logo Placeholder */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 border-b border-blue-100/50">
                <div className="w-full h-24 flex items-center justify-center">
                  <ImageWithFallback
                    src={client.image}
                    alt={client.name}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow">
                {/* Organization Name */}
                <h3 className="font-medium text-stone-900 text-xl mb-4">
                  {client.name}
                </h3>

                {/* Event Info */}
                <div className="mb-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-[#427DBD] mt-1 flex-shrink-0" />
                    <p className="text-sm text-stone-700">
                      <span className="font-medium">Event:</span> {client.event}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-[#427DBD] mt-1 flex-shrink-0" />
                    <p className="text-sm text-stone-700">
                      <span className="font-medium">Guests:</span> {client.guests}
                    </p>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <p className="text-sm font-medium text-[#427DBD] mb-2">
                    Services Delivered:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {client.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="inline-block px-3 py-1 text-xs bg-blue-50 text-stone-700 rounded-full border border-blue-100"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="h-1 bg-gradient-to-r from-[#427DBD] to-blue-400 mt-auto" />
            </div>
          ))}
        </div>

        {/* Context Line */}
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-base md:text-lg text-stone-600 leading-relaxed italic">
            These organizations trusted Vision Event Co. to lead their most important nights of the year. Their internal teams focused on donors, not details.
          </p>
        </div>
      </div>
    </section>
  );
}