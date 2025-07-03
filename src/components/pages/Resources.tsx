import React from 'react';
import { Download, Video, Mail, ArrowRight, Gift } from 'lucide-react';

const ResourcesPage = () => {
  const resources = [
    {
      icon: Download,
      title: "Bitácora de Intención y Propósito",
      description: "Una guía práctica para conectar con tu esencia y diseñar tu camino con claridad.",
      type: "Guía PDF"
    },
    {
      icon: Video,
      title: "Los 3 primeros pasos para activar tu máximo potencial",
      description: "Masterclass gratuita donde descubrirás las claves fundamentales para comenzar tu transformación.",
      type: "Masterclass"
    },
    {
      icon: Mail,
      title: "Newsletter INARA",
      description: "Reflexiones mensuales, herramientas y ejercicios prácticos para tu evolución personal y profesional.",
      type: "Newsletter"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section id="recursos" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
            <Gift className="text-[#4FEF8B] mr-0 sm:mr-3 mb-2 sm:mb-0" size={32} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 text-center">
              Recursos para tu <span className="text-[#6C7A52] font-medium">transformación</span>
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Este es un espacio para nutrir tu camino con claridad, inspiración y
            expansión.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-[#A7D3C1]/5 p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#6C7A52] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  
                  <div className="inline-block bg-[#4FEF8B]/20 text-[#6C7A52] px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                    {resource.type}
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-medium text-[#6C7A52] mb-3 sm:mb-4">
                    {resource.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-center text-[#6C7A52] font-medium group-hover:translate-x-1 transition-transform text-sm sm:text-base">
                    <span>Acceder</span>
                    <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features */}
        <div className="bg-gradient-to-r from-[#A7D3C1]/20 to-[#4FEF8B]/20 p-6 sm:p-8 rounded-3xl mb-8 sm:mb-12">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#4FEF8B] rounded-full flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm">✓</span>
              </div>
              <span className="text-[#6C7A52] font-medium text-sm sm:text-base">Guías descargables</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#4FEF8B] rounded-full flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm">✓</span>
              </div>
              <span className="text-[#6C7A52] font-medium text-sm sm:text-base">Masterclass gratuita</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3 sm:col-span-2 md:col-span-1">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#4FEF8B] rounded-full flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm">✓</span>
              </div>
              <span className="text-[#6C7A52] font-medium text-sm sm:text-base">Newsletter mensual</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              Comienza tu camino de transformación con herramientas prácticas y
              reflexiones que te acompañarán en cada paso.
            </p>
            
            <a
              href="#contacto"
              className="inline-flex items-center bg-[#6C7A52] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-[#5a6644] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
            >
              <Gift className="mr-2" size={18} />
              Accede a los recursos gratuitos
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ResourcesPage;