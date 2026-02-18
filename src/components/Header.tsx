import { useState, useEffect } from 'react';

interface HeaderProps {
  hideCTA?: boolean;
}

export function Header({ hideCTA }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    const formSection = document.getElementById('form-section');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}assets/img/vision-logo.webp`}
              alt="Vision Event Co."
              className={`h-12 w-auto transition-all ${
                isScrolled ? 'brightness-0' : 'brightness-0 invert'
              }`}
            />
          </div>

          {/* CTA Button */}
          {!hideCTA && (
            <button
              onClick={handleCTAClick}
              className={`cursor-pointer px-6 py-2.5 rounded-md font-medium transition-all duration-200 shadow-md hover:shadow-lg ${
                isScrolled
                  ? 'bg-gradient-to-r from-[#427DBD] to-blue-500 hover:from-blue-600 hover:to-blue-600 text-white'
                  : 'bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white'
              }`}
            >
              Book a Free Consultation
            </button>
          )}
        </div>
      </div>
    </header>
  );
}