import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { CheckCircleIcon } from './CustomIcons';

export function FormSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    organization: '',
    email: '',
    eventDate: '',
    message: '',
    captcha: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="form-section" className="bg-gradient-to-b from-blue-50/30 to-stone-50/50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Supporting Copy */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 mb-4 leading-tight">
                Here's What Happens After You Book
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#427DBD] to-blue-400 mb-6" />
            </div>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#427DBD] to-blue-500 rounded-full flex items-center justify-center text-white font-medium shadow-md">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-medium text-stone-900 mb-2">Quick Discovery Call</h3>
                  <p className="text-stone-600 leading-relaxed">
                    You'll meet with Daniela or Colleen to discuss your goals, gaps, and budget.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#427DBD] to-blue-500 rounded-full flex items-center justify-center text-white font-medium shadow-md">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-medium text-stone-900 mb-2">Custom Game Plan</h3>
                  <p className="text-stone-600 leading-relaxed">
                    We'll map out exactly where we can add value (and where we won't).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#427DBD] to-blue-500 rounded-full flex items-center justify-center text-white font-medium shadow-md">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-medium text-stone-900 mb-2">Clear Pricing</h3>
                  <p className="text-stone-600 leading-relaxed">
                    You'll know upfront what you're investing - and what you'll likely raise in return.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#427DBD] to-blue-500 rounded-full flex items-center justify-center text-white font-medium shadow-md">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-medium text-stone-900 mb-2">Execution or Support</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Whether you need full production or just a few hours of help, we step in as much (or as little) as needed.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Element */}
            <div className="pt-4 border-t border-stone-200">
              <div className="flex items-center gap-3 text-stone-600">
                <CheckCircleIcon className="w-5 h-5 text-[#427DBD] flex-shrink-0" />
                <p className="text-sm italic">
                  Trusted by leading nonprofits across NYC for high-impact fundraising events
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-lg shadow-xl p-8 lg:p-10 border border-blue-100/50">
            <h3 className="text-2xl md:text-3xl font-light text-stone-900 mb-6">
              Let's talk about your next event.
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 mb-2">
                  First Name <span className="text-[#427DBD]">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#427DBD] focus:border-transparent transition-shadow"
                  placeholder="Your first name"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-stone-700 mb-2">
                  Organization Name <span className="text-[#427DBD]">*</span>
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#427DBD] focus:border-transparent transition-shadow"
                  placeholder="Your nonprofit organization"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                  Email <span className="text-[#427DBD]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#427DBD] focus:border-transparent transition-shadow"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium text-stone-700 mb-2">
                  Date of Event <span className="text-stone-400 text-xs">(optional)</span>
                </label>
                <div className="relative">
                  <select
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#427DBD] focus:border-transparent transition-shadow appearance-none bg-white"
                  >
                    <option value="">Select a timeframe</option>
                    <option value="within-1-month">Within 1 month</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="12-plus-months">12+ months</option>
                    <option value="just-exploring">Just exploring</option>
                  </select>
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                  How can we help? <span className="text-[#427DBD]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-[#427DBD] focus:border-transparent transition-shadow resize-none"
                  placeholder="Tell us about your event goals and what support you're looking for..."
                />
              </div>

              {/* CAPTCHA */}
              <div className="flex items-start gap-3 p-4 border border-stone-200 rounded-md bg-stone-50">
                <input
                  type="checkbox"
                  id="captcha"
                  required
                  checked={formData.captcha}
                  onChange={(e) => setFormData({ ...formData, captcha: e.target.checked })}
                  className="mt-1 w-4 h-4 text-[#427DBD] border-stone-300 rounded focus:ring-[#427DBD]"
                />
                <label htmlFor="captcha" className="text-sm text-stone-600">
                  I'm not a robot (CAPTCHA verification)
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitted}
                className="cursor-pointer w-full bg-gradient-to-r from-[#427DBD] to-blue-500 hover:from-blue-600 hover:to-blue-600 text-white py-4 rounded-md font-medium transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitted ? 'Submitted!' : 'Book My Free Consultation'}
              </button>

              {/* Subtext */}
              <p className="text-center text-sm text-stone-600 pt-2">
                <span className="font-medium text-stone-900">81% of event participants become donors.</span>
                <br />
                Make your next event your most profitable yet.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}