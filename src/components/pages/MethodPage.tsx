import { ArrowRight, Star, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Componente para estrella de 7 puntas
const SevenPointStar = ({ className = "", size = 16 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l1.09 3.26L16 3.82l-1.18 3.18L18 8.64l-3.09.91L16 12.73l-2.64-2.18L12 14l-1.36-3.45L8 12.73l1.09-3.18L6 8.64l3.18-1.64L8 3.82l2.91 1.44L12 2z"/>
  </svg>
);

const MethodPage = () => {
  // Estado para controlar secciones desplegables
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});
  
  const toggleSection = (serviceIndex: number, section: string) => {
    const key = `${serviceIndex}-${section}`;
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Hook personalizado para animaciones de scroll
  const useScrollAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    return { ref, isVisible };
  };

  // Crear refs para cada sección
  const heroAnimation = useScrollAnimation();
  const logoAnimation = useScrollAnimation();
  const introAnimation = useScrollAnimation();
  const pillarsAnimation = useScrollAnimation();
  const closingAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();

  const pillars = [
    {
      iconSrc: "/images/iconos/autoConocimiento.png",
      title: "Autoconocimiento y Propósito",
      subtitle: "El punto de partida para todo lo que deseas construir",
      points: [
        "Descubre quién eres en esencia, cuáles son tus valores y tu verdad.",
        "Toma decisiones alineadas contigo y construye una vida auténtica, con dirección y sentido."
      ]
    },
    {
      iconSrc: "/images/iconos/gestionCambio.png",
      title: "Gestión del Cambio y Reinvención",
      subtitle: "Convierte cada transición en un nuevo comienzo",
      points: [
        "Navega el cambio con resiliencia y confianza en ti mismo.",
        "Transforma la incertidumbre en oportunidades de evolución y crecimiento."
      ]
    },
    {
      iconSrc: "/images/iconos/innovacion.png",
      title: "Innovación y Creatividad Aplicada",
      subtitle: "Tu capacidad creativa es tu mejor aliada para avanzar",
      points: [
        "Desbloquea tu creatividad para resolver, reinventarte y crecer.",
        "Aplica la innovación en tu vida personal y profesional para abrir nuevos caminos."
      ]
    },
    {
      iconSrc: "/images/iconos/gesionAprendizaje.png",
      title: "Gestión del Aprendizaje y Conocimiento",
      subtitle: "Aprender, desaprender y volver a aprender es tu ventaja competitiva",
      points: [
        "Activa tu mentalidad de crecimiento constante.",
        "Integra aprendizajes y conviértelos en acciones que te impulsen."
      ]
    },
    {
      iconSrc: "/images/iconos/liderazgoTrabajoEnEquipo.png",
      title: "Liderazgo y Trabajo en Equipo",
      subtitle: "Lidera tu vida, inspira a otros, crea vínculos sólidos",
      points: [
        "Lidera proyectos y relaciones desde la autenticidad y la inteligencia emocional.",
        "Fortalece tus habilidades de colaboración y comunicación para impactar más y mejor."
      ]
    },
    {
      iconSrc: "/images/iconos/sostenibilidad.png",
      title: "Sostenibilidad y Bienestar Integral",
      subtitle: "El verdadero éxito es sostenible cuando tú estás bien",
      points: [
        "Cultiva equilibrio físico, emocional, mental y espiritual.",
        "Diseña una vida que te nutra, te sostenga y te permita seguir creciendo en el tiempo."
      ]
    },
    {
      iconSrc: "/images/iconos/legadoImpacto.png",
      title: "Impacto y Legado",
      subtitle: "Tu huella puede transformar el mundo de quienes te rodean",
      points: [
        "Conecta con el sentido profundo de lo que haces cada día.",
        "Construye proyectos y relaciones con un legado que inspire e impacte positivamente."
      ]
    }
  ];

  const services = [
    {
      iconSrc: "/images/iconos/autoConocimiento.png",
      title: "Sesión Estrella de Transformación",
      claim: "Redescubre quién eres y diseña la vida que quieres vivir.",
      description: "Te acompaño de una sesión de mentoría para que encuentres claridad, propósito y dirección en momentos de cambio o reinvención personal y profesional, aplicando los 7 pilares del Método Estrella.",
      achievements: [
        "Un mapa claro de quién eres, a dónde quieres ir y cómo transformar tu potencial en acciones que generan bienestar, propósito e impacto visible.",
        "Autoconocimiento profundo y planificación estratégica personal.",
        "Planes de acción hechos a tu medida."
      ],
      how: [
        "Sesiones uno a uno donde exploramos los 7 pilares del Método Estrella.",
        "Herramientas de autoconocimiento y planificación estratégica personal.",
        "Planes de acción diseñados específicamente para ti."
      ],
      cta: "¿Listo para iniciar tu transformación?"
    },
    {
      iconSrc: "/images/iconos/gestionCambio.png",
      title: "Programa de Reinvención y Cambio Consciente",
      claim: "Convierte la incertidumbre en tu mayor oportunidad de evolución.",
      description: "Te guío durante transiciones profesionales o personales, nuevos emprendimientos o cambios significativos, transformado desafíos en crecimiento tangible y sostenido.",
      achievements: [
        "Afrontarás el cambio con confianza, resiliencia y claridad, convirtiendo desafíos en crecimiento tangible y sostenido.",
        "Plan personalizado con pasos medibles aplicando los pilares de gestión del cambio, aprendizaje y adaptación.",
        "Mentoría y seguimiento continuo para sostener tu evolucion."
      ],
      how: [
        "Aplicamos los pilares de Gestión del Cambio, Aprendizaje y Adaptación del Método Estrella.",
        "Diseñamos planes personalizados con hitos medibles.",
        "Seguimiento continuo y mentoría especializada."
      ],
      cta: "Impulsa tu próxima etapa hoy."
    },
    {
      iconSrc: "/images/iconos/innovacion.png",
      title: "Laboratorios de Creatividad y Liderazgo Personal",
      claim: "Activa tu innovación y lidera desde tu autenticidad.",
      description: "Espacios prácticos para fortalecer tu liderazgo auténtico, potenciar tu creatividad y tu impacto en proyectos personales y profesionales.",
      achievements: [
        "Desarrollarás una mentalidad innovadora, habilidades de liderazgo genuino y proyectos con resultados visibles y sostenibles.",
        "Ejericios prácticos para desbloquear tu creatividad e integrar innovación aplicada.",
        "Técnicas para fortalecer el liderazgo consciente, el trabajo colaborativo, la gestion del conocimiento y evaluacion de avances para impulsar resultados."
      ],
      how: [
        "Talleres prácticos para desbloquear creatividad e integrar innovación aplicada.",
        "Ejercicios de liderazgo consciente y trabajo colaborativo.",
        "Técnicas de gestión del conocimiento y evaluación de resultados."
      ],
      cta: "Haz crecer tu liderazgo ahora."
    },
    {
      iconSrc: "/images/iconos/sostenibilidad.png",
      title: "Plan de Bienestar y Legado Personal",
      claim: "Diseña una vida equilibrada que deje huella.",
      description: "Te acompaño mediante sesiones personalizadas para que puedas integrar bienestar físico, emocional y profesional para construir un legado que trascienda.",
      achievements: [
        "Una vida equilibrada, proyectos con impacto, y una huella personal y profesional inspiradora.",
        "Herramientas para hábitos sostenibles.",
        "Seguimiento para consolidar logros e impulsar tu legado."
      ],
      how: [
        "Acompañamiento personalizado para aplicar los pilares de Sostenibilidad, Bienestar Integral e Impacto.",
        "Herramientas de planificación y automatización personal para sostener hábitos.",
        "Seguimiento y evaluación para consolidar logros y diseñar tu legado."
      ],
      cta: "Empieza a construir tu legado hoy."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section 
        ref={heroAnimation.ref}
        className={`py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#D9A689]/10 to-white transition-all duration-700 ease-out ${
          heroAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-[#6C7A52] via-[#D9A689] to-[#4F8F8B] bg-clip-text text-transparent">
              MÉTODO ESTRELLA
            </span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed">
            <span className="text-[#6C7A52] font-semibold">El método que impulsa tu expansión personal y profesional desde adentro</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            <span className="text-[#D9A689] font-medium">Autoconocimiento, Cambio, Creatividad, Aprendizaje, Liderazgo, Bienestar e Impacto</span>{" "}
            para construir una vida con propósito y <span className="italic">legado</span>.
          </p>
        </div>

        {/* Logo Section */}
        <section 
          ref={logoAnimation.ref}
          className={`py-8 sm:py-12 bg-white transition-all duration-700 ease-out delay-100 ${
            logoAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-[#D9A689]/10 to-[#6C7A52]/5 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
              <img
                src="/images/metodoEstrella/metodoEstrellaa.jpg"
                alt="Método Estrella - 7 pilares para tu expansión personal y profesional"
                className="w-full max-w-xs sm:max-w-sm mx-auto h-auto"
              />
              <p className="text-sm sm:text-base md:text-lg text-[#6C7A52] font-medium mt-4 sm:mt-6 italic">
                Un sistema integral que conecta tu desarrollo personal y profesional de manera consciente, ordenada y expansiva
              </p>
            </div>
          </div>
        </section> 
      </section>

      {/* Introduction */}
      <section 
        ref={introAnimation.ref}
        className={`py-6 bg-white transition-all duration-700 ease-out delay-150 ${
          introAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center">
            Cada pilar es un eje esencial para construir una vida alineada con tu propósito, tus valores y tu visión de futuro.
          </p>
        </div>
      </section>

      {/* Seven Pillars */}
      <section 
        ref={pillarsAnimation.ref}
        className={`py-8 sm:py-12 md:py-16 bg-gradient-to-br from-white to-[#D9A689]/5 transition-all duration-700 ease-out delay-200 ${
          pillarsAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#6C7A52] mb-4">
              Los 7 pilares para tu expansión con sentido
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {pillars.map((pillar, index) => {
              return (
                <div
                  key={index}
                  className={`bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg border border-gray-100 transition-all duration-500 ease-out ${
                    pillarsAnimation.isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: `${300 + index * 100}ms`
                  }}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4 md:space-x-6">
                    <div className="flex-shrink-0">
                      <img
                        src={pillar.iconSrc}
                        alt={pillar.title}
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center mb-1 sm:mb-2">
                        <SevenPointStar className="text-[#f3bb9a] mr-2" size={20} />
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#6C7A52]">
                          {pillar.title}
                        </h3>
                      </div>
                      <h4 className="text-base sm:text-lg md:text-xl text-[#D9A689] font-medium mb-2 sm:mb-3 md:mb-4">
                        {pillar.subtitle}
                      </h4>
                      <div className="space-y-1 sm:space-y-2">
                        {pillar.points.map((point, pointIndex) => (
                          <div key={pointIndex} className="flex items-start space-x-2">
                            <span className="text-green-500 text-sm sm:text-base font-bold mt-0.5 flex-shrink-0"></span>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section 
        ref={closingAnimation.ref}
        className={`py-6 sm:py-8 md:py-12 lg:py-16 bg-[#6C7A52] text-white transition-all duration-700 ease-out delay-250 ${
          closingAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Star className="text-[#D9A689] mr-2" size={24} />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Transformación consciente</h3>
            <Star className="text-[#D9A689] ml-2" size={24} />
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-3 sm:mb-4 md:mb-6">
            El Método Estrella está diseñado para acompañarte en procesos de cambio, crecimiento y reinvención. Integra tu desarrollo personal y profesional de manera consciente y convierte tu potencial en un impacto real, profundo y sostenible.
          </p>
        </div>
      </section>

      {/* Main CTA */}
      <section 
        ref={ctaAnimation.ref}
        className={`py-6 sm:py-8 md:py-12 lg:py-16 bg-gradient-to-br from-[#D9A689]/10 to-white transition-all duration-700 ease-out delay-300 ${
          ctaAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#6C7A52] mb-3 sm:mb-4 md:mb-6">
            ¿Listo para tu expansión personal y profesional?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 md:mb-8">
            Descubre cómo aplicar el Método Estrella en tu vida y agenda una sesión conmigo.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center bg-[#D9A689] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-[#c49474] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
          >
            <Calendar className="mr-1 sm:mr-2" size={16} />
            Agendar una sesión
            <ArrowRight className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesAnimation.ref}
        className={`py-6 sm:py-8 md:py-12 lg:py-16 bg-white transition-all duration-700 ease-out delay-350 ${
          servicesAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#6C7A52] mb-4">
              Servicios que te impulsan
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white to-[#D9A689]/5 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg border border-gray-100 transition-all duration-500 ease-out ${
                  servicesAnimation.isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: `${400 + index * 120}ms`
                }}
              >
                <div className="flex items-start space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <img
                    src={service.iconSrc}
                    alt={service.title}
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain flex-shrink-0 mt-1"
                  />
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#6C7A52] flex-1">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-base sm:text-lg md:text-xl text-[#D9A689] font-medium mb-3 sm:mb-4 md:mb-6 italic">
                  {service.claim}
                </p>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  {service.description}
                </p>

                {/* Sección desplegable ¿Qué lograrás? */}
                <div className="mb-4">
                  <button
                    onClick={() => toggleSection(index, 'achievements')}
                    className="flex items-center justify-between w-full text-left text-base sm:text-lg md:text-xl font-semibold text-[#6C7A52] mb-2 hover:text-[#D9A689] transition-colors"
                  >
                    ¿Qué lograrás?
                    {expandedSections[`${index}-achievements`] ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                  {expandedSections[`${index}-achievements`] && (
                    <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-700 pl-4">
                      {service.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#D9A689] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
                  <button
                    onClick={() => toggleSection(index, 'how')}
                    className="flex items-center justify-center bg-gray-100 text-[#6C7A52] px-4 py-2 rounded-full text-sm sm:text-base font-medium hover:bg-gray-200 transition-all duration-300"
                  >
                    ¿Cómo lo hacemos?
                    {expandedSections[`${index}-how`] ? (
                      <ChevronUp className="ml-2" size={16} />
                    ) : (
                      <ChevronDown className="ml-2" size={16} />
                    )}
                  </button>
                  
                  <a
                    href="/contacto"
                    className="inline-flex items-center justify-center bg-[#D9A689] text-white px-4 py-2 rounded-full text-sm sm:text-base font-medium hover:bg-[#6C7A52] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                  >
                    <Calendar className="mr-2" size={16} />
                    Agendar sesión
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </a>
                </div>

                {/* Sección desplegable Cómo lo hacemos */}
                {expandedSections[`${index}-how`] && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                    <h4 className="text-base sm:text-lg font-semibold text-[#6C7A52] mb-3">
                      Cómo lo hacemos
                    </h4>
                    <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                      {service.how.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#D9A689] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA específico del servicio */}
                <div className="mt-4 text-center">
                  <p className="text-base sm:text-lg font-medium text-[#6C7A52] mb-2">
                    {service.cta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MethodPage;
