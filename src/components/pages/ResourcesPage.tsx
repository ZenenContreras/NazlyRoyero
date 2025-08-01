import React from 'react';
import { Download, Mail, ArrowRight, BookOpen, Video, FileText } from 'lucide-react';

const ResourcesPage = () => {
  const resources = [
    {
      id: 1,
      title: "Bitácora de Intención y Propósito",
      type: "Guía descargable",
      description: "Una herramienta práctica para conectar con tu esencia y diseñar tu camino con claridad y propósito.",
      icon: FileText,
      downloadLink: "#",
      category: "PDF"
    },
    {
      id: 2,
      title: "Masterclass: Los 3 primeros pasos para activar tu máximo potencial",
      type: "Video masterclass",
      description: "Sesión gratuita donde descubrirás las claves fundamentales para comenzar tu proceso de expansión consciente.",
      icon: Video,
      downloadLink: "#",
      category: "Video"
    },
    {
      id: 3,
      title: "Newsletter semanal",
      type: "Reflexiones y herramientas",
      description: "Recibe cada semana contenido exclusivo con reflexiones, ejercicios prácticos y herramientas para tu transformación.",
      icon: Mail,
      downloadLink: "#",
      category: "Email"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      
      {/* Hero Section - Título Principal */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#D9A689]/10 to-white animate-in fade-in duration-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 animate-in slide-in-from-bottom-4 duration-700">
            <span className="bg-gradient-to-r from-[#6C7A52] via-[#D9A689] to-[#4F8F8B] bg-clip-text text-transparent">
              RECURSOS
            </span>
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed animate-in slide-in-from-bottom-4 duration-700 delay-100">
            <span className="text-[#6C7A52] font-semibold">✨ Para tu camino de transformación:</span>{" "}
            <span className="text-gray-700">herramientas para nutrir</span>{" "}
            <span className="text-[#D9A689] font-bold italic">tu expansión consciente</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed animate-in slide-in-from-bottom-4 duration-700 delay-200">
            <span className="text-[#D9A689] font-medium">Este es un espacio para nutrir tu camino con claridad, inspiración y expansión.</span>
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-6 sm:py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mobile: Stacked Layout, Desktop: 2 Columns */}
          <div className="flex flex-col lg:grid lg:grid-cols-1 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Resources List - Shows first on mobile, left on desktop */}
            <div className="order-2 lg:order-1 animate-in slide-in-from-left-6 duration-700 delay-300">
              
              {/* Resources List */}
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6">Recursos Disponibles</h2>
                
                {resources.map((resource, index) => (
                  <div
                    key={resource.id}
                    className="group bg-white rounded-xl sm:rounded-2xl border border-gray-200 hover:border-[#D9A689]/30 hover:shadow-lg transition-all duration-300 overflow-hidden animate-in fade-in slide-in-from-bottom-2 delay-200"
                    style={{ animationDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="flex items-start p-4 sm:p-6">
                      
                      {/* Resource Number */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 mr-3 sm:mr-4 self-start">
                        <div className="w-full h-full bg-gradient-to-br from-[#6C7A52] to-[#D9A689] rounded-lg sm:rounded-xl flex items-center justify-center text-white font-medium text-sm sm:text-base transform group-hover:scale-105 transition-transform duration-200">
                          {resource.id}
                        </div>
                      </div>

                      {/* Resource Icon */}
                      <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 mr-3 sm:mr-4 self-start">
                        <div className="w-full h-full bg-gradient-to-br from-[#D9A689]/20 to-[#6C7A52]/10 rounded-lg sm:rounded-xl overflow-hidden flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
                          <resource.icon className="text-[#6C7A52]" size={20} />
                        </div>
                      </div>

                      {/* Resource Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center mb-2">
                          <h3 className="text-sm sm:text-lg font-medium text-gray-900 group-hover:text-[#6C7A52] transition-colors duration-200 leading-relaxed">
                            {resource.title}
                          </h3>
                        </div>
                        <div className="flex items-center mb-2">
                          <span className="px-2 py-1 bg-[#D9A689]/20 text-[#6C7A52] text-xs rounded-full font-medium mr-2">
                            {resource.category}
                          </span>
                          <p className="text-xs sm:text-sm text-[#D9A689] font-medium">
                            {resource.type}
                          </p>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                          {resource.description}
                        </p>
                      </div>

                      {/* Download Button */}
                      <div className="flex-shrink-0 ml-3 sm:ml-4 self-start pt-1">
                        <button className="w-8 h-8 sm:w-10 sm:h-10 bg-[#D9A689] hover:bg-[#c49674] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-105 shadow-lg group">
                          <Download className="transform group-hover:scale-110 transition-transform duration-200" size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter Subscription */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-br from-[#D9A689]/10 to-[#6C7A52]/5 rounded-xl sm:rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-3">
                  Accede a todos los recursos
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                  Obtén acceso completo a nuestra biblioteca de herramientas para tu transformación.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="inline-flex items-center justify-center bg-[#D9A689] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium hover:bg-[#c49674] transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm transform hover:scale-105">
                    <Download className="mr-2" size={14} />
                    Acceder a recursos
                  </button>
                  <button className="inline-flex items-center justify-center border border-[#D9A689] text-[#D9A689] px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium hover:bg-[#D9A689] hover:text-white transition-all duration-300 text-xs sm:text-sm">
                    Ver todos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
