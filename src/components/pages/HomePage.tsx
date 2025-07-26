import React from 'react';
import { ArrowRight, Star, User, Users, BookOpen, Headphones, Edit3 } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image/Video */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-[#A7D3C1]/30 via-white/50 to-[#D9A689]/20"></div>
          {/* Placeholder for actual background image/video */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main Claim with Mixed Typography */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-8 sm:mb-12">
              <span className="block font-light text-[#6C7A52] mb-2">
                Activa tu máximo{' '}
                <span className="font-bold italic text-[#4F8F8B]">potencial</span>.
              </span>
              <span className="block font-medium text-[#D9A689] mb-2">
                Expande tu{' '}
                <span className="font-light text-black">impacto</span>.
              </span>
              <span className="block font-bold text-[#C2A14D]">
                Crea con{' '}
                <span className="italic font-light text-[#6C7A52]">intención</span>.
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Services Blocks */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Block 1 - Personal Transformation */}
            <div className="bg-gradient-to-br from-[#A7D3C1]/10 to-white p-8 sm:p-12 rounded-3xl shadow-lg border border-[#A7D3C1]/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6C7A52] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <User className="text-white" size={32} />
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-bold text-[#6C7A52] mb-4">
                  Acompaño tu transformación personal
                </h2>
                
                <div className="flex items-center justify-center mb-6">
                  <Star className="text-[#C2A14D] mr-2" size={24} />
                  <h3 className="text-xl sm:text-2xl font-medium text-[#C2A14D]">
                    Método Estrella
                  </h3>
                  <Star className="text-[#C2A14D] ml-2" size={24} />
                </div>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Un camino guiado hacia el autoconocimiento, liderazgo y propósito.
                </p>
                
                <a
                  href="#servicios"
                  className="inline-flex items-center bg-gradient-to-r from-[#C2A14D] to-[#D9A689] text-white px-8 py-4 rounded-full text-lg font-medium hover:from-[#D9A689] hover:to-[#C2A14D] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                >
                  Descubre lo que hay para ti
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </div>
            </div>

            {/* Block 2 - Teams and Organizations */}
            <div className="bg-gradient-to-br from-[#4F8F8B]/10 to-white p-8 sm:p-12 rounded-3xl shadow-lg border border-[#4F8F8B]/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6C7A52] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="text-white" size={32} />
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-bold text-[#6C7A52] mb-4">
                  Acompaño a Equipos y Organizaciones
                </h2>
                
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-medium text-[#4F8F8B] mb-2">
                    Método C.A.S.A.
                  </h3>
                  <p className="text-base text-[#C2A14D] font-medium">
                    Conexión, Aprendizaje, Sinergia y Adaptación
                  </p>
                </div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                  Creando espacios para la evolución colectiva
                </p>
                
                <a
                  href="#servicios"
                  className="inline-flex items-center bg-[#4F8F8B] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#6C7A52] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                >
                  Impulsa el crecimiento de tu equipo
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-16 sm:py-20 bg-gradient-to-br from-[#A7D3C1]/5 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] bg-gradient-to-br from-[#D9A689]/20 to-[#A7D3C1]/20 rounded-3xl flex items-center justify-center shadow-lg">
                <div className="text-center text-gray-500">
                  <div className="w-20 h-20 bg-[#6C7A52]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-10 h-10 bg-[#6C7A52] rounded-full"></div>
                  </div>
                  <p className="text-sm">Foto de Nazly</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <p className="text-xl sm:text-2xl font-medium text-[#6C7A52] leading-relaxed">
                Soy Nazly Royero, mentora en procesos de transformación personal, 
                profesional y organizacional
              </p>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#C2A14D] rounded-full mt-3 flex-shrink-0"></div>
                  <p>
                    Más de 15 años impulsando la transformación y el impacto en personas, 
                    equipos y organizaciones.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#C2A14D] rounded-full mt-3 flex-shrink-0"></div>
                  <p>
                    Acompaño a quienes quieren rediseñar su presente y liderar su futuro 
                    con intención, estrategia y resultados reales.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#C2A14D] rounded-full mt-3 flex-shrink-0"></div>
                  <p>
                    Integro la experiencia en proyectos, innovación y gestión de cambio 
                    para crear caminos de evolución auténtica y expansiva.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="/sobre-mi"
                  className="inline-flex items-center border-2 border-[#6C7A52] text-[#6C7A52] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#6C7A52] hover:text-white transition-all duration-300 group"
                >
                  Conoce más sobre mí
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Blocks */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Book Block */}
            <div className="bg-gradient-to-br from-[#D9A689]/10 to-white p-8 rounded-3xl shadow-lg text-center border border-[#D9A689]/20">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#D9A689]/20 to-[#C2A14D]/20 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <div className="text-center text-gray-500">
                  <BookOpen size={48} className="mx-auto mb-2 text-[#6C7A52]" />
                  <p className="text-sm">Portada del Libro</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#6C7A52] mb-2">
                El poder de reinventarse con INTENCIÓN y SENTIDO
              </h3>
              
              <p className="text-lg text-[#C2A14D] font-medium mb-6 italic">
                Aquí, Ahora y Siempre
              </p>
              
              <div className="space-y-3">
                <a
                  href="#"
                  className="block bg-[#C2A14D] text-white px-6 py-3 rounded-full font-medium hover:bg-[#D9A689] transition-colors"
                >
                  VERSIÓN FÍSICA
                </a>
                <a
                  href="#"
                  className="block border-2 border-[#C2A14D] text-[#C2A14D] px-6 py-3 rounded-full font-medium hover:bg-[#C2A14D] hover:text-white transition-all"
                >
                  VERSIÓN DIGITAL
                </a>
              </div>
            </div>

            {/* Podcast Block */}
            <div className="bg-gradient-to-br from-[#4F8F8B]/10 to-white p-8 rounded-3xl shadow-lg text-center border border-[#4F8F8B]/20">
              <div className="relative mb-6">
                <div className="w-48 h-64 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-4 shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-[#4F8F8B]/20 to-[#6C7A52]/20 rounded-2xl flex items-center justify-center">
                    <Headphones size={48} className="text-[#4F8F8B]" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#6C7A52] mb-2">
                En Movimiento | <span className="tracking-wider">P O D C A S T</span>
              </h3>
              
              <p className="text-lg text-[#4F8F8B] font-medium mb-4 italic">
                No temas crecer lentamente; teme solo quedarte quieto
              </p>
              
              <p className="text-base text-gray-700 mb-6">
                Conversaciones para crecer, aprender y avanzar, sin detenernos
              </p>
              
              <a
                href="/podcast"
                className="inline-flex items-center bg-[#4F8F8B] text-white px-8 py-4 rounded-full font-medium hover:bg-[#6C7A52] transition-colors group"
              >
                ESCUCHA AHORA
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </div>

            {/* Blog Block */}
            <div className="bg-gradient-to-br from-[#A7D3C1]/10 to-white p-8 rounded-3xl shadow-lg text-center border border-[#A7D3C1]/20">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#A7D3C1]/20 to-[#6C7A52]/10 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <div className="text-center text-gray-500">
                  <Edit3 size={48} className="mx-auto mb-2 text-[#6C7A52]" />
                  <p className="text-sm">Portada del Blog</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#6C7A52] mb-2">
                INARA | <span className="tracking-wider">B l o g</span>
              </h3>
              
              <p className="text-lg text-[#A7D3C1] font-medium mb-4 italic">
                De la raíz al legado
              </p>
              
              <p className="text-base text-gray-700 mb-6">
                Reflexiones
              </p>
              
              <a
                href="/blog"
                className="inline-flex items-center bg-[#A7D3C1] text-white px-8 py-4 rounded-full font-medium hover:bg-[#6C7A52] transition-colors group"
              >
                LEER AHORA
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations Block */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#A7D3C1]/5 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6C7A52] mb-4">
              Colaboraciones
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C2A14D] to-[#D9A689] mx-auto"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {/* Creatitegia */}
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-[#C2A14D]/20 to-[#D9A689]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#6C7A52]">C</span>
              </div>
              <h3 className="text-xl font-bold text-[#6C7A52] mb-2">
                Creatitegia
              </h3>
              <p className="text-gray-600">
                Colaboración estratégica
              </p>
            </div>

            {/* Fabio Canchila */}
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-[#4F8F8B]/20 to-[#A7D3C1]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#6C7A52]">F</span>
              </div>
              <h3 className="text-xl font-bold text-[#6C7A52] mb-2">
                Fabio Canchila
              </h3>
              <p className="text-gray-600">
                Colaboración profesional
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;