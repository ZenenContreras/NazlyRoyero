import { ArrowRight, Star, Calendar } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const MethodPage = () => {
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
      title: "Sesiones de Acompañamiento Personal",
      claim: "Redescubre quién eres y diseña la vida que quieres vivir.",
      purpose: "Para personas que buscan claridad, propósito y dirección en momentos de cambio o reinvención personal y profesional.",
      how: [
        "Sesiones uno a uno donde exploramos los 7 pilares del Método Estrella.",
        "Herramientas de autoconocimiento, planificación estratégica personal y gestión del aprendizaje.",
        "Planes de acción diseñados a tu medida."
      ],
      result: "Un mapa claro de quién eres, a dónde vas y cómo convertir tu potencial en acciones concretas que generen bienestar, propósito e impacto."
    },
    {
      iconSrc: "/images/iconos/gestionCambio.png",
      title: "Programa de Reinvención y Cambio Consciente",
      claim: "Convierte la incertidumbre en tu mayor oportunidad de evolución.",
      purpose: "Para quienes atraviesan transiciones de carrera, emprendimientos nuevos o cambios significativos y necesitan un método para adaptarse y avanzar.",
      how: [
        "Aplicamos los pilares de Gestión del Cambio, Aprendizaje y Adaptación del Método Estrella.",
        "Diseñamos planes personalizados con hitos medibles y herramientas de gestión de conocimiento.",
        "Seguimiento continuo y mentoría para sostener la evolución."
      ],
      result: "Que vivas tu cambio con confianza, claridad y resiliencia, transformando desafíos en crecimiento tangible y sostenido."
    },
    {
      iconSrc: "/images/iconos/innovacion.png",
      title: "Laboratorios de Creatividad y Liderazgo Personal",
      claim: "Activa tu innovación y lidera desde tu autenticidad.",
      purpose: "Para personas que desean fortalecer su liderazgo, su capacidad creativa y su impacto en proyectos personales o profesionales.",
      how: [
        "Talleres prácticos para desbloquear creatividad e integrar innovación aplicada.",
        "Ejercicios de liderazgo consciente y trabajo colaborativo.",
        "Técnicas de gestión del conocimiento y evaluación de avances para impulsar resultados."
      ],
      result: "Una mentalidad innovadora, habilidades de liderazgo auténtico y proyectos con resultados visibles y sostenibles."
    },
    {
      iconSrc: "/images/iconos/sostenibilidad.png",
      title: "Plan de Bienestar y Legado Personal",
      claim: "Diseña una vida equilibrada que deje huella.",
      purpose: "Para quienes buscan integrar bienestar físico, emocional y profesional, y construir un legado que trascienda.",
      how: [
        "Acompañamiento personalizado para aplicar los pilares de Sostenibilidad, Bienestar Integral e Impacto.",
        "Herramientas de planificación y automatización personal para sostener hábitos.",
        "Seguimiento y evaluación para consolidar logros y diseñar el legado que deseas dejar."
      ],
      result: "Una vida con equilibrio, proyectos con impacto y una huella personal y profesional que inspire a otros."
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
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed">
            <span className="text-[#6C7A52] font-semibold">⭐ El método que impulsa tu expansión personal y profesional desde adentro</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            <span className="text-[#D9A689] font-medium">Autoconocimiento, Cambio, Creatividad, Aprendizaje, Liderazgo, Bienestar e Impacto</span>{" "}
            para construir una vida con propósito y resultados sostenibles.
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
                src="/images/metodoEstrella/metodoEstrella.png"
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
            El Método Estrella es un sistema integral que conecta tu desarrollo personal y profesional de manera consciente, ordenada y expansiva. Cada pilar es un eje esencial para construir una vida alineada con tu propósito, tus valores y tu visión de futuro.
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
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#6C7A52] mb-1 sm:mb-2">
                        {pillar.title}
                      </h3>
                      <h4 className="text-sm sm:text-base md:text-lg text-[#D9A689] font-medium mb-2 sm:mb-3 md:mb-4">
                        {pillar.subtitle}
                      </h4>
                      <div className="space-y-1 sm:space-y-2">
                        {pillar.points.map((point, pointIndex) => (
                          <div key={pointIndex} className="flex items-start space-x-2">
                            <span className="text-green-500 text-sm sm:text-base font-bold mt-0.5 flex-shrink-0"></span>
                            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
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
            href="#contacto"
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
              Servicios que impulsan tu expansión
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
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#6C7A52] flex-1">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-sm sm:text-base md:text-lg text-[#D9A689] font-medium mb-3 sm:mb-4 md:mb-6 italic">
                  {service.claim}
                </p>

                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <div>
                    <h4 className="text-xs sm:text-sm md:text-base font-semibold text-[#6C7A52] mb-1 sm:mb-2">
                      ¿Para qué sirve?
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                      {service.purpose}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm md:text-base font-semibold text-[#6C7A52] mb-1 sm:mb-2">
                      ¿Cómo lo hacemos?
                    </h4>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                      {service.how.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#D9A689] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm md:text-base font-semibold text-[#6C7A52] mb-1 sm:mb-2">
                      ¿Qué lograremos?
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                      {service.result}
                    </p>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 md:mt-8">
                  <a
                    href="#contacto"
                    className="inline-flex items-center bg-[#D9A689] text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-[#6C7A52] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                  >
                    <Calendar className="mr-1 sm:mr-2" size={14} />
                    Agendar una sesión
                    <ArrowRight className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" size={12} />
                  </a>
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