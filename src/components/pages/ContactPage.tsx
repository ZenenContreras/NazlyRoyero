import React, { useState } from 'react';
import { Send, MessageCircle, ArrowRight, User, Mail, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      // Enviar email con EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          service: formData.service,
          message: formData.message,
          to_email: EMAILJS_CONFIG.TO_EMAIL,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email enviado:', result);
      
      setSubmitStatus('success');
      setSubmitMessage('¡Mensaje enviado exitosamente! Te contactaré pronto.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      });

    } catch (error) {
      console.error('Error enviando email:', error);
      setSubmitStatus('error');
      setSubmitMessage('Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    {
      value: "mentoria-personal",
      label: "Mentoría Personal"
    },
    {
      value: "mentoria-equipos",
      label: "Mentoría para Equipos y Organizaciones"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      
      {/* Hero Section - Título Principal */}
      <section className="pt-16 pb-8 bg-gradient-to-br from-[#4F8F8B]/10 to-white animate-in fade-in duration-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 animate-in slide-in-from-bottom-4 duration-700">
            <span className="bg-gradient-to-r from-[#6C7A52] via-[#4F8F8B] to-[#D9A689] bg-clip-text text-transparent">
              CONVERSEMOS
            </span>
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed animate-in slide-in-from-bottom-4 duration-700 delay-100">
            <span className="text-[#6C7A52] font-semibold">Tu transformación comienza</span>{" "}
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
            
            {/* Contact Info & Cover - Shows first on mobile, left on desktop */}
            <div className="order-1 animate-in slide-in-from-left-6 duration-700 delay-400">
              <div className="bg-gradient-to-br from-[#4F8F8B]/10 to-[#6C7A52]/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center lg:sticky lg:top-24">
                
                {/* Contact Photo */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="/images/conversemos/conversemos-foto.jpeg"
                      alt="Nazly Royero - Conversemos"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mt-6 sm:mt-8">
                  <p className="text-[#4F8F8B] font-medium mb-3 sm:mb-4 text-base sm:text-lg">
                    Estoy aquí para escucharte
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto mb-4 sm:mb-6">
                    Puedes escribirme, agendar una sesión de claridad o solicitar información sobre programas, mentorías o talleres.
                  </p>
                </div>

                {/* Quick Actions */}
                <div className="space-y-3">
                  <div className="bg-white border-2 border-[#4F8F8B] rounded-xl p-4 sm:p-6">
                    <h3 className="text-[#4F8F8B] font-semibold mb-4 text-center">Reserva tu sesión de claridad</h3>
                    <div className="space-y-3 text-sm">
                      <div className="bg-[#4F8F8B]/10 p-3 rounded-lg">
                        <h4 className="font-medium text-[#6C7A52] mb-2">Horarios Disponibles:</h4>
                        <div className="space-y-1 text-xs text-gray-700">
                          <p><strong>Martes:</strong> 6:30 - 7:30 AM | 5:00 - 6:00 PM</p>
                          <p><strong>Viernes:</strong> 4:00 - 5:00 PM</p>
                          <p><strong>Sábado:</strong> 9:00 - 10:00 AM | 11:00 AM - 12:00 PM</p>
                        </div>
                      </div>
                      <div className="bg-[#6C7A52]/10 p-3 rounded-lg">
                        <p className="text-xs text-gray-600 text-center">
                          <strong>Disponible:</strong> Agosto, Septiembre y Octubre 2025
                        </p>
                      </div>
                      <button 
                        onClick={() => {
                          // Mobile: scroll to form
                          if (window.innerWidth < 1024) {
                            const formElement = document.getElementById('contact-form');
                            if (formElement) {
                              formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          }
                        }}
                        className="w-full bg-[#4F8F8B] text-white px-4 py-3 rounded-xl font-medium hover:bg-[#4F8F8B]/90 transition-all duration-300 transform hover:scale-105"
                      >
                        Agendar Sesión
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Shows second on mobile, right on desktop */}
            <div className="order-2 animate-in slide-in-from-right-6 duration-700 delay-300">
              
              {/* Contact Form */}
              <div id="contact-form" className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-lg p-6 sm:p-8">
                <div id="formulario"></div>
                <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6">
                  Cuéntame sobre tu momento actual
                </h2>
                
                {/* Status Messages */}
                {submitStatus !== 'idle' && (
                  <div className={`p-4 rounded-xl flex items-center space-x-3 ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200 mb-4' 
                      : 'bg-red-50 text-red-800 border border-red-200 mb-4'
                  }`}>
                    {submitStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    )}
                    <p className="text-sm font-medium ">{submitMessage}</p>
                  </div>
                )}

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
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-[#6C7A52] to-[#4F8F8B] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 flex items-center justify-center group ${
                        isSubmitting 
                          ? 'opacity-70 cursor-not-allowed' 
                          : 'hover:shadow-lg transform hover:scale-105'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 animate-spin" size={18} />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2" size={18} />
                          Enviar mensaje
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                        </>
                      )}
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

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
