import React from 'react';

const Introduction = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Este es un espacio para quienes están listos para rediseñar su camino.
                Para quienes saben que la transformación real empieza desde adentro,
                con claridad, orden y propósito.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Acompaño a profesionales, líderes, emprendedores y buscadores
                conscientes en procesos de crecimiento personal y profesional, que
                integran desarrollo interno, reinvención, bienestar y expansión.
              </p>
            </div>

            {/* Highlighted Quote */}
            <div className="bg-[#A7D3C1]/20 p-8 rounded-2xl border-l-4 border-[#6C7A52]">
              <p className="text-xl text-[#6C7A52] font-medium leading-relaxed">
                → Porque transformar tu vida no es solo un cambio. Es un camino de
                intención, propósito y expansión.
              </p>
            </div>
          </div>

          {/* Image/Video Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-[#D9A689]/20 to-[#A7D3C1]/20 rounded-3xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="w-24 h-24 bg-[#6C7A52]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-[#6C7A52] rounded-full"></div>
                </div>
                <p className="text-sm">Foto o Video</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#4FEF8B] rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#D9A689] rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;