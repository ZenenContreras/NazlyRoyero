import React from 'react';
import { Download, Mail, ArrowRight, BookOpen, Video, FileText } from 'lucide-react';

const ResourcesPage = () => {
  const resources = [
    {
      id: 1,
      title: "El Poder de Reinventarse con Intención y Sentido",
      type: "Libro disponible",
      description: "Una guía completa para transformar tu vida con propósito y crear cambios duraderos desde la conciencia y la intención.",
      icon: BookOpen,
      downloadLink: "#",
      category: "Libro",
      image: "/images/recursos/LibroElpoder.png",
      actions: [
        { platform: "Amazon", link: "#", color: "#FF9900" },
        { platform: "Hotmart", link: "#", color: "#00C853" }
      ]
    },
    {
      id: 2,
      title: "Newsletter semanal",
      type: "Reflexiones y herramientas",
      description: "Recibe cada semana contenido exclusivo con reflexiones, ejercicios prácticos y herramientas para tu transformación.",
      icon: Mail,
      downloadLink: "#",
      category: "Email",
      image: "/images/recursos/newsletter.PNG"
    },
    {
      id: 3,
      title: "Bitácora de Intención y Propósito",
      type: "Guía descargable PDF",
      description: "Una herramienta práctica para conectar con tu esencia y diseñar tu camino con claridad y propósito.",
      icon: FileText,
      downloadLink: "/images/recursos/bitacora.pdf",
      category: "PDF",
      image: "/images/recursos/portadaBitacora.png"
    }
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <div className="min-h-screen bg-white pt-16">
      
      {/* Hero Section - Título Principal */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#D9A689]/10 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            <span className="bg-gradient-to-r from-[#6C7A52] via-[#D9A689] to-[#4F8F8B] bg-clip-text text-transparent">
              RECURSOS
            </span>
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
            <span className="text-[#6C7A52] font-semibold">✨ Para tu camino de transformación:</span>{" "}
            <span className="text-gray-700">herramientas para nutrir</span>{" "}
            <span className="text-[#D9A689] font-bold italic">tu expansión consciente</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
            <span className="text-[#D9A689] font-medium">Este es un espacio para nutrir tu camino con claridad, inspiración y expansión.</span>
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-6 sm:py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Resources Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            
            {resources.map((resource, index) => (
              <div
                key={resource.id}
                className={`bg-gradient-to-br ${
                  resource.id === 1 ? 'from-[#D9A689]/10 to-white border-[#D9A689]/20' :
                  resource.id === 2 ? 'from-[#4F8F8B]/10 to-white border-[#4F8F8B]/20' :
                  'from-[#6C7A52]/10 to-white border-[#6C7A52]/20'
                } p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg border opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards] hover:shadow-xl transition-all duration-300`}
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                {/* Resource Image */}
                {resource.image && (
                  <div className="mb-4 sm:mb-6 flex justify-center">
                    <div className={`${
                      resource.id === 1 || resource.id == 3
                        ? 'w-44 h-60 ' // Libro: aspecto 9:16, más pequeño
                        : 'w-60 h-60 ' // Otros: cuadrados
                    } rounded-xl overflow-hidden shadow-md `}>
                      <img 
                        src={resource.image} 
                        alt={resource.title}
                        className="w-full h-full "
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center ${
                              resource.id === 1 ? 'bg-gradient-to-br from-[#D9A689]/20 to-[#D9A689]/10' :
                              resource.id === 2 ? 'bg-gradient-to-br from-[#4F8F8B]/20 to-[#4F8F8B]/10' :
                              'bg-gradient-to-br from-[#6C7A52]/20 to-[#6C7A52]/10'
                            } rounded-xl">
                              <div class="text-center">
                                <div class="w-12 h-12 mx-auto mb-2 ${
                                  resource.id === 1 ? 'text-[#D9A689]' :
                                  resource.id === 2 ? 'text-[#4F8F8B]' :
                                  'text-[#6C7A52]'
                                }">
                                  ${resource.icon === BookOpen ? '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z" /></svg>' :
                                  resource.icon === FileText ? '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>' :
                                  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>'
                                }
                                </div>
                                <p class="${
                                  resource.id === 1 ? 'text-[#D9A689]' :
                                  resource.id === 2 ? 'text-[#4F8F8B]' :
                                  'text-[#6C7A52]'
                                } font-medium text-xs">${resource.type}</p>
                              </div>
                            </div>
                          `;
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Resource Info */}
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <span className={`px-3 py-1 ${
                      resource.id === 1 ? 'bg-[#D9A689]/20 text-[#D9A689]' :
                      resource.id === 2 ? 'bg-[#4F8F8B]/20 text-[#4F8F8B]' :
                      'bg-[#6C7A52]/20 text-[#6C7A52]'
                    } text-xs rounded-full font-medium`}>
                      {resource.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {resource.title}
                  </h3>

                  <p className={`text-sm font-medium mb-4 ${
                    resource.id === 1 ? 'text-[#D9A689]' :
                    resource.id === 2 ? 'text-[#4F8F8B]' :
                    'text-[#6C7A52]'
                  }`}>
                    {resource.type}
                  </p>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {resource.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="space-y-2 sm:space-y-3">
                    {resource.actions ? (
                      <>
                        <a
                          href={resource.actions[0].link}
                          className="block bg-[#C2A14D] text-white px-6 sm:px-4 md:px-6 py-3 sm:py-2 md:py-3 rounded-full text-sm sm:text-sm md:text-base font-medium hover:bg-[#D9A689] transition-colors transform hover:scale-105 duration-200"
                        >
                          COMPRAR EN {resource.actions[0].platform.toUpperCase()}
                        </a>
                        <a
                          href={resource.actions[1].link}
                          className="block border-2 border-[#C2A14D] text-[#C2A14D] px-6 sm:px-4 md:px-6 py-3 sm:py-2 md:py-3 rounded-full text-sm sm:text-sm md:text-base font-medium hover:bg-[#C2A14D] hover:text-white transition-all transform hover:scale-105 duration-200"
                        >
                          COMPRAR EN {resource.actions[1].platform.toUpperCase()}
                        </a>
                      </>
                    ) : resource.id === 3 ? (
                      <a
                        href={resource.downloadLink}
                        download="Bitacora-Intencion-y-Proposito.pdf"
                        className="block bg-[#6C7A52] text-white px-6 sm:px-4 md:px-6 py-3 sm:py-2 md:py-3 rounded-full text-sm sm:text-sm md:text-base font-medium hover:bg-[#5a6644] transition-colors transform hover:scale-105 duration-200"
                      >
                        <Download className="inline mr-2" size={14} />
                        DESCARGAR PDF
                      </a>
                    ) : (
                      <button className="block w-full bg-[#4F8F8B] text-white px-6 sm:px-4 md:px-6 py-3 sm:py-2 md:py-3 rounded-full text-sm sm:text-sm md:text-base font-medium hover:bg-[#426d6a] transition-colors transform hover:scale-105 duration-200">
                        <Mail className="inline mr-2" size={14} />
                        SUSCRIBIRSE
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-gradient-to-br from-[#D9A689]/10 to-[#6C7A52]/5 rounded-2xl sm:rounded-3xl text-center opacity-0 animate-[fadeInUp_0.8s_ease-out_1.4s_forwards] hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Accede a todos los recursos
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base max-w-2xl mx-auto">
              Obtén acceso completo a nuestra biblioteca de herramientas para tu transformación y únete a nuestra comunidad de crecimiento consciente.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <a
                href="#"
                className="flex-1 text-center bg-[#C2A14D] text-white px-6 sm:px-4 md:px-6 py-3 sm:py-3 rounded-full text-sm sm:text-sm md:text-base font-medium hover:bg-[#D9A689] transition-all duration-200 transform hover:scale-105"
              >
                <Download className="inline mr-2" size={14} />
                ACCEDER A RECURSOS
              </a>
              <a
                href="#"
                className="flex-1 text-center border-2 border-[#C2A14D] text-[#C2A14D] px-6 sm:px-4 md:px-6 py-3 sm:py-3 rounded-full text-sm sm:text-sm md:text-base font-medium hover:bg-[#C2A14D] hover:text-white transition-all duration-200 transform hover:scale-105"
              >
                VER TODOS
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ResourcesPage;
