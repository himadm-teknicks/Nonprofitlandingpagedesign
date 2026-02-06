import { ImageWithFallback } from './figma/ImageWithFallback';

export function MeetTheTeamSection() {
  const teamMembers = [
    {
      name: 'Daniela Grafman, CSEP',
      title: 'Chief Amazement Officer',
      image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90JTIwYnVzaW5lc3MlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njk5NjQwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Colleen Burke',
      title: 'Director of Non Profit Events',
      image: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwcG9ydHJhaXQlMjBzbWlsZXxlbnwxfHx8fDE3NzAwNDUxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Allison Kulesza',
      title: 'Lead Producer, Non Profit Events',
      image: 'https://images.unsplash.com/photo-1765005204058-10418f5123c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MDA0NTE4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Abby Everhart',
      title: 'Lead Producer, Non Profit Events',
      image: 'https://images.unsplash.com/photo-1629507313712-f21468afdf2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDA0NTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Katie Rodriguez',
      title: 'Lead Producer, Non Profit Events',
      image: 'https://images.unsplash.com/photo-1720874129553-1d2e66076b16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVudHJlcHJlbmV1ciUyMHByb2Zlc3Npb25hbCUyMHBob3RvfGVufDF8fHx8MTc3MDA0NTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
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