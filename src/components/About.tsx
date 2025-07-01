import React from 'react';

const About = () => {
  const pillars = [
    "El desarrollo humano, el aprendizaje constante y la reinvención.",
    "El equilibrio entre lo profesional, lo personal y lo espiritual.",
    "El compromiso con la intención, el propósito y el impacto con sentido."
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] bg-gradient-to-br from-[#D9A689]/20 to-[#A7D3C1]/20 rounded-3xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="w-24 h-24 bg-[#6C7A52]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-[#6C7A52] rounded-full"></div>
                </div>
                <p className="text-sm">Foto de Nazly</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#4FEF8B] rounded-full opacity-40"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#D9A689] rounded-full opacity-60"></div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              ¿Quién <span className="text-[#6C7A52] font-medium">soy</span>?
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Soy Nazly, coach y mentora en procesos de transformación personal y
                profesional. Acompaño a personas que están listas para rediseñar su camino, activar
                su máximo potencial y vivir con intención.
              </p>

              <p>
                He dedicado más de 15 años a liderar procesos de aprendizaje, cambio y
                gestión del conocimiento en organizaciones, equipos y personas. Hoy
                integro toda esa experiencia en un modelo que une desarrollo interno,
                estrategia personal y expansión consciente.
              </p>

              <p>
                Creo profundamente que cuando ordenamos nuestro mundo interno,
                podemos expandir nuestro impacto en el mundo externo. Mi propósito es
                acompañarte a transitar ese camino: desde la claridad hacia la expansión.
              </p>
            </div>

            {/* Pillars */}
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-[#6C7A52]">Mis pilares:</h3>
              
              <div className="space-y-4">
                {pillars.map((pillar, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#4FEF8B] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{pillar}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="bg-[#6C7A52]/10 p-6 rounded-2xl border-l-4 border-[#6C7A52]">
              <p className="text-lg text-[#6C7A52] font-medium italic leading-relaxed">
                "No se trata solo de cambiar. Se trata de crear una vida alineada con lo
                que eres, lo que deseas y el legado que quieres dejar."
              </p>
            </div>

            {/* Method Reference */}
            <div className="pt-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-medium text-[#6C7A52]">¿Cómo te acompaño?</span>
                <br />
                A través del Método Estrella®, un sistema de 7 pilares diseñado para guiar
                procesos de crecimiento profundo, sostenible y expansivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;