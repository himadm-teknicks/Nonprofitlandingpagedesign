import { ImageWithFallback } from './figma/ImageWithFallback';
import { ModularIcon, WeddingRingsIcon, TargetIcon } from './CustomIcons';

export function DifferentiatorsSection() {
  const differentiators = [
    {
      icon: ModularIcon,
      title: 'Modular Service Model',
      description: 'Hire us for just one piece or full production - no minimum scope, no unnecessary upsells.',
    },
    {
      icon: WeddingRingsIcon,
      title: 'Wedding-Grade Service Standards',
      description: 'We bring the same polish, precision, and high-touch experience we deliver at luxury weddings to your nonprofit event.',
    },
    {
      icon: TargetIcon,
      title: 'Results-Driven Planning',
      description: "We don't just make events pretty - we help make them profitable.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 mb-6 leading-tight">
            What Makes Vision Event Co. Different?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#427DBD] to-blue-400 mx-auto" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Stacked Badges */}
          <div className="space-y-6">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-blue-100/50"
                >
                  <div className="flex gap-4 items-start">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-sky-100">
                        <Icon className="w-8 h-8 text-[#427DBD]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-medium text-stone-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-base md:text-lg text-stone-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Image */}
          <div className="relative h-full min-h-[500px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="assets/img/difference.jpg"
              alt="Professional gala venue"
              className="w-full h-full object-cover"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}