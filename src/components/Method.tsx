import React, { useState } from 'react';
import { Star, ChevronRight } from 'lucide-react';

const Method = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      title: "Autoconocimiento y Propósito",
      description: "Conectar con quién eres, tus valores y tu esencia. Tomar decisiones alineadas y construir desde lo auténtico."
    },
    {
      title: "Gestión del Cambio y Reinvención",
      description: "Navegar las transiciones con resiliencia y confianza. Convertir la incertidumbre en oportunidad y evolución."
    },
    {
      title: "Innovación y Creatividad Aplicada",
      description: "Desbloquear tu capacidad creativa para resolver, reinventar y crecer. Aplicar la innovación en tu vida y en tus proyectos."
    },
    {
      title: "Gestión del Aprendizaje y Conocimiento",
      description: "Activar la mentalidad de crecimiento. Aprender, desaprender y reaprender de manera continua y efectiva."
    },
    {
      title: "Liderazgo y Trabajo en Equipo",
      description: "Liderar tu vida, tus proyectos y tus relaciones desde la autenticidad y la inteligencia emocional. Fortalecer habilidades de colaboración, comunicación y gestión consciente."
    },
    {
      title: "Sostenibilidad y Bienestar Integral",
      description: "Cultivar el equilibrio físico, emocional, mental y espiritual. Diseñar una vida sostenible que te nutra y te sostenga en el tiempo."
    },
    {
      title: "Impacto y Legado",
      description: "Conectar con el sentido profundo de lo que haces. Construir proyectos, relaciones y un legado con impacto positivo y propósito."
    }
  ];

  return (
    <section id="metodo" className="py-20 bg-gradient-to-br from-[#6C7A52]/5 to-[#A7D3C1]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Star className="text-[#D9A689] mr-3" size={40} />
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Método <span className="text-[#6C7A52] font-medium">Estrella®</span>
            </h2>
            <Star className="text-[#D9A689] ml-3" size={40} />
          </div>
          
          <p className="text-xl text-gray-600 mb-8">
            7 pilares para tu expansión con sentido.
          </p>
          
          <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p>
              El Método Estrella® es un sistema integral que conecta tu desarrollo
              personal y profesional de manera consciente, ordenada y expansiva. Cada
              pilar es un eje esencial para construir una vida alineada con tu propósito,
              tus valores y tu visión de futuro.
            </p>
          </div>
        </div>

        {/* Interactive Pillars */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Star Visualization */}
          <div className="relative">
            <div className="aspect-square bg-white rounded-3xl shadow-lg p-8 flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Star shape with 7 points */}
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {pillars.map((_, index) => {
                    const angle = (index * 360) / 7 - 90;
                    const radian = (angle * Math.PI) / 180;
                    const x = 100 + 70 * Math.cos(radian);
                    const y = 100 + 70 * Math.sin(radian);
                    
                    return (
                      <circle
                        key={index}
                        cx={x}
                        cy={y}
                        r="12"
                        className={`cursor-pointer transition-all duration-300 ${
                          activePillar === index
                            ? 'fill-[#6C7A52]'
                            : 'fill-[#D9A689] hover:fill-[#6C7A52]'
                        }`}
                        onClick={() => setActivePillar(index)}
                      />
                    );
                  })}
                  
                  {/* Center star */}
                  <circle
                    cx="100"
                    cy="100"
                    r="20"
                    className="fill-[#4FEF8B]"
                  />
                  
                  {/* Connecting lines */}
                  {pillars.map((_, index) => {
                    const angle = (index * 360) / 7 - 90;
                    const radian = (angle * Math.PI) / 180;
                    const x = 100 + 70 * Math.cos(radian);
                    const y = 100 + 70 * Math.sin(radian);
                    
                    return (
                      <line
                        key={index}
                        x1="100"
                        y1="100"
                        x2={x}
                        y2={y}
                        className={`transition-all duration-300 ${
                          activePillar === index
                            ? 'stroke-[#6C7A52] stroke-2'
                            : 'stroke-[#D9A689] stroke-1'
                        }`}
                      />
                    );
                  })}
                </svg>
                
                {/* Pillar numbers */}
                {pillars.map((_, index) => {
                  const angle = (index * 360) / 7 - 90;
                  const radian = (angle * Math.PI) / 180;
                  const x = 50 + 35 * Math.cos(radian);
                  const y = 50 + 35 * Math.sin(radian);
                  
                  return (
                    <div
                      key={index}
                      className={`absolute w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer transition-all duration-300 ${
                        activePillar === index
                          ? 'bg-[#6C7A52] text-white'
                          : 'bg-[#D9A689] text-white hover:bg-[#6C7A52]'
                      }`}
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      onClick={() => setActivePillar(index)}
                    >
                      {index + 1}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Pillar Details */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-[#6C7A52] mb-8">Los 7 pilares:</h3>
            
            <div className="space-y-4">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activePillar === index
                      ? 'bg-[#6C7A52] text-white shadow-lg'
                      : 'bg-white hover:bg-[#6C7A52]/5 shadow-md'
                  }`}
                  onClick={() => setActivePillar(index)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className={`text-lg font-medium mb-2 ${
                        activePillar === index ? 'text-white' : 'text-[#6C7A52]'
                      }`}>
                        {index + 1}. {pillar.title}
                      </h4>
                      {activePillar === index && (
                        <p className="text-white/90 leading-relaxed">
                          {pillar.description}
                        </p>
                      )}
                    </div>
                    <ChevronRight
                      className={`ml-4 transition-transform duration-300 ${
                        activePillar === index ? 'rotate-90 text-white' : 'text-[#6C7A52]'
                      }`}
                      size={20}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Method Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h4 className="text-xl font-medium text-[#6C7A52] mb-4">Diseñado para:</h4>
            <p className="text-gray-700 leading-relaxed">
              Acompañarte en procesos de cambio, crecimiento y reinvención.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-xl font-medium text-[#6C7A52] mb-4">Integra:</h4>
            <p className="text-gray-700 leading-relaxed">
              Desarrollo personal y profesional de manera consciente.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-xl font-medium text-[#6C7A52] mb-4">Convierte:</h4>
            <p className="text-gray-700 leading-relaxed">
              Tu potencial en impacto real y sostenible.
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <span className="font-medium text-[#6C7A52]">¿Cómo lo trabajamos?</span>
              <br />
              A través de procesos personalizados, sesiones 1:1, mentorías, talleres o
              programas grupales, según tu necesidad y tu momento vital.
            </p>
            
            <div className="bg-[#4FEF8B]/20 p-6 rounded-xl mb-6">
              <p className="text-xl text-[#6C7A52] font-medium italic">
                Tu transformación comienza cuando eliges caminar con intención,
                propósito y expansión.
              </p>
            </div>
            
            <a
              href="#servicios"
              className="inline-flex items-center bg-[#6C7A52] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#5a6644] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Descubre cómo trabajar juntos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;