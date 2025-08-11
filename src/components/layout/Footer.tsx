import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const menuItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre mí', href: '/sobre-mi' },
    { name: 'Método Estrella', href: '/metodo-estrella' },
    { name: 'Método C.A.S.A', href: '/metodo-casa' },
    { name: 'Blog', href: '/blog' },
    { name: 'Podcast', href: '/podcast' },
    { name: 'Recursos', href: '/recursos' },
    { name: 'Contacto', href: '/contacto' }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/nazlyroyero', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nazlyroyero', label: 'LinkedIn' },
    { icon: 'tiktok', href: 'https://www.tiktok.com/@nazlyroyero', label: 'TikTok' },
    { icon: Mail, href: 'mailto:nazlytim@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-[#6C7A52]/90 backdrop-blur-sm text-white py-12 sm:py-16">
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
              a través del Método Estrella y Método C.A.S.A.
            </p>
          </div>

          {/* Quick Menu */}
          <div className="lg:col-span-1">
            <h3 className="text-base sm:text-lg font-medium mb-4 sm:mb-6">Navegación</h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="text-sm sm:text-base text-white/80 hover:text-[#f3bb9a] transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links and Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-medium mb-4 sm:mb-6">Conecta conmigo</h3>
            
            <div className="flex space-x-3 sm:space-x-4 mb-6 sm:mb-8">
              {socialLinks.map((social, index) => {
                if (social.icon === 'tiktok') {
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#f3bb9a] hover:text-white transition-all duration-300"
                    >
                      <img 
                        src="/images/iconos/tik-tok.png" 
                        alt="TikTok" 
                        className="w-4 h-4 sm:w-5 sm:h-5 filter brightness-0 invert"
                      />
                    </a>
                  );
                }
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#f3bb9a] hover:text-white transition-all duration-300"
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
                <button className="bg-[#f3bb9a] text-white px-3 py-2 rounded-lg hover:bg-[#f3bb9a]/90 transition-colors text-sm sm:text-xs">
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
              <span>© 2025 Nazly Royero. Todos los derechos reservados.</span>
              <div className="flex space-x-3 sm:space-x-4">
                <a href="#" className="hover:text-white transition-colors">Aviso legal</a>
                <a href="#" className="hover:text-white transition-colors">Política de privacidad</a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;