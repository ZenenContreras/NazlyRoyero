import React, { useEffect, useRef, useState } from 'react';
import { Heart, Star, Target, Users, BookOpen, Lightbulb } from 'lucide-react';

const AboutPage = () => {
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
          rootMargin: '0px 0px -30px 0px'
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
  const photoAnimation = useScrollAnimation();
  const contentAnimation = useScrollAnimation();
  const experienceAnimation = useScrollAnimation();
  const accompanyAnimation = useScrollAnimation();
  const pillarsAnimation = useScrollAnimation();
  const quoteAnimation = useScrollAnimation();

  const experiencePoints = [
    {
      icon: Target,
      text: "Formulación, monitoreo, evaluación y aprendizajes de proyectos a gran escala, garantizando la generación de resultados tangibles y sostenibles."
    },
    {
      icon: BookOpen,
      text: "Planificación estratégica y gestión del conocimiento, ayudando a instituciones y equipos a innovar, adaptarse al cambio e impulsar el aprendizaje constante."
    },
    {
      icon: Users,
      text: "Gestión del cambio, innovación y consolidación de equipos de alto desempeño, promoviendo culturas colaborativas, resilientes y orientadas a la acción."
    },
    {
      icon: Lightbulb,
      text: "Comunicación estratégica, facilitando diálogos efectivos entre diferentes sectores y niveles jerárquicos para potenciar el desarrollo de líderes y la expansión organizacional."
    }
  ];

  const pillars = [
    "El desarrollo humano, el aprendizaje constante y la reinvención.",
    "El equilibrio entre lo profesional y lo personal",
    "El compromiso con la intención, el propósito y el impacto con sentido."
  ];

  return (
    <div className="min-h-screen bg-white pt-20">      {/* Hero Section */}
      <section 
        ref={heroAnimation.ref}
        className={`py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#A7D3C1]/5 to-white transition-all duration-800 ease-out ${
          heroAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-[#6C7A52] via-[#4F8F8B] to-[#A7D3C1] bg-clip-text text-transparent">
              SOBRE MÍ
            </span>
          </h1>
          <div className="w-20 sm:w-32 h-1.5 bg-gradient-to-r from-[#D9A689] via-[#4FEF8B] to-[#A7D3C1] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Photo Section */}
            <div 
              ref={photoAnimation.ref}
              className={`order-1 lg:order-1 transition-all duration-800 ease-out delay-200 ${
                photoAnimation.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/sobreMi/sobreMi.jpeg"
                    alt="Nazly Royero - Mentora en transformación personal y organizacional"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                
                {/* Elementos decorativos */}
                <div className="absolute -top-4 -left-4 w-8 h-8 sm:w-12 sm:h-12 bg-[#4FEF8B] rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 sm:w-10 sm:h-10 bg-[#D9A689] rounded-full opacity-80"></div>
                <div className="absolute top-1/4 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-[#A7D3C1] rounded-full opacity-60"></div>
              </div>
            </div>

            {/* Content Section */}
            <div 
              ref={contentAnimation.ref}
              className={`order-2 lg:order-2 space-y-6 sm:space-y-8 transition-all duration-800 ease-out delay-300 ${
                contentAnimation.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-6'
              }`}
            >              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                <p>
                  Soy <span className="font-bold text-[#6C7A52] text-lg sm:text-xl">Nazly</span>, <span className="italic font-medium text-[#4F8F8B]">mentora en procesos de transformación personal, profesional y organizacional</span>. A lo largo de más de <span className="font-bold text-[#6C7A52] bg-[#6C7A52]/10 px-2 py-1 rounded-full">15 años</span> he forjado y liderado estrategias integrales en el sector privado, sector público y la cooperación internacional, acompañando a personas, equipos y organizaciones a alcanzar su <span className="font-semibold text-[#A7D3C1] italic">máximo nivel de impacto y alineación</span>.
                </p>

                <p>
                  He sido testigo directo de cómo el poder del <span className="font-bold text-[#6C7A52] italic">autoconocimiento</span>, la <span className="font-bold text-[#4F8F8B] italic">organización interior</span> y la <span className="font-bold text-[#A7D3C1] italic">conexión humana</span> se traducen en <span className="font-semibold text-[#6C7A52] bg-[#4FEF8B]/20 px-2 py-1 rounded-md">transformación real</span>, tanto en la manera de liderar como en la capacidad de dejar huella.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        ref={experienceAnimation.ref}
        className={`py-8 sm:py-12 md:py-16 bg-gradient-to-br from-white to-[#A7D3C1]/5 transition-all duration-800 ease-out delay-400 ${
          experienceAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-6'
        }`}
      >        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-[#6C7A52] to-[#4F8F8B] bg-clip-text text-transparent italic">
              Mi recorrido profesional
            </span>{" "}
            <span className="text-[#6C7A52] font-extrabold">abarca:</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {experiencePoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <div
                  key={index}
                  className={`bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 transition-all duration-600 ease-out hover:shadow-xl hover:-translate-y-1 ${
                    experienceAnimation.isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-6'
                  }`}
                  style={{
                    transitionDelay: `${500 + index * 150}ms`
                  }}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6C7A52] rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How I Accompany Section */}
      <section 
        ref={accompanyAnimation.ref}
        className={`py-8 sm:py-12 md:py-16 bg-white transition-all duration-800 ease-out delay-500 ${
          accompanyAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-6'
        }`}
      >        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              <span className="text-[#4F8F8B] italic">¿Cómo te</span>{" "}
              <span className="bg-gradient-to-r from-[#6C7A52] to-[#A7D3C1] bg-clip-text text-transparent font-extrabold">
                acompaño?
              </span>
            </h3>
          </div>

          <div className="bg-gradient-to-br from-[#6C7A52]/10 to-[#A7D3C1]/10 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-[#6C7A52]/20">
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                Hoy integro toda esa experiencia multidisciplinaria en <span className="italic font-medium text-[#6C7A52]">modelos propios de acompañamiento</span> —<a href="/metodo-estrella" className="hover:underline transition-all duration-300"><span className="font-bold text-[#6C7A52] bg-[#6C7A52]/10 px-2 py-1 rounded-md hover:bg-[#6C7A52]/20">Método Estrella</span></a> y <a href="/metodo-casa" className="hover:underline transition-all duration-300"><span className="font-bold text-[#4F8F8B] bg-[#4F8F8B]/10 px-2 py-1 rounded-md hover:bg-[#4F8F8B]/20">Método C.A.S.A.</span></a>— que fusionan desarrollo personal y profesional, fortaleciendo tanto los proyectos de vida individuales como colectivos.
              </p>

              <p>
                Mi misión es crear espacios donde <span className="font-bold text-[#6C7A52] italic">lo humano y lo profesional se encuentren</span> para impulsar vidas y organizaciones <span className="font-semibold text-[#4F8F8B]">auténticas, sostenibles y expansivas</span>.
              </p>

              <p>
                Creo profundamente que cuando <span className="font-bold text-[#6C7A52] bg-[#6C7A52]/10 px-2 py-1 rounded-md">ordenamos nuestro mundo interno</span>, podemos <span className="font-bold text-[#4F8F8B] bg-[#4F8F8B]/10 px-2 py-1 rounded-md">expandir nuestro impacto en el mundo externo</span>. Mi propósito es <span className="font-semibold text-[#A7D3C1] italic">guiarte en ese camino</span>, brindándote herramientas, una visión estratégica y el soporte necesario, para que puedas avanzar con claridad, crecer y dejar tu huella con intención.
              </p>
            </div>
          </div>
        </div>
      </section>      {/* Pillars Section */}
      <section 
        ref={pillarsAnimation.ref}
        className={`py-8 sm:py-12 md:py-16 lg:py-20 bg-[#6C7A52] text-white transition-all duration-800 ease-out delay-600 ${
          pillarsAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              <span className="text-[#4FEF8B] italic font-light">Mis</span>{" "}
              <span className="text-white font-extrabold tracking-wide">pilares</span>
            </h3>
            <div className="w-16 sm:w-24 h-1.5 bg-gradient-to-r from-[#4FEF8B] to-[#A7D3C1] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 sm:space-x-4 bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-white/20 transition-all duration-600 ease-out hover:bg-white/15 hover:-translate-y-1 ${
                  pillarsAnimation.isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-6'
                }`}
                style={{
                  transitionDelay: `${700 + index * 100}ms`
                }}
              >
                <div className="w-4 h-4 bg-gradient-to-r from-[#4FEF8B] to-[#A7D3C1] rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed font-medium">
                  {pillar}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Quote Section */}
      <section 
        ref={quoteAnimation.ref}
        className={`py-8 sm:py-12 md:py-16 lg:py-20 bg-white transition-all duration-800 ease-out delay-700 ${
          quoteAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative bg-gradient-to-br from-[#A7D3C1]/10 to-[#6C7A52]/5 p-8 sm:p-12 rounded-3xl shadow-xl border border-[#A7D3C1]/30">
            <Star className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 text-[#4FEF8B] opacity-70" size={32} />
            <Star className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 text-[#A7D3C1] opacity-70" size={28} />
            
            <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold italic leading-relaxed mb-6 text-[#6C7A52]">
              "No se trata solo de <span className="text-[#4F8F8B] font-extrabold">cambiar</span>. Se trata de crear una vida <span className="bg-gradient-to-r from-[#6C7A52] to-[#A7D3C1] bg-clip-text text-transparent font-extrabold">alineada</span> con lo que eres, lo que deseas y el <span className="text-[#4FEF8B] font-extrabold">legado</span> que quieres dejar."
            </blockquote>
            
            <div className="w-20 sm:w-32 h-1.5 bg-gradient-to-r from-[#4FEF8B] via-[#6C7A52] to-[#A7D3C1] mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
