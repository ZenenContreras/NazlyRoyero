import React from 'react';
import { Download, Video, Mail, ArrowRight, Gift } from 'lucide-react';

const Resources = () => {
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
    <section id="recursos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Gift className="text-[#4FEF8B] mr-3" size={40} />
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Recursos para tu <span className="text-[#6C7A52] font-medium">transformación</span>
            </h2>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Este es un espacio para nutrir tu camino con claridad, inspiración y
            expansión.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-[#A7D3C1]/5 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#6C7A52] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-white" size={28} />
                  </div>
                  
                  <div className="inline-block bg-[#4FEF8B]/20 text-[#6C7A52] px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {resource.type}
                  </div>
                  
                  <h3 className="text-xl font-medium text-[#6C7A52] mb-4">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-center text-[#6C7A52] font-medium group-hover:translate-x-1 transition-transform">
                    <span>Acceder</span>
                    <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features */}
        <div className="bg-gradient-to-r from-[#A7D3C1]/20 to-[#4FEF8B]/20 p-8 rounded-3xl mb-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-6 bg-[#4FEF8B] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-[#6C7A52] font-medium">Guías descargables</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-6 bg-[#4FEF8B] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-[#6C7A52] font-medium">Masterclass gratuita</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-6 bg-[#4FEF8B] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-[#6C7A52] font-medium">Newsletter mensual</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Comienza tu camino de transformación con herramientas prácticas y
              reflexiones que te acompañarán en cada paso.
            </p>
            
            <a
              href="#contacto"
              className="inline-flex items-center bg-[#6C7A52] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#5a6644] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
            >
              <Gift className="mr-2" size={20} />
              Accede a los recursos gratuitos
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;