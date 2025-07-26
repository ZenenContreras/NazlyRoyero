import { ArrowRight, Star, User, Users, BookOpen, Headphones, Edit3 } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">{/* Hero Section with Text Only */}
      <section id="inicio" className="h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20 bg-white">
        
        {/* Content Container */}
        <div className="relative z-20 w-full h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-full">
              
              {/* Text Content - Centered */}
              <div className="text-center space-y-4 md:space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                  {/* Activa tu máximo potencial */}
                  <span className="block mb-2 lg:mb-3">
                    <span className="font-serif italic text-[#6C7A52]">Activa</span>{' '}
                    <span className="font-sans font-light text-[#4F8F8B]">tu</span>{' '}
                    <span className="font-mono font-bold uppercase text-[#C2A14D] tracking-wider">máximo</span>
                    <br />
                    <span className="font-serif font-black italic text-[#6C7A52] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none">potencial</span><span className="font-sans text-[#4F8F8B]">.</span>
                  </span>

                  {/* Expande tu impacto */}
                  <span className="block mb-2 lg:mb-3">
                    <span className="font-sans font-extrabold uppercase text-[#D9A689] tracking-widest">Expande</span>{' '}
                    <span className="font-serif italic font-light text-black">tu</span>
                    <br />
                    <span className="font-mono font-black text-[#4F8F8B] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-none">impacto</span><span className="font-serif text-[#D9A689]">.</span>
                  </span>

                  {/* Crea con intención */}
                  <span className="block">
                    <span className="font-serif italic font-light text-[#A7D3C1]">Crea</span>{' '}
                    <span className="font-sans font-thin text-[#6C7A52]">con</span>
                    <br />
                    <span className="font-serif font-black italic text-[#C2A14D] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none tracking-tight">intención</span><span className="font-mono text-[#6C7A52]">.</span>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>{/* Services Blocks */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            
            {/* Block 1 - Personal Transformation */}
            <div className="bg-gradient-to-br from-[#A7D3C1]/10 to-white p-6 sm:p-8 md:p-12 rounded-3xl shadow-lg border border-[#A7D3C1]/20">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#6C7A52] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <User className="text-white" size={24} />
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6C7A52] mb-3 sm:mb-4">
                  Acompaño tu transformación personal
                </h2>
                
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                  <Star className="text-[#C2A14D] mr-2" size={20} />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#C2A14D]">
                    Método Estrella
                  </h3>
                  <Star className="text-[#C2A14D] ml-2" size={20} />
                </div>
                
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                  Un camino guiado hacia el autoconocimiento, liderazgo y propósito.
                </p>
                
                <a
                  href="#servicios"
                  className="inline-flex items-center bg-gradient-to-r from-[#C2A14D] to-[#D9A689] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:from-[#D9A689] hover:to-[#C2A14D] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                >
                  Descubre lo que hay para ti
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>
            </div>

            {/* Block 2 - Teams and Organizations */}
            <div className="bg-gradient-to-br from-[#4F8F8B]/10 to-white p-6 sm:p-8 md:p-12 rounded-3xl shadow-lg border border-[#4F8F8B]/20">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#6C7A52] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Users className="text-white" size={24} />
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6C7A52] mb-3 sm:mb-4">
                  Acompaño a Equipos y Organizaciones
                </h2>
                
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#4F8F8B] mb-2">
                    Método C.A.S.A.
                  </h3>
                  <p className="text-sm sm:text-base text-[#C2A14D] font-medium">
                    Conexión, Aprendizaje, Sinergia y Adaptación
                  </p>
                </div>
                
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed italic">
                  Creando espacios para la evolución colectiva
                </p>
                
                <a
                  href="#servicios"
                  className="inline-flex items-center bg-[#4F8F8B] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-[#6C7A52] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                >
                  Impulsa el crecimiento de tu equipo
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* About Section */}
      <section id="sobre-mi" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#A7D3C1]/5 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/images/SobreMi-Inicio1.jpeg"
                  alt="Nazly Royero - Mentora en transformación personal y profesional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#6C7A52] leading-relaxed">
                Soy Nazly Royero, mentora en procesos de transformación personal, 
                profesional y organizacional
              </p>

              <div className="space-y-3 md:space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#C2A14D] rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                  <p>
                    Más de 15 años impulsando la transformación y el impacto en personas, 
                    equipos y organizaciones.
                  </p>
                </div>
                  <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#C2A14D] rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                  <p>
                    Acompaño a quienes quieren rediseñar su presente y liderar su futuro 
                    con intención, estrategia y resultados reales.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#C2A14D] rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                  <p>
                    Integro la experiencia en proyectos, innovación y gestión de cambio 
                    para crear caminos de evolución auténtica y expansiva.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="/sobre-mi"
                  className="inline-flex items-center border-2 border-[#6C7A52] text-[#6C7A52] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-[#6C7A52] hover:text-white transition-all duration-300 group"
                >
                  Conoce más sobre mí
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Additional Blocks */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            
            {/* Book Block */}
            <div className="bg-gradient-to-br from-[#D9A689]/10 to-white p-6 sm:p-8 rounded-3xl shadow-lg text-center border border-[#D9A689]/20">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#D9A689]/20 to-[#C2A14D]/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-md">
                <div className="text-center text-gray-500">
                  <BookOpen size={36} className="mx-auto mb-2 text-[#6C7A52]" />
                  <p className="text-xs sm:text-sm">Portada del Libro</p>
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-[#6C7A52] mb-2">
                El poder de reinventarse con INTENCIÓN y SENTIDO
              </h3>
              
              <p className="text-base sm:text-lg text-[#C2A14D] font-medium mb-4 sm:mb-6 italic">
                Aquí, Ahora y Siempre
              </p>
              
              <div className="space-y-3">
                <a
                  href="#"
                  className="block bg-[#C2A14D] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-[#D9A689] transition-colors"
                >
                  VERSIÓN FÍSICA
                </a>
                <a
                  href="#"
                  className="block border-2 border-[#C2A14D] text-[#C2A14D] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-[#C2A14D] hover:text-white transition-all"
                >
                  VERSIÓN DIGITAL
                </a>
              </div>
            </div>

            {/* Podcast Block */}
            <div className="bg-gradient-to-br from-[#4F8F8B]/10 to-white p-6 sm:p-8 rounded-3xl shadow-lg text-center border border-[#4F8F8B]/20">
              <div className="relative mb-4 sm:mb-6">
                <div className="w-40 sm:w-48 h-52 sm:h-64 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-3 sm:p-4 shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-[#4F8F8B]/20 to-[#6C7A52]/20 rounded-2xl flex items-center justify-center">
                    <Headphones size={36} className="text-[#4F8F8B]" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-[#6C7A52] mb-2">
                En Movimiento | <span className="tracking-wider text-sm sm:text-base">P O D C A S T</span>
              </h3>
              
              <p className="text-base sm:text-lg text-[#4F8F8B] font-medium mb-3 sm:mb-4 italic">
                No temas crecer lentamente; teme solo quedarte quieto
              </p>
              
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                Conversaciones para crecer, aprender y avanzar, sin detenernos
              </p>
              
              <a
                href="/podcast"
                className="inline-flex items-center bg-[#4F8F8B] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-[#6C7A52] transition-colors group"
              >
                ESCUCHA AHORA
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </a>
            </div>

            {/* Blog Block */}
            <div className="bg-gradient-to-br from-[#A7D3C1]/10 to-white p-6 sm:p-8 rounded-3xl shadow-lg text-center border border-[#A7D3C1]/20 sm:col-span-2 lg:col-span-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#A7D3C1]/20 to-[#6C7A52]/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-md">
                <div className="text-center text-gray-500">
                  <Edit3 size={36} className="mx-auto mb-2 text-[#6C7A52]" />
                  <p className="text-xs sm:text-sm">Portada del Blog</p>
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-[#6C7A52] mb-2">
                INARA | <span className="tracking-wider text-sm sm:text-base">B l o g</span>
              </h3>
              
              <p className="text-base sm:text-lg text-[#A7D3C1] font-medium mb-3 sm:mb-4 italic">
                De la raíz al legado
              </p>
              
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                Reflexiones
              </p>
              
              <a
                href="/blog"
                className="inline-flex items-center bg-[#A7D3C1] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-[#6C7A52] transition-colors group"
              >
                LEER AHORA
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>      {/* Collaborations Block */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#A7D3C1]/5 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6C7A52] mb-4">
              Colaboraciones
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C2A14D] to-[#D9A689] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-4xl mx-auto">
            {/* Creatitegia */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#C2A14D]/20 to-[#D9A689]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-bold text-[#6C7A52]">C</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#6C7A52] mb-2">
                Creatitegia
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Colaboración estratégica
              </p>
            </div>

            {/* Fabio Canchila */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#4F8F8B]/20 to-[#A7D3C1]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-bold text-[#6C7A52]">F</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#6C7A52] mb-2">
                Fabio Canchila
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
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