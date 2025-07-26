import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Star, ChevronRight, User, Users, Lightbulb, Calendar, Send, MessageCircle } from 'lucide-react';

const HomePage = () => {
  const [activePillar, setActivePillar] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

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

  const aboutPillars = [
    "El desarrollo humano, el aprendizaje constante y la reinvención.",
    "El equilibrio entre lo profesional, lo personal y lo espiritual.",
    "El compromiso con la intención, el propósito y el impacto con sentido."
  ];

  const servicesList = [
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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

      {/* Introduction Section */}
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

      {/* Proposal Section */}
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

      {/* About Section */}
      <section id="sobre-mi" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] bg-gradient-to-br from-[#D9A689]/20 to-[#A7D3C1]/20 rounded-3xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#6C7A52]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#6C7A52] rounded-full"></div>
                  </div>
                  <p className="text-xs sm:text-sm">Foto de Nazly</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 bg-[#4FEF8B] rounded-full opacity-40"></div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-[#D9A689] rounded-full opacity-60"></div>
            </div>

            {/* Content */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900">
                ¿Quién <span className="text-[#6C7A52] font-medium">soy</span>?
              </h2>

              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
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
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-medium text-[#6C7A52]">Mis pilares:</h3>
                
                <div className="space-y-3 sm:space-y-4">
                  {aboutPillars.map((pillar, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#4FEF8B] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{pillar}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="bg-[#6C7A52]/10 p-4 sm:p-6 rounded-2xl border-l-4 border-[#6C7A52]">
                <p className="text-base sm:text-lg text-[#6C7A52] font-medium italic leading-relaxed">
                  "No se trata solo de cambiar. Se trata de crear una vida alineada con lo
                  que eres, lo que deseas y el legado que quieres dejar."
                </p>
              </div>

              {/* Method Reference */}
              <div className="pt-2 sm:pt-4">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
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

      {/* Method Section */}
      <section id="metodo" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#6C7A52]/5 to-[#A7D3C1]/10">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <Star className="text-[#D9A689] mr-2 sm:mr-3" size={32} />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900">
                Método <span className="text-[#6C7A52] font-medium">Estrella®</span>
              </h2>
              <Star className="text-[#D9A689] ml-2 sm:ml-3" size={32} />
            </div>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
              7 pilares para tu expansión con sentido.
            </p>
            
            <div className="max-w-4xl mx-auto text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                El Método Estrella® es un sistema integral que conecta tu desarrollo
                personal y profesional de manera consciente, ordenada y expansiva. Cada
                pilar es un eje esencial para construir una vida alineada con tu propósito,
                tus valores y tu visión de futuro.
              </p>
            </div>
          </div>

          {/* Interactive Pillars */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Star Visualization */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square bg-white rounded-3xl shadow-lg p-4 sm:p-6 md:p-8 flex items-center justify-center">
                <div className="relative w-full h-full max-w-80 max-h-80">
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
                        className={`absolute w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer transition-all duration-300 ${
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
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl font-medium text-[#6C7A52] mb-6 sm:mb-8">Los 7 pilares:</h3>
              
              <div className="space-y-3 sm:space-y-4">
                {pillars.map((pillar, index) => (
                  <div
                    key={index}
                    className={`p-4 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                      activePillar === index
                        ? 'bg-[#6C7A52] text-white shadow-lg'
                        : 'bg-white hover:bg-[#6C7A52]/5 shadow-md'
                    }`}
                    onClick={() => setActivePillar(index)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className={`text-base sm:text-lg font-medium mb-2 ${
                          activePillar === index ? 'text-white' : 'text-[#6C7A52]'
                        }`}>
                          {index + 1}. {pillar.title}
                        </h4>
                        {activePillar === index && (
                          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
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
          <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <h4 className="text-lg sm:text-xl font-medium text-[#6C7A52] mb-3 sm:mb-4">Diseñado para:</h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Acompañarte en procesos de cambio, crecimiento y reinvención.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg sm:text-xl font-medium text-[#6C7A52] mb-3 sm:mb-4">Integra:</h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Desarrollo personal y profesional de manera consciente.
              </p>
            </div>
            
            <div className="text-center sm:col-span-2 md:col-span-1">
              <h4 className="text-lg sm:text-xl font-medium text-[#6C7A52] mb-3 sm:mb-4">Convierte:</h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Tu potencial en impacto real y sostenible.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                <span className="font-medium text-[#6C7A52]">¿Cómo lo trabajamos?</span>
                <br />
                A través de procesos personalizados, sesiones 1:1, mentorías, talleres o
                programas grupales, según tu necesidad y tu momento vital.
              </p>
              
              <div className="bg-[#4FEF8B]/20 p-4 sm:p-6 rounded-xl mb-4 sm:mb-6">
                <p className="text-lg sm:text-xl text-[#6C7A52] font-medium italic">
                  Tu transformación comienza cuando eliges caminar con intención,
                  propósito y expansión.
                </p>
              </div>
              
              <a
                href="#servicios"
                className="inline-flex items-center bg-[#6C7A52] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-[#5a6644] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Descubre cómo trabajar juntos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6 sm:mb-8">
              ¿Cómo puedo <span className="text-[#6C7A52] font-medium">acompañarte</span>?
            </h2>
            
            <div className="max-w-4xl mx-auto text-base sm:text-lg text-gray-700 leading-relaxed space-y-3 sm:space-y-4">
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
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {servicesList.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-[#A7D3C1]/5 p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6C7A52] rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium text-[#6C7A52]">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#4FEF8B] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>

                  {service.quote && (
                    <div className="bg-[#6C7A52]/10 p-3 sm:p-4 rounded-xl">
                      <p className="text-[#6C7A52] font-medium italic text-xs sm:text-sm leading-relaxed">
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
            <div className="bg-gradient-to-r from-[#6C7A52]/10 to-[#A7D3C1]/10 p-6 sm:p-8 rounded-2xl max-w-4xl mx-auto mb-6 sm:mb-8">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                Cada camino es único. Por eso, construimos juntos el proceso que más se
                alinea a tu momento, tu visión y tu propósito.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="#contacto"
                className="inline-flex items-center bg-[#6C7A52] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-[#5a6644] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                Reserva tu sesión de claridad
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              
              <a
                href="#contacto"
                className="inline-flex items-center border-2 border-[#6C7A52] text-[#6C7A52] px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-[#6C7A52] hover:text-white transition-all duration-300"
              >
                Descubre tu proceso ideal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#A7D3C1]/10 to-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
              <MessageCircle className="text-[#6C7A52] mr-0 sm:mr-3 mb-2 sm:mb-0" size={32} />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900">
                <span className="text-[#6C7A52] font-medium">Conversemos</span>
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto text-base sm:text-lg text-gray-700 leading-relaxed space-y-3 sm:space-y-4">
              <p>
                Si este mensaje resonó contigo, si sientes que es momento de activar tu
                máximo potencial y caminar hacia tu expansión con intención y propósito,
                estoy aquí para acompañarte.
              </p>
              
              <p>
                Puedes escribirme, agendar una sesión de claridad o solicitar
                información sobre programas, mentorías o talleres.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg order-2 lg:order-1">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6C7A52] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6C7A52] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    ¿En qué te puedo acompañar? *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6C7A52] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="coaching-1-1">Coaching 1:1</option>
                    <option value="reinvencion">Programa de Reinvención</option>
                    <option value="mentoria">Mentoría para Líderes</option>
                    <option value="talleres">Talleres y Programas Grupales</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6C7A52] focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                    placeholder="Cuéntame un poco sobre tu momento actual y cómo te gustaría que te acompañe..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#6C7A52] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:bg-[#5a6644] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center group"
                >
                  <Send className="mr-2" size={18} />
                  Enviar mensaje
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              {/* Quote */}
              <div className="bg-gradient-to-r from-[#6C7A52] to-[#5a6644] p-6 sm:p-8 rounded-3xl text-white">
                <p className="text-lg sm:text-xl font-medium leading-relaxed mb-4 sm:mb-6">
                  "Tu transformación comienza con una conversación. Estoy aquí para
                  escucharte."
                </p>
                
                <a
                  href="#"
                  className="inline-flex items-center bg-[#4FEF8B] text-gray-900 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium hover:bg-[#3de076] transition-all duration-300 text-sm sm:text-base"
                >
                  Reserva tu sesión
                  <ArrowRight className="ml-2" size={16} />
                </a>
              </div>

              {/* Process Info */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg">
                <h3 className="text-lg sm:text-xl font-medium text-[#6C7A52] mb-4 sm:mb-6">
                  ¿Qué sucede después?
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#4FEF8B] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">Revisaré tu mensaje en las próximas 24-48 horas.</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#4FEF8B] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">Te contactaré para agendar una conversación inicial gratuita.</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#4FEF8B] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">Juntos definiremos el proceso que mejor se alinea a tu momento y necesidades.</p>
                  </div>
                </div>
              </div>

              {/* Final CTA */}
              <div className="bg-[#A7D3C1]/20 p-4 sm:p-6 rounded-2xl text-center">
                <p className="text-base sm:text-lg text-[#6C7A52] font-medium mb-3 sm:mb-4">
                  Tu transformación comienza con una conversación.
                </p>
                
                <a
                  href="#"
                  className="inline-flex items-center border-2 border-[#6C7A52] text-[#6C7A52] px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium hover:bg-[#6C7A52] hover:text-white transition-all duration-300 text-sm sm:text-base"
                >
                  Agenda tu sesión
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
