import { ArrowRight, Star, User, Users, BookOpen, Headphones, Edit3 } from 'lucide-react';
import { useState, useEffect } from 'react';

const HomePage = () => {
  // Carousel state for background images
  const carouselImages = [
    'Carrusel Inicio 1.jpeg',
    'Carrusel inicio 2.jpeg',
    'Carrusel Inicio 4.jpeg',
    'Carrusel - Inicio 6.jpeg',
    'Carrusel Inicio 7.jpeg',
    'Carrusel Inicio 8.jpeg',
    'Carrusel _Inicio 12.jpeg',
    'Carrusel inicio - 13.jpeg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="min-h-screen bg-white">      {/* Hero Section with Background Carousel */}
      <section id="inicio" className="h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20 bg-white">
        
        {/* Mobile Background Images - Full screen */}
        <div className="absolute inset-0 z-0 lg:hidden">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={`/images/${image}`}
                alt={`Background carousel image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          ))}
        </div>

        {/* Desktop Background Images - Right Side with fades */}
        <div className="absolute inset-0 z-0 hidden lg:flex">
          {/* Left transparent area with stronger gradient */}
          <div className="w-1/2 bg-gradient-to-r from-white via-white/98 to-white/85"></div>
            {/* Right image area */}
          <div className="w-1/2 relative overflow-hidden">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={`/images/${image}`}
                  alt={`Background carousel image ${index + 1}`}
                  className="h-full w-auto object-contain max-w-none"
                />
              </div>
            ))}
            
            {/* Multiple layer left gradient fade - dramatic blending with text area */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white/90 via-white/70 to-white/30 pointer-events-none z-10"></div>
            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white via-white/95 to-white/60 pointer-events-none z-11"></div>
            <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white via-white/98 to-transparent pointer-events-none z-12"></div>
              {/* Enhanced right gradient fade - stronger edge softening */}
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white via-white/80 via-white/50 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-white/95 via-white/70 to-transparent pointer-events-none z-11"></div>
            
            {/* Vertical fade for left side - elegant vertical integration */}
            <div className="absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-white via-white/85 via-white/60 to-transparent pointer-events-none z-10"></div>
            <div className="absolute left-0 top-0 h-16 w-full bg-gradient-to-b from-white/95 via-white/75 to-transparent pointer-events-none z-11"></div>
            <div className="absolute left-0 top-0 h-8 w-full bg-gradient-to-b from-white/98 to-transparent pointer-events-none z-12"></div>
            
            {/* Vertical fade for left side bottom - elegant vertical integration */}
            <div className="absolute left-0 bottom-0 h-24 w-full bg-gradient-to-t from-white via-white/85 via-white/60 to-transparent pointer-events-none z-10"></div>
            <div className="absolute left-0 bottom-0 h-16 w-full bg-gradient-to-t from-white/95 via-white/75 to-transparent pointer-events-none z-11"></div>
            <div className="absolute left-0 bottom-0 h-8 w-full bg-gradient-to-t from-white/98 to-transparent pointer-events-none z-12"></div>
            
            {/* Vertical fade for right side - elegant vertical integration */}
            <div className="absolute right-0 top-0 h-24 w-full bg-gradient-to-b from-white via-white/85 via-white/60 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 h-16 w-full bg-gradient-to-b from-white/95 via-white/75 to-transparent pointer-events-none z-11"></div>
            <div className="absolute right-0 top-0 h-8 w-full bg-gradient-to-b from-white/98 to-transparent pointer-events-none z-12"></div>
            
            {/* Vertical fade for right side bottom - elegant vertical integration */}
            <div className="absolute right-0 bottom-0 h-24 w-full bg-gradient-to-t from-white via-white/85 via-white/60 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 bottom-0 h-16 w-full bg-gradient-to-t from-white/95 via-white/75 to-transparent pointer-events-none z-11"></div>
            <div className="absolute right-0 bottom-0 h-8 w-full bg-gradient-to-t from-white/98 to-transparent pointer-events-none z-12"></div>
            
            {/* Enhanced top gradient fade - elegant top integration */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/85 via-white/60 to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/95 via-white/75 to-transparent pointer-events-none z-11"></div>
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/98 to-transparent pointer-events-none z-12"></div>
            
            {/* Enhanced bottom gradient fade - elegant bottom integration */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/85 via-white/60 to-transparent pointer-events-none z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/95 via-white/75 to-transparent pointer-events-none z-11"></div>
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/98 to-transparent pointer-events-none z-12"></div>
            
            {/* Corner fade enhancements for perfect integration */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white via-white/90 to-transparent pointer-events-none z-13"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white via-white/90 to-transparent pointer-events-none z-13"></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white via-white/80 to-transparent pointer-events-none z-13"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white via-white/80 to-transparent pointer-events-none z-13"></div>
          </div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-20 w-full h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
              
              {/* Text Content - Mobile: centered, Desktop: Left Side */}
              <div className="space-y-3 md:space-y-4 lg:space-y-6 text-center lg:text-left lg:col-span-1">
                <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl leading-tight lg:leading-tight">
                  {/* Activa tu máximo potencial */}
                  <span className="block mb-1 sm:mb-2 lg:mb-3">
                    <span className="font-serif italic text-white lg:text-[#6C7A52] drop-shadow-lg lg:drop-shadow-none">Activa</span>{' '}
                    <span className="font-sans font-light text-white lg:text-[#4F8F8B] drop-shadow-lg lg:drop-shadow-none">tu</span>{' '}
                    <span className="font-mono font-bold uppercase text-white lg:text-[#C2A14D] tracking-wider drop-shadow-lg lg:drop-shadow-none">máximo</span>
                    <br />
                    <span className="font-serif font-black italic text-white lg:text-[#6C7A52] text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl leading-none drop-shadow-lg lg:drop-shadow-none">potencial</span><span className="font-sans text-white lg:text-[#4F8F8B] drop-shadow-lg lg:drop-shadow-none">.</span>
                  </span>

                  {/* Expande tu impacto */}
                  <span className="block mb-1 sm:mb-2 lg:mb-3">
                    <span className="font-sans font-extrabold uppercase text-white lg:text-[#D9A689] tracking-widest drop-shadow-lg lg:drop-shadow-none">Expande</span>{' '}
                    <span className="font-serif italic font-light text-white lg:text-black drop-shadow-lg lg:drop-shadow-none">tu</span>
                    <br />
                    <span className="font-mono font-black text-white lg:text-[#4F8F8B] text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl leading-none drop-shadow-lg lg:drop-shadow-none">impacto</span><span className="font-serif text-white lg:text-[#D9A689] drop-shadow-lg lg:drop-shadow-none">.</span>
                  </span>

                  {/* Crea con intención */}
                  <span className="block">
                    <span className="font-serif italic font-light text-white lg:text-[#A7D3C1] drop-shadow-lg lg:drop-shadow-none">Crea</span>{' '}
                    <span className="font-sans font-thin text-white lg:text-[#6C7A52] drop-shadow-lg lg:drop-shadow-none">con</span>
                    <br />
                    <span className="font-serif font-black italic text-white lg:text-[#C2A14D] text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl leading-none tracking-tight drop-shadow-lg lg:drop-shadow-none">intención</span><span className="font-mono text-white lg:text-[#6C7A52] drop-shadow-lg lg:drop-shadow-none">.</span>
                  </span>
                </h1>
              </div>

              {/* Right Side - Space for images (Desktop only) */}
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>      {/* Services Blocks */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            
            {/* Block 1 - Personal Transformation */}
            <div className="bg-gradient-to-br from-[#A7D3C1]/10 to-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-lg border border-[#A7D3C1]/20">
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#6C7A52] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6">
                  <User className="text-white" size={16} />
                </div>
                
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#6C7A52] mb-2 sm:mb-3 md:mb-4">
                  Acompaño tu transformación personal
                </h2>
                
                <div className="flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                  <Star className="text-[#C2A14D] mr-1 sm:mr-2" size={16} />
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-[#C2A14D]">
                    Método Estrella
                  </h3>
                  <Star className="text-[#C2A14D] ml-1 sm:ml-2" size={16} />
                </div>
                
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                  Un camino guiado hacia el autoconocimiento, liderazgo y propósito.
                </p>
                
                <a
                  href="#servicios"
                  className="inline-flex items-center bg-gradient-to-r from-[#C2A14D] to-[#D9A689] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium hover:from-[#D9A689] hover:to-[#C2A14D] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                >
                  Descubre lo que hay para ti
                  <ArrowRight className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </a>
              </div>
            </div>

            {/* Block 2 - Teams and Organizations */}
            <div className="bg-gradient-to-br from-[#4F8F8B]/10 to-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-lg border border-[#4F8F8B]/20">
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#6C7A52] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6">
                  <Users className="text-white" size={16} />
                </div>
                
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#6C7A52] mb-2 sm:mb-3 md:mb-4">
                  Acompaño a Equipos y Organizaciones
                </h2>
                
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-[#4F8F8B] mb-1 sm:mb-2">
                    Método C.A.S.A.
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#C2A14D] font-medium">
                    Conexión, Aprendizaje, Sinergia y Adaptación
                  </p>
                </div>
                
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed italic">
                  Creando espacios para la evolución colectiva
                </p>
                
                <a
                  href="#servicios"
                  className="inline-flex items-center bg-[#4F8F8B] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-[#6C7A52] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                >
                  Impulsa el crecimiento de tu equipo
                  <ArrowRight className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* About Section */}
      <section id="sobre-mi" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#A7D3C1]/5 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/images/SobreMi-Inicio1.jpeg"
                  alt="Nazly Royero - Mentora en transformación personal y profesional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6 order-1 lg:order-2">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-[#6C7A52] leading-relaxed">
                Soy Nazly Royero, mentora en procesos de transformación personal, 
                profesional y organizacional
              </p>

              <div className="space-y-2 sm:space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#C2A14D] rounded-full mt-1.5 sm:mt-2 md:mt-3 flex-shrink-0"></div>
                  <p>
                    Más de 15 años impulsando la transformación y el impacto en personas, 
                    equipos y organizaciones.
                  </p>
                </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#C2A14D] rounded-full mt-1.5 sm:mt-2 md:mt-3 flex-shrink-0"></div>
                  <p>
                    Acompaño a quienes quieren rediseñar su presente y liderar su futuro 
                    con intención, estrategia y resultados reales.
                  </p>
                </div>
                
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#C2A14D] rounded-full mt-1.5 sm:mt-2 md:mt-3 flex-shrink-0"></div>
                  <p>
                    Integro la experiencia en proyectos, innovación y gestión de cambio 
                    para crear caminos de evolución auténtica y expansiva.
                  </p>
                </div>
              </div>

              <div className="pt-2 sm:pt-4">
                <a
                  href="/sobre-mi"
                  className="inline-flex items-center border-2 border-[#6C7A52] text-[#6C7A52] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-[#6C7A52] hover:text-white transition-all duration-300 group"
                >
                  Conoce más sobre mí
                  <ArrowRight className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Additional Blocks */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            
            {/* Book Block */}
            <div className="bg-gradient-to-br from-[#D9A689]/10 to-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg text-center border border-[#D9A689]/20">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#D9A689]/20 to-[#C2A14D]/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-md">
                <div className="text-center text-gray-500">
                  <BookOpen size={28} className="mx-auto mb-1 sm:mb-2 text-[#6C7A52]" />
                  <p className="text-xs">Portada del Libro</p>
                </div>
              </div>
              
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#6C7A52] mb-1 sm:mb-2">
                El poder de reinventarse con INTENCIÓN y SENTIDO
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg text-[#C2A14D] font-medium mb-3 sm:mb-4 md:mb-6 italic">
                Aquí, Ahora y Siempre
              </p>
              
              <div className="space-y-2 sm:space-y-3">
                <a
                  href="#"
                  className="block bg-[#C2A14D] text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-[#D9A689] transition-colors"
                >
                  VERSIÓN FÍSICA
                </a>
                <a
                  href="#"
                  className="block border-2 border-[#C2A14D] text-[#C2A14D] px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-[#C2A14D] hover:text-white transition-all"
                >
                  VERSIÓN DIGITAL
                </a>
              </div>
            </div>

            {/* Podcast Block */}
            <div className="bg-gradient-to-br from-[#4F8F8B]/10 to-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg text-center border border-[#4F8F8B]/20">
              <div className="relative mb-3 sm:mb-4 md:mb-6">
                <div className="w-32 sm:w-40 md:w-48 h-40 sm:h-52 md:h-64 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl p-2 sm:p-3 md:p-4 shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-[#4F8F8B]/20 to-[#6C7A52]/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <Headphones size={28} className="text-[#4F8F8B]" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#6C7A52] mb-1 sm:mb-2">
                En Movimiento | <span className="tracking-wider text-xs sm:text-sm md:text-base">P O D C A S T</span>
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg text-[#4F8F8B] font-medium mb-2 sm:mb-3 md:mb-4 italic">
                No temas crecer lentamente; teme solo quedarte quieto
              </p>
              
              <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 sm:mb-4 md:mb-6">
                Conversaciones para crecer, aprender y avanzar, sin detenernos
              </p>
              
              <a
                href="/podcast"
                className="inline-flex items-center bg-[#4F8F8B] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-[#6C7A52] transition-colors group"
              >
                ESCUCHA AHORA
                <ArrowRight className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" size={14} />
              </a>
            </div>

            {/* Blog Block */}
            <div className="bg-gradient-to-br from-[#A7D3C1]/10 to-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg text-center border border-[#A7D3C1]/20 sm:col-span-2 lg:col-span-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#A7D3C1]/20 to-[#6C7A52]/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-md">
                <div className="text-center text-gray-500">
                  <Edit3 size={28} className="mx-auto mb-1 sm:mb-2 text-[#6C7A52]" />
                  <p className="text-xs">Portada del Blog</p>
                </div>
              </div>
              
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#6C7A52] mb-1 sm:mb-2">
                INARA | <span className="tracking-wider text-xs sm:text-sm md:text-base">B l o g</span>
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg text-[#A7D3C1] font-medium mb-2 sm:mb-3 md:mb-4 italic">
                De la raíz al legado
              </p>
              
              <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 sm:mb-4 md:mb-6">
                Reflexiones
              </p>
              
              <a
                href="/blog"
                className="inline-flex items-center bg-[#A7D3C1] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-[#6C7A52] transition-colors group"
              >
                LEER AHORA
                <ArrowRight className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>      {/* Collaborations Block */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#A7D3C1]/5 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#6C7A52] mb-3 sm:mb-4">
              Colaboraciones
            </h2>
            <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#C2A14D] to-[#D9A689] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-4xl mx-auto">
            {/* Creatitegia */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#C2A14D]/20 to-[#D9A689]/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#6C7A52]">C</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#6C7A52] mb-1 sm:mb-2">
                Creatitegia
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Colaboración estratégica
              </p>
            </div>

            {/* Fabio Canchila */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#4F8F8B]/20 to-[#A7D3C1]/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#6C7A52]">F</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#6C7A52] mb-1 sm:mb-2">
                Fabio Canchila
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
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