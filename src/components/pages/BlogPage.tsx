import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Transformar tu historia en propósito: El primer paso hacia tu legado",
      excerpt: "Descubre cómo honrar tu pasado puede convertirse en la base para construir el futuro que deseas.",
      date: "15 Mar 2024",
      readTime: "5 min"
    },
    {
      title: "Los 3 pilares del autoconocimiento que cambiarán tu perspectiva",
      excerpt: "Una guía práctica para conectar con tu esencia y tomar decisiones alineadas con tus valores.",
      date: "8 Mar 2024",
      readTime: "7 min"
    },
    {
      title: "Reinvención consciente: Cómo navegar las transiciones con propósito",
      excerpt: "Estrategias para convertir la incertidumbre en oportunidad y evolución personal.",
      date: "1 Mar 2024",
      readTime: "6 min"
    },
    {
      title: "El arte de crear impacto: De la intención a la acción",
      excerpt: "Cómo alinear tus acciones diarias con tu visión de legado y propósito de vida.",
      date: "22 Feb 2024",
      readTime: "8 min"
    },
    {
      title: "Bienestar integral: Más allá del equilibrio trabajo-vida",
      excerpt: "Una perspectiva holística sobre el bienestar que integra lo físico, emocional, mental y espiritual.",
      date: "15 Feb 2024",
      readTime: "6 min"
    },
    {
      title: "Liderazgo auténtico: Liderar desde la vulnerabilidad y la fuerza",
      excerpt: "Cómo desarrollar un liderazgo consciente que inspire transformación en otros.",
      date: "8 Feb 2024",
      readTime: "9 min"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      
      {/* Hero Section - Título Principal */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#A7D3C1]/10 to-white animate-in fade-in duration-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 animate-in slide-in-from-bottom-4 duration-700">
            <span className="bg-gradient-to-r from-[#6C7A52] via-[#4F8F8B] to-[#A7D3C1] bg-clip-text text-transparent">
              INARA
            </span>
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed animate-in slide-in-from-bottom-4 duration-700 delay-100">
            <span className="text-[#6C7A52] font-semibold">📖 BLOG:</span>{" "}
            <span className="text-gray-700">De la raíz</span>{" "}
            <span className="text-[#4F8F8B] font-bold italic">al legado</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed animate-in slide-in-from-bottom-4 duration-700 delay-200">
            <span className="text-[#4F8F8B] font-medium">Un espacio para transformar tu historia en propósito, cambio y legado</span>{" "}
            a través de reflexiones conscientes.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-6 sm:py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mobile: Stacked Layout, Desktop: 2 Columns */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Articles List - Shows first on mobile, left on desktop */}
            <div className="order-2 lg:order-1 animate-in slide-in-from-left-6 duration-700 delay-300">
              
              {/* Articles List */}
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6">Últimas Reflexiones</h2>
                
                {blogPosts.map((post, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-xl sm:rounded-2xl border border-gray-200 hover:border-[#6C7A52]/30 hover:shadow-lg transition-all duration-300 overflow-hidden animate-in fade-in slide-in-from-bottom-2 delay-200"
                    style={{ animationDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="flex items-start p-4 sm:p-6">
                      
                      {/* Article Number */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 mr-3 sm:mr-4 self-start">
                        <div className="w-full h-full bg-gradient-to-br from-[#6C7A52] to-[#4F8F8B] rounded-lg sm:rounded-xl flex items-center justify-center text-white font-medium text-sm sm:text-base transform group-hover:scale-105 transition-transform duration-200">
                          {index + 1}
                        </div>
                      </div>

                      {/* Article Icon */}
                      <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 mr-3 sm:mr-4 self-start">
                        <div className="w-full h-full bg-gradient-to-br from-[#A7D3C1]/20 to-[#6C7A52]/10 rounded-lg sm:rounded-xl overflow-hidden flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
                          <BookOpen className="text-[#6C7A52]" size={20} />
                        </div>
                      </div>

                      {/* Article Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-lg font-medium text-gray-900 group-hover:text-[#6C7A52] transition-colors duration-200 mb-2 leading-relaxed">
                          {post.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar size={12} className="mr-1" />
                          <span>{post.date}</span>
                          <span className="mx-1 sm:mx-2">•</span>
                          <Clock size={12} className="mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <div className="flex-shrink-0 ml-3 sm:ml-4 self-start pt-1">
                        <button className="w-8 h-8 sm:w-10 sm:h-10 bg-[#6C7A52] hover:bg-[#5a6644] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-105 shadow-lg group">
                          <ArrowRight className="transform group-hover:translate-x-0.5 transition-transform duration-200" size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter Subscription */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-br from-[#A7D3C1]/10 to-[#6C7A52]/5 rounded-xl sm:rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-3">
                  Suscríbete al blog
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                  Recibe nuevas reflexiones y herramientas para tu proceso de transformación.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="inline-flex items-center justify-center bg-[#6C7A52] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium hover:bg-[#5a6644] transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm transform hover:scale-105">
                    <BookOpen className="mr-2" size={14} />
                    Suscríbete
                  </button>
                  <button className="inline-flex items-center justify-center border border-[#6C7A52] text-[#6C7A52] px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium hover:bg-[#6C7A52] hover:text-white transition-all duration-300 text-xs sm:text-sm">
                    Ver todos
                  </button>
                </div>
              </div>
            </div>

            {/* Blog Cover & Info - Shows first on mobile, right on desktop */}
            <div className="order-1 lg:order-2 animate-in slide-in-from-right-6 duration-700 delay-400">
              <div className="bg-gradient-to-br from-[#A7D3C1]/10 to-[#6C7A52]/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center lg:sticky lg:top-24">
                
                {/* Blog Cover */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto bg-gradient-to-br from-[#6C7A52] to-[#4F8F8B] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full flex flex-col items-center justify-center text-white p-6 sm:p-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 rounded-full bg-white/20 flex items-center justify-center transform animate-pulse">
                        <BookOpen size={32} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2">INARA</h3>
                      <p className="text-sm opacity-90">BLOG</p>
                      <p className="text-xs opacity-75 mt-2">De la raíz al legado</p>
                    </div>
                  </div>
                  
                  {/* Floating Read Button */}
                  <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2">
                    <button className="w-12 h-12 sm:w-16 sm:h-16 bg-white shadow-2xl rounded-full flex items-center justify-center text-[#6C7A52] hover:scale-110 transition-all duration-300 border-4 border-white group">
                      <BookOpen className="transform group-hover:scale-110 transition-transform duration-200" size={20} />
                    </button>
                  </div>
                </div>

                {/* Blog Info */}
                <div className="mt-6 sm:mt-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 mb-2 sm:mb-3">
                    INARA Blog
                  </h2>
                  <p className="text-[#4F8F8B] font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                    De la raíz al legado.
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
                    Reflexiones para transformar tu historia en propósito, 
                    cambio y legado duradero.
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-4 sm:mt-6 flex justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
                  <div className="text-center">
                    <div className="font-medium text-[#6C7A52]">{blogPosts.length}</div>
                    <div className="text-gray-500">Artículos</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-[#6C7A52]">2025</div>
                    <div className="text-gray-500">Año</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-[#6C7A52]">5</div>
                    <div className="text-gray-500">Min/art</div>
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

export default BlogPage;