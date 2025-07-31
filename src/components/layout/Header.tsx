import { useState, useEffect, useCallback } from 'react';
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
  }, []);  const menuItems: MenuItemType[] = [
    { name: 'SOBRE MÍ', href: '/sobre-mi', isExternal: false },
    { name: 'MÉTODO ESTRELLA', href: '/metodo-estrella', isExternal: false },
    { name: 'MÉTODO C.A.S.A', href: '/metodo-casa', isExternal: false },
    { name: 'BLOG', href: '/blog', isExternal: false },
    { name: 'PODCAST', href: '/podcast', isExternal: false },
    { name: 'RECURSOS', href: '/recursos', isExternal: false },
    { name: 'CONVERSEMOS', href: '/contacto', isExternal: false },  ];

  const isActivePage = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname === href) return true;
    return false;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#6C7A52]/80 backdrop-blur-sm shadow-lg' 
        : 'bg-[#6C7A52]/60 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center"> 
            <img 
              src="/images/LogoBlanco.png" 
              alt="Nazly Royero" 
              className="h-10 lg:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity duration-200"
            />
          </Link>          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => {
              const isActive = isActivePage(item.href);
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-xs font-medium tracking-wide transition-colors duration-200 ${
                    isActive 
                      ? 'text-[#D9A689]' 
                      : 'text-white hover:text-[#D9A689]'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA - LOGIN */}
          <div className="hidden lg:flex">
            <Link
              to="/login"
              className="text-white hover:text-[#D9A689] text-xs font-medium tracking-wide px-4 py-2 border border-white/30 hover:border-[#D9A689] rounded-full transition-all duration-200"
            >
              LOGIN
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white hover:text-[#D9A689] transition-colors duration-200"
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
          <div className="py-4 border-t border-white/20">            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => {
                const isActive = isActivePage(item.href);
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                      isActive 
                        ? 'text-[#D9A689]' 
                        : 'text-white hover:text-[#D9A689]'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              
              {/* Mobile CTA - LOGIN */}
              <div className="pt-3 mt-2 border-t border-white/20">
                <Link
                  to="/login"
                  className="block text-center px-3 py-2 text-white hover:text-[#D9A689] text-sm font-medium tracking-wide border border-white/30 hover:border-[#D9A689] rounded-full transition-all duration-200 mx-3"
                >
                  LOGIN
                </Link>
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
