import React, { useState } from 'react';
import { Send, MessageCircle, ArrowRight, User, Mail, MessageSquare } from 'lucide-react';

const ContactPage = () => {
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
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const serviceOptions = [
    {
      value: "mentoria-personal",
      label: "Mentoría Personal",
      description: "Coaching 1:1 y procesos personalizados"
    },
    {
      value: "mentoria-equipos",
      label: "Mentoría para Equipos y Organizaciones", 
      description: "Liderazgo consciente y transformación organizacional"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      
      {/* Hero Section - Título Principal */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-[#4F8F8B]/10 to-white animate-in fade-in duration-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 animate-in slide-in-from-bottom-4 duration-700">
            <span className="bg-gradient-to-r from-[#6C7A52] via-[#4F8F8B] to-[#D9A689] bg-clip-text text-transparent">
              CONVERSEMOS
            </span>
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed animate-in slide-in-from-bottom-4 duration-700 delay-100">
            <span className="text-[#6C7A52] font-semibold">💬 Tu transformación comienza</span>{" "}
            <span className="text-gray-700">con una</span>{" "}
            <span className="text-[#4F8F8B] font-bold italic">conversación</span>
          </h2>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-6 sm:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mobile: Stacked Layout, Desktop: 2 Columns */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Contact Form - Shows first on mobile, left on desktop */}
            <div className="order-2 lg:order-1 animate-in slide-in-from-left-6 duration-700 delay-300">
              
              {/* Contact Form */}
              <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-lg p-6 sm:p-8">
                <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6">
                  Cuéntame sobre tu momento actual
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="animate-in fade-in slide-in-from-bottom-2 delay-400">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="inline w-4 h-4 mr-2" />
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4F8F8B] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div className="animate-in fade-in slide-in-from-bottom-2 delay-500">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4F8F8B] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className="animate-in fade-in slide-in-from-bottom-2 delay-600">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageCircle className="inline w-4 h-4 mr-2" />
                      ¿En qué te puedo acompañar? *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4F8F8B] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    >
                      <option value="">Selecciona una opción</option>
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    
                    {formData.service && (
                      <div className="mt-2 p-3 bg-[#4F8F8B]/10 rounded-lg">
                        <p className="text-xs sm:text-sm text-[#4F8F8B] font-medium">
                          {serviceOptions.find(opt => opt.value === formData.service)?.description}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="animate-in fade-in slide-in-from-bottom-2 delay-700">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="inline w-4 h-4 mr-2" />
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4F8F8B] focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                      placeholder="Cuéntame un poco sobre tu momento actual y cómo te gustaría que te acompañe..."
                    />
                  </div>

                  <div className="animate-in fade-in slide-in-from-bottom-2 delay-800">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#6C7A52] to-[#4F8F8B] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                    >
                      <Send className="mr-2" size={18} />
                      Enviar mensaje
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </button>
                  </div>
                </form>
              </div>

              {/* Process Info */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-br from-[#4F8F8B]/10 to-[#6C7A52]/5 rounded-xl sm:rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-900">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">
                  ¿Qué sucede después?
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#4F8F8B] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">Revisaré tu mensaje en las próximas 24-48 horas.</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#4F8F8B] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">Te contactaré para agendar una conversación inicial gratuita.</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#4F8F8B] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">Juntos definiremos el proceso que mejor se alinea a tu momento y necesidades.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info & Cover - Shows first on mobile, right on desktop */}
            <div className="order-1 lg:order-2 animate-in slide-in-from-right-6 duration-700 delay-400">
              <div className="bg-gradient-to-br from-[#4F8F8B]/10 to-[#6C7A52]/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center lg:sticky lg:top-24">
                
                {/* Contact Cover */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto bg-gradient-to-br from-[#6C7A52] to-[#4F8F8B] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full flex flex-col items-center justify-center text-white p-6 sm:p-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 rounded-full bg-white/20 flex items-center justify-center transform animate-pulse">
                        <MessageCircle size={32} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2">CONVERSEMOS</h3>
                      <p className="text-sm opacity-90">ESTOY AQUÍ</p>
                      <p className="text-xs opacity-75 mt-2">Para escucharte</p>
                    </div>
                  </div>
                  
                  {/* Floating Action Button */}
                  <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2">
                    <button className="w-12 h-12 sm:w-16 sm:h-16 bg-white shadow-2xl rounded-full flex items-center justify-center text-[#4F8F8B] hover:scale-110 transition-all duration-300 border-4 border-white group">
                      <Send className="transform group-hover:scale-110 transition-transform duration-200" size={20} />
                    </button>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mt-6 sm:mt-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 mb-2 sm:mb-3">
                    Tu transformación comienza aquí
                  </h2>
                  <p className="text-[#4F8F8B] font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                    Estoy aquí para escucharte.
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto mb-4 sm:mb-6">
                    Puedes escribirme, agendar una sesión de claridad o solicitar 
                    información sobre programas, mentorías o talleres.
                  </p>
                </div>

                {/* Quote Section */}
                <div className="bg-gradient-to-r from-[#6C7A52] to-[#4F8F8B] p-4 sm:p-6 rounded-2xl text-white mb-4 sm:mb-6">
                  <p className="text-sm sm:text-base font-medium leading-relaxed italic">
                    "Tu transformación comienza con una conversación. Estoy aquí para escucharte."
                  </p>
                </div>

                {/* Quick Actions */}
                <div className="space-y-3">
                  <button className="w-full bg-white border-2 border-[#4F8F8B] text-[#4F8F8B] px-4 py-3 sm:py-4 rounded-xl font-medium hover:bg-[#4F8F8B] hover:text-white transition-all duration-300 text-sm sm:text-base transform hover:scale-105 group">
                    <span className="flex items-center justify-center">
                      <MessageCircle className="mr-2" size={16} />
                      Reserva tu sesión de claridad
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                    </span>
                  </button>
                  
                  <button className="w-full bg-[#4F8F8B]/10 text-[#4F8F8B] px-4 py-3 rounded-xl font-medium hover:bg-[#4F8F8B]/20 transition-all duration-300 text-sm">
                    <span className="flex items-center justify-center">
                      <Mail className="mr-2" size={16} />
                      Información sobre programas
                    </span>
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

export default ContactPage;
