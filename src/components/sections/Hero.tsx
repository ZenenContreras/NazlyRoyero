import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#A7D3C1]/10 to-[#D9A689]/10 pt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-10 sm:py-16 md:py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Claim */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-6 sm:mb-8 leading-tight">
            Activa tu máximo{' '}
            <span className="text-[#6C7A52] font-medium">potencial</span>.
            <br />
            Expande tu{' '}
            <span className="text-[#D9A689] font-medium">impacto</span>.
            <br />
            Crea con{' '}
            <span className="text-[#4FEF8B] font-medium">intención</span>.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 font-light leading-relaxed px-4 sm:px-0">
            Transforma tu camino para descubrir tu máximo potencial,
            <br className="hidden sm:block" />
            vivir con intención y crear con propósito.
          </p>

          {/* CTA Button */}
          <a
            href="#contacto"
            className="inline-flex items-center bg-[#6C7A52] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-[#5a6644] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group"
          >
            Comienza tu transformación
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;