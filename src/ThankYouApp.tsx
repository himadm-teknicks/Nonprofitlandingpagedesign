import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CheckCircleIcon } from './components/CustomIcons';

export default function ThankYouApp() {
  const params = new URLSearchParams(window.location.search);
  const firstName = params.get('name') || '';
  const landingUrl = import.meta.env.BASE_URL;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header hideCTA />

      <main className="flex-1 flex items-center justify-center px-6 pt-20">
        <div className="max-w-lg text-center space-y-6">
          <CheckCircleIcon className="w-16 h-16 text-[#427DBD] mx-auto" />

          <h1 className="text-3xl md:text-4xl font-light text-stone-900">
            Thank you{firstName ? `, ${firstName}` : ''}!
          </h1>

          <p className="text-lg text-stone-600 leading-relaxed">
            We've received your request and will be in touch within one business
            day to schedule your free consultation.
          </p>

          <a
            href={landingUrl}
            className="cursor-pointer inline-block mt-4 px-8 py-3 bg-gradient-to-r from-[#427DBD] to-blue-500 hover:from-blue-600 hover:to-blue-600 text-white rounded-md font-medium transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Back to Home
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
