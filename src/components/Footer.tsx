import { Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-blue-50/30 py-16 border-t border-blue-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light text-stone-900 mb-4">
              Vision Event Co.
            </h2>
            <p className="text-base text-stone-600 leading-relaxed">
              Nonprofit event planning for fundraising galas and events, with the precision and care of luxury weddings.
            </p>
          </div>

          {/* Divider */}
          <div className="w-20 h-1 bg-gradient-to-r from-[#427DBD] to-blue-400 mx-auto mb-10" />

          {/* Contact & Social */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
            {/* Email */}
            <a
              href="mailto:info@visioneventco.com"
              className="flex items-center gap-2 text-stone-700 hover:text-[#427DBD] transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>info@visioneventco.com</span>
            </a>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/visioneventco"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Instagram"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-sky-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-sky-200 transition-all duration-300 group-hover:scale-110">
                  <Instagram className="w-6 h-6 text-[#427DBD]" />
                </div>
              </a>

              <a
                href="https://facebook.com/visioneventco"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Facebook"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-sky-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-sky-200 transition-all duration-300 group-hover:scale-110">
                  <Facebook className="w-6 h-6 text-[#427DBD]" />
                </div>
              </a>

              <a
                href="https://linkedin.com/company/visioneventco"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="LinkedIn"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-sky-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-sky-200 transition-all duration-300 group-hover:scale-110">
                  <Linkedin className="w-6 h-6 text-[#427DBD]" />
                </div>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-10 pt-8 border-t border-blue-200">
            <p className="text-sm text-stone-500">
              © {new Date().getFullYear()} Vision Event Co. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}