import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Proposal = () => {
  const targetAudience = [
    "Para quienes buscan claridad en su propósito.",
    "Para quienes están listos para rediseñar su camino, reinventarse, crecer y vivir alineados con su esencia.",
    "Para quienes están listos para activar su potencial y diseñar su vida desde la intención.",
    "Para quienes quieren crear impacto con sentido y construir un legado auténtico."
  ];

  const services = [
    "Sesiones 1:1 de coaching transformacional.",
    "Acompañamiento en procesos de reinvención personal y profesional.",
    "Mentorías para líderes y equipos conscientes.",
    "Talleres y programas basados en el Método Estrella®: un sistema de 7 pilares para la expansión con sentido."
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#A7D3C1]/10 to-white">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Main Proposal */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6 sm:mb-8">
            Mi propuesta:
            <br />
            <span className="text-[#6C7A52] font-medium">Un sistema integral y transformador</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
            <p>
              Te acompaño a activar tu máximo potencial, a través de un método de 7
              pilares que une autoconocimiento, gestión del cambio, innovación,
              aprendizaje, liderazgo, bienestar y legado.
            </p>
            
            <p>
              Aquí encuentras un espacio donde lo humano, lo profesional y lo espiritual
              se encuentran para crear una vida alineada, sostenible y expansiva.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {/* Target Audience */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl font-medium text-[#6C7A52] mb-4 sm:mb-6">
              ¿Para quién es este espacio?
            </h3>
            
            <div className="space-y-3 sm:space-y-4">
              {targetAudience.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-[#4FEF8B] mt-1 flex-shrink-0" size={18} />
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How I Accompany */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl font-medium text-[#6C7A52] mb-4 sm:mb-6">
              Cómo te acompaño:
            </h3>
            
            <div className="space-y-3 sm:space-y-4">
              {services.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#D9A689] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              Reserva una sesión de claridad o descubre cómo trabajar juntos.
            </p>
            
            <a
              href="#contacto"
              className="inline-flex items-center bg-[#6C7A52] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-[#5a6644] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
            >
              Comienza tu transformación
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposal;