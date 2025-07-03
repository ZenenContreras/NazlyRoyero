import React, { useState } from 'react';
import { Send, MessageCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
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

  return (
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
  );
};

export default Contact;