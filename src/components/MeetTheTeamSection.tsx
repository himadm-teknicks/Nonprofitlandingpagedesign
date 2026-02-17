import { ImageWithFallback } from './figma/ImageWithFallback';

export function MeetTheTeamSection() {
  const teamMembers = [
    {
      name: 'Daniela Grafman, CSEP',
      title: 'Chief Amazement Officer',
      image: `${import.meta.env.BASE_URL}assets/img/daniela.webp`,
    },
    {
      name: 'Colleen Burke',
      title: 'Director of Non Profit Events',
      image: `${import.meta.env.BASE_URL}assets/img/colleen.webp`,
    },
    {
      name: 'Allison Kulesza',
      title: 'Lead Producer, Non Profit Events',
      image: `${import.meta.env.BASE_URL}assets/img/allison.webp`,
      objectPosition: 'center 20%',
    },
    {
      name: 'Abby Everhart',
      title: 'Lead Producer, Non Profit Events',
      image: `${import.meta.env.BASE_URL}assets/img/abby.webp`,
    },
    {
      name: 'Katie Rodriguez',
      title: 'Lead Producer, Non Profit Events',
      image: `${import.meta.env.BASE_URL}assets/img/katie.webp`,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50/30 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 mb-6 leading-tight">
            Meet the Team Behind the Magic
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#427DBD] to-blue-400 mx-auto" />
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-blue-100/50">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: member.objectPosition || 'top' }}
                  />
                </div>

                {/* Name and Title */}
                <div className="p-4">
                  <h3 className="text-lg font-medium text-stone-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {member.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}