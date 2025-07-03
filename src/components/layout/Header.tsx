import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MenuItemType {
  name: string;
  href: string;
  isExternal: boolean;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const target = event.target as HTMLElement;
      const menu = document.getElementById('mobile-menu');
      const menuButton = target.closest('[aria-expanded]');
      
      if (isMenuOpen && menu && !menu.contains(target) && !menuButton) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleSectionNavigation = useCallback((href: string, e?: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e?.preventDefault();
      
      if (location.pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        window.location.href = `/${href}`;
      }
    }
    setIsMenuOpen(false);
  }, [location.pathname]);

  const menuItems: MenuItemType[] = [
    { name: 'Inicio', href: '/', isExternal: false },
    { name: 'Sobre mí', href: '#sobre-mi', isExternal: true },
    { name: 'Método', href: '#metodo', isExternal: true },
    { name: 'Servicios', href: '#servicios', isExternal: true },
    { name: 'Blog', href: '/blog', isExternal: false },
    { name: 'Podcast', href: '/podcast', isExternal: false },
    { name: 'Recursos', href: '/recursos', isExternal: false },
    { name: 'Contacto', href: '#contacto', isExternal: true },
  ];

  const isActivePage = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname === href) return true;
    if (href.startsWith('#') && location.hash === href && location.pathname === '/') return true;
    return false;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/images/3.png" 
              alt="Nazly Royero" 
              className="h-8 lg:h-9 w-auto opacity-90 hover:opacity-100 transition-opacity duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = isActivePage(item.href);
              
              if (item.isExternal) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSectionNavigation(item.href, e)}
                    className={`text-sm transition-colors duration-200 ${
                      isActive 
                        ? 'text-gray-900' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              } else {
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm transition-colors duration-200 ${
                      isActive 
                        ? 'text-gray-900' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              }
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <a
              href="#contacto"
              onClick={(e) => handleSectionNavigation('#contacto', e)}
              className="text-gray-700 hover:text-gray-900 text-sm px-4 py-2 border border-gray-200 hover:border-gray-300 rounded-full transition-all duration-200"
            >
              Contacto
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-5 h-5 relative">
              <span className={`absolute left-0 top-1.5 w-5 h-0.5 bg-current transition-all duration-200 ${
                isMenuOpen ? 'rotate-45 translate-y-1' : ''
              }`}></span>
              <span className={`absolute left-0 top-2.5 w-5 h-0.5 bg-current transition-all duration-200 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute left-0 top-3.5 w-5 h-0.5 bg-current transition-all duration-200 ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => {
                const isActive = isActivePage(item.href);
                
                if (item.isExternal) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleSectionNavigation(item.href, e)}
                      className={`px-3 py-2 text-base transition-colors duration-200 ${
                        isActive 
                          ? 'text-gray-900' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                } else {
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`px-3 py-2 text-base transition-colors duration-200 ${
                        isActive 
                          ? 'text-gray-900' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                }
              })}
              
              {/* Mobile CTA */}
              <div className="pt-3 mt-2 border-t border-gray-100">
                <a
                  href="#contacto"
                  onClick={(e) => handleSectionNavigation('#contacto', e)}
                  className="block text-center px-3 py-2 text-gray-700 hover:text-gray-900 text-base border border-gray-200 hover:border-gray-300 rounded-full transition-all duration-200 mx-3"
                >
                  Contacto
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Mobile overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/5 z-[-1]"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
}
