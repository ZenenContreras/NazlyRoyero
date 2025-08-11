import { ArrowRight, Heart, BookOpen, Users, Leaf, Calendar, Sparkles, Home, ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const MethodCasaPage = () => {
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
      icon: Heart,
      title: "Conexión",
      subtitle: "El primer paso hacia la transformación",
      description: "La verdadera conexión va más allá de compartir espacio; se trata de compartir visiones, sueños y retos. Cuando conectamos genuinamente, activamos el propósito colectivo."
    },
    {
      icon: BookOpen,
      title: "Aprendizaje",
      subtitle: "La clave para evolucionar constantemente",
      description: "Aprender es transformar la experiencia en sabiduría. Un equipo que aprende unido, se fortalece y se reinventa una y otra vez."
    },
    {
      icon: Users,
      title: "Sinergia",
      subtitle: "El poder de lo colectivo",
      description: "La sinergia es la magia que surge cuando los talentos se combinan para crear algo que trasciende lo individual."
    },
    {
      icon: Leaf,
      title: "Adaptación",
      subtitle: "La habilidad para reinventarse",
      description: "Adaptarse es convertir el cambio en oportunidad. Es la flexibilidad que permite a personas y organizaciones mantenerse relevantes y crecer."
    }
  ];

  const services = [
    {
      title: "Programas de Transformación de Equipos",
      claim: "Conexiones que construyen equipos imparables.",
      description: "Fortalecer la confianza, mejorar la comunicación y alinear al equipo hacia objetivos medibles, claros y alcanzables.",
      achievements: [
        "Equipos cohesionados, con herramientas prácticas para evaluar su impacto, planificar mejor y generar resultados sostenibles.",
        "Confianza fortalecida y comunicación mejorada entre todos los miembros del equipo.",
        "Objetivos claros, medibles y alcanzables alineados con la visión organizacional."
      ],
      how: [
        "Talleres vivenciales con metodologías de planificación y monitoreo, para que los equipos no solo se integren, sino que aprendan a medir su propio avance.",
        "Ejercicios de gestión del conocimiento: cada sesión genera aprendizajes documentados y buenas prácticas que quedan para el equipo."
      ],
      cta: "¿Listo para transformar tu equipo?"
    },
    {
      title: "Mentoring Ejecutivo y de Liderazgo",
      claim: "Liderar es aprender a evolucionar.",
      description: "Acompañar a líderes para que gestionen con visión y métodos, integrando cambio, conocimiento y comunicación estratégica.",
      achievements: [
        "Líderes con visión estratégica y habilidades para movilizar equipos, sostener procesos de mejora continua y liderar con datos y resultados.",
        "Herramientas de planificación y seguimiento de metas, con indicadores claros para líderes.",
        "Capacidad para automatizar procesos clave que liberen tiempo y mejoren la eficiencia del equipo."
      ],
      how: [
        "Mentorías personalizadas incorporando modelos de gestión del cambio, gestión del conocimiento y comunicación estratégica.",
        "Introducción de herramientas de planificación y seguimiento de metas, con indicadores claros para líderes.",
        "Asesoría sobre cómo automatizar procesos clave que liberen tiempo y mejoren la eficiencia del equipo."
      ],
      cta: "Impulsa tu liderazgo ejecutivo."
    },
    {
      title: "Laboratorios de Innovación Colectiva",
      claim: "Cuando las ideas se encuentran, la innovación florece.",
      description: "Convertir retos en soluciones medibles y accionables, creando cultura de innovación y gestión del conocimiento.",
      achievements: [
        "Soluciones innovadoras listas para implementarse, con planes claros, responsables definidos y mecanismos de evaluación que garantizan impacto real.",
        "Cultura de innovación instalada en el equipo con herramientas de gestión del conocimiento.",
        "Procesos optimizados mediante principios de automatización aplicados estratégicamente."
      ],
      how: [
        "Facilitamos sesiones de co-creación aplicando herramientas de gestión del conocimiento para que las ideas se documenten y escalen.",
        "Incorporamos métodos de planificación ágil y tableros de seguimiento de indicadores para medir el avance de las soluciones creadas.",
        "Integramos principios de automatización para evaluar qué procesos pueden optimizarse."
      ],
      cta: "Activa la innovación en tu organización."
    },
    {
      title: "Acompañamiento en Procesos de Cambio Organizacional",
      claim: "Convertir el cambio en motor de crecimiento.",
      description: "Guiar a las organizaciones en procesos de transformación, asegurando la adaptación estratégica y el aprendizaje continuo.",
      achievements: [
        "Organizaciones ágiles, con procesos claros y eficientes, que aprenden de cada etapa de cambio y convierten ese aprendizaje en ventaja competitiva.",
        "Sistemas de monitoreo y evaluación implementados para medir el avance del cambio y generar reportes claros.",
        "Procesos clave automatizados para acelerar la transición y reducir fricciones organizacionales."
      ],
      how: [
        "Implementamos metodologías de gestión del cambio basadas en evidencia y buenas prácticas internacionales.",
        "Diseñamos sistemas de monitoreo y evaluación para medir el avance del cambio y generar reportes claros.",
        "Aplicamos técnicas de gestión del conocimiento para que los aprendizajes se integren al ADN organizacional.",
        "Identificamos procesos clave a automatizar para acelerar la transición y reducir fricciones."
      ],
      cta: "Transforma tu organización hoy."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section 
        ref={heroAnimation.ref}
        className={`py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#A7D3C1]/10 to-white transition-all duration-700 ease-out ${
          heroAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-[#6C7A52] via-[#4F8F8B] to-[#A7D3C1] bg-clip-text text-transparent">
              MÉTODO C.A.S.A.
            </span>
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed">
            <span className="text-[#6C7A52] font-semibold">🏠 Construye tu casa de transformación:</span>{" "}
            <span className="text-gray-700">donde cada equipo encuentra su</span>{" "}
            <span className="text-[#4F8F8B] font-bold italic">propósito, potencial y evolución</span>
          </h2>
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
            <div className="bg-gradient-to-br from-[#A7D3C1]/10 to-[#6C7A52]/5 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
              <img
                src="/images/metodoCasa/MetodoCASA.png"
                alt="Método C.A.S.A. - Conexión, Aprendizaje, Sinergia y Adaptación"
                className="w-full max-w-xs sm:max-w-sm mx-auto h-auto"
              />
              <p className="text-sm sm:text-base md:text-lg text-[#6C7A52] font-medium mt-4 sm:mt-6 italic">
                Un método integral que conecta personas, potencia aprendizajes, genera sinergias y facilita la adaptación
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
            En un mundo en constante cambio, las personas y organizaciones necesitan algo más que procesos: necesitan un lugar seguro para crecer. El método C.A.S.A. crea esa atmósfera donde las conexiones son profundas, el aprendizaje es continuo, la sinergia potencia talentos y la adaptación se convierte en motor de evolución.
          </p>
        </div>
      </section>

      {/* Four Pillars */}
      <section 
        ref={pillarsAnimation.ref}
        className={`py-8 sm:py-12 md:py-16 bg-gradient-to-br from-white to-[#A7D3C1]/5 transition-all duration-700 ease-out delay-200 ${
          pillarsAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#6C7A52] mb-4">
              Los Cuatro Pilares de C.A.S.A.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
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
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#6C7A52] rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#6C7A52] mb-1 sm:mb-2">
                        {pillar.title}
                      </h3>
                      <h4 className="text-sm sm:text-base md:text-lg text-[#4F8F8B] font-medium mb-2 sm:mb-3 md:mb-4">
                        {pillar.subtitle}
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                        {pillar.description}
                      </p>
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
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-3 sm:mb-4 md:mb-6">
            Cuando construimos una C.A.S.A. juntos —forjando conexiones sólidas, aprendiendo con intención, generando sinergias que potencian y adaptándonos con inteligencia— los equipos dejan de funcionar en automático y comienzan a crear resultados que dejan huella.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed italic">
            En esa C.A.S.A., cada aporte se convierte en valor, cada idea se transforma en acción y cada desafío impulsa una evolución que trasciende al equipo y transforma a toda la organización.
          </p>
        </div>
      </section>

      {/* Main CTA */}
      <section 
        ref={ctaAnimation.ref}
        className={`py-6 sm:py-8 md:py-12 lg:py-16 bg-gradient-to-br from-[#A7D3C1]/10 to-white transition-all duration-700 ease-out delay-300 ${
          ctaAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#6C7A52] mb-3 sm:mb-4 md:mb-6">
            ¿Quieres llevar a tu equipo u organización a un nuevo nivel?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 md:mb-8">
            Descubre cómo aplicar el método C.A.S.A. y agenda una sesión conmigo.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center bg-[#6C7A52] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-[#5a6644] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
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
              Servicios que potencian la evolución colectiva
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white to-[#A7D3C1]/5 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg border border-gray-100 transition-all duration-500 ease-out ${
                  servicesAnimation.isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: `${400 + index * 120}ms`
                }}
              >
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#6C7A52] mb-2 sm:mb-3 md:mb-4">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base md:text-lg text-[#4F8F8B] font-medium mb-3 sm:mb-4 md:mb-6 italic">
                  {service.claim}
                </p>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  {service.description}
                </p>

                {/* Sección desplegable ¿Qué lograrás? */}
                <div className="mb-4">
                  <button
                    onClick={() => toggleSection(index, 'achievements')}
                    className="flex items-center justify-between w-full text-left text-sm sm:text-base md:text-lg font-semibold text-[#6C7A52] mb-2 hover:text-[#4F8F8B] transition-colors"
                  >
                    ¿Qué lograrás?
                    {expandedSections[`${index}-achievements`] ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                  {expandedSections[`${index}-achievements`] && (
                    <ul className="space-y-2 text-xs sm:text-sm md:text-base text-gray-700 pl-4">
                      {service.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#4F8F8B] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
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
                    className="flex items-center justify-center bg-gray-100 text-[#6C7A52] px-4 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-gray-200 transition-all duration-300"
                  >
                    ¿Cómo lo hacemos?
                    {expandedSections[`${index}-how`] ? (
                      <ChevronUp className="ml-2" size={14} />
                    ) : (
                      <ChevronDown className="ml-2" size={14} />
                    )}
                  </button>
                  
                  <a
                    href="/contacto"
                    className="inline-flex items-center justify-center bg-[#4F8F8B] text-white px-4 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-[#6C7A52] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                  >
                    <Calendar className="mr-2" size={14} />
                    Agendar sesión
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                  </a>
                </div>

                {/* Sección desplegable Cómo lo hacemos */}
                {expandedSections[`${index}-how`] && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-[#6C7A52] mb-3">
                      ¿Cómo lo hacemos?
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                      {service.how.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#4F8F8B] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA específico del servicio */}
                <div className="mt-4 text-center">
                  <p className="text-sm sm:text-base md:text-lg font-medium text-[#6C7A52] mb-2">
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

export default MethodCasaPage;
