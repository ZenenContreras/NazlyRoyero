import React from 'react';
import { User, Users, Lightbulb, Calendar, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Coaching 1:1",
      description: "Procesos personalizados para trabajar claridad, reinvención, orden interno, bienestar y expansión.",
      details: [
        "Sesiones de 60 o 90 minutos, de acuerdo con tus necesidades.",
        "Acompañamiento por ciclos mensuales o procesos de mediano plazo (3-6 meses)."
      ],
      quote: "Un espacio seguro, profundo y transformador para que reconectes con tu esencia, tus recursos y tu visión."
    },
    {
      icon: Calendar,
      title: "Programa de Reinvención Consciente",
      description: "Programa estructurado (8 a 12 semanas) para acompañarte en procesos de cambio, reinvención o transición profesional.",
      details: [
        "Incluye sesiones, ejercicios, recursos, bitácora de acompañamiento y plan de acción personalizado."
      ],
      quote: "Para quienes están listos para rediseñar su camino desde la claridad y el propósito."
    },
    {
      icon: Users,
      title: "Mentoría para Líderes y Profesionales Conscientes",
      description: "Acompañamiento para líderes, ejecutivos, emprendedores o profesionales que desean integrar bienestar, impacto y crecimiento sostenible.",
      details: [
        "Desarrollo de habilidades de liderazgo consciente, gestión del cambio, comunicación efectiva y construcción de legado."
      ],
      quote: ""
    },
    {
      icon: Lightbulb,
      title: "Talleres, Conferencias y Programas Grupales",
      description: "Diseño y facilitación de espacios para equipos, organizaciones, comunidades o grupos de crecimiento personal.",
      details: [
        "Temáticas: autoconocimiento, liderazgo, bienestar, reinvención, propósito y expansión."
      ],
      quote: ""
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            ¿Cómo puedo <span className="text-[#6C7A52] font-medium">acompañarte</span>?
          </h2>
          
          <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              Te ofrezco espacios de transformación diseñados para que actives tu
              máximo potencial, gestiones el cambio con intención y crees impacto con
              propósito.
            </p>
            <p>
              Cada servicio está basado en el <span className="font-medium text-[#6C7A52]">Método Estrella®</span>, un sistema de 7
              pilares que integra desarrollo personal, profesional y expansión consciente.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-[#A7D3C1]/5 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#6C7A52] rounded-2xl flex items-center justify-center mr-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-medium text-[#6C7A52]">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#4FEF8B] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 text-sm leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>

                {service.quote && (
                  <div className="bg-[#6C7A52]/10 p-4 rounded-xl">
                    <p className="text-[#6C7A52] font-medium italic text-sm leading-relaxed">
                      "{service.quote}"
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing Message */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#6C7A52]/10 to-[#A7D3C1]/10 p-8 rounded-2xl max-w-4xl mx-auto mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Cada camino es único. Por eso, construimos juntos el proceso que más se
              alinea a tu momento, tu visión y tu propósito.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="inline-flex items-center bg-[#6C7A52] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#5a6644] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
            >
              Reserva tu sesión de claridad
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            
            <a
              href="#contacto"
              className="inline-flex items-center border-2 border-[#6C7A52] text-[#6C7A52] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#6C7A52] hover:text-white transition-all duration-300"
            >
              Descubre tu proceso ideal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;