import React from 'react';
import { Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const menuItems = [
    'Inicio', 'Sobre mí', 'Método', 'Servicios', 'Blog', 'Podcast', 'Recursos', 'Contacto'
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer className="bg-[#6C7A52] text-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Logo and Tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4 sm:mb-6">
              <img 
                src="/images/LogoBlanco.png" 
                alt="Nazly Royero" 
                className="h-12 sm:h-14 md:h-16 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-lg sm:text-xl font-light text-white/90 mb-4 sm:mb-6">
              Intención. Propósito. Expansión.
            </p>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Acompañando procesos de transformación personal y profesional
              a través del Método Estrella®.
            </p>
          </div>

          {/* Quick Menu */}
          <div className="lg:col-span-1">
            <h3 className="text-base sm:text-lg font-medium mb-4 sm:mb-6">Navegación</h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm sm:text-base text-white/80 hover:text-[#4FEF8B] transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links and Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-medium mb-4 sm:mb-6">Conecta conmigo</h3>
            
            <div className="flex space-x-3 sm:space-x-4 mb-6 sm:mb-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#4FEF8B] hover:text-gray-900 transition-all duration-300"
                  >
                    <IconComponent size={16} />
                  </a>
                );
              })}
            </div>

            <div className="bg-white/10 p-3 sm:p-4 rounded-2xl">
              <p className="text-xs sm:text-sm text-white/90 mb-2 sm:mb-3">
                Suscríbete al newsletter INARA
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:bg-white/30 text-sm"
                />
                <button className="bg-[#4FEF8B] text-gray-900 px-3 py-2 rounded-lg hover:bg-[#3de076] transition-colors text-sm sm:text-xs">
                  <Mail size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 lg:space-x-6 text-xs sm:text-sm text-white/70 text-center md:text-left">
              <span>© 2024 Nazly Royero. Todos los derechos reservados.</span>
              <div className="flex space-x-3 sm:space-x-4">
                <a href="#" className="hover:text-white transition-colors">Aviso legal</a>
                <a href="#" className="hover:text-white transition-colors">Política de privacidad</a>
              </div>
            </div>
            
            <div className="text-xs sm:text-sm text-white/70 text-center">
              Método Estrella® es una marca registrada
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;