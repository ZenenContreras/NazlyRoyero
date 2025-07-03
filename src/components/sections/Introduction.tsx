import React from 'react';

const Introduction = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Este es un espacio para quienes están listos para rediseñar su camino.
                Para quienes saben que la transformación real empieza desde adentro,
                con claridad, orden y propósito.
              </p>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Acompaño a profesionales, líderes, emprendedores y buscadores
                conscientes en procesos de crecimiento personal y profesional, que
                integran desarrollo interno, reinvención, bienestar y expansión.
              </p>
            </div>

            {/* Highlighted Quote */}
            <div className="bg-[#A7D3C1]/20 p-4 sm:p-6 md:p-8 rounded-2xl border-l-4 border-[#6C7A52]">
              <p className="text-lg sm:text-xl text-[#6C7A52] font-medium leading-relaxed">
                → Porque transformar tu vida no es solo un cambio. Es un camino de
                intención, propósito y expansión.
              </p>
            </div>
          </div>

          {/* Image/Video Placeholder */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/5] bg-gradient-to-br from-[#D9A689]/20 to-[#A7D3C1]/20 rounded-3xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#6C7A52]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#6C7A52] rounded-full"></div>
                </div>
                <p className="text-xs sm:text-sm">Foto o Video</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-[#4FEF8B] rounded-full opacity-60"></div>
            <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 bg-[#D9A689] rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;