export function PricingSection() {
  const handleCTAClick = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-b from-blue-50/30 to-blue-50/20 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 mb-6 leading-tight">
            Transparent Pricing That Works for Nonprofits
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#427DBD] to-blue-400 mx-auto" />
        </div>

        {/* Text Content */}
        <div className="mb-10 space-y-6">
          <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
            We believe in the missions of the nonprofits we serve. That's why our services start as low as <span className="font-medium text-stone-900">$2,500</span> - and scale up only when needed. Whether you need help for a day, a week, or all year - we'll make sure you get maximum value per dollar.
          </p>
          <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
            Professionally executed live events often generate enough to offset production costs entirely. That's why we design our pricing to maximize your net fundraising ROI.
          </p>
        </div>

        {/* CTA Button */}
        <button 
          onClick={handleCTAClick}
          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#427DBD] to-blue-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Let's Talk About Your Budget
        </button>
      </div>
    </section>
  );
}