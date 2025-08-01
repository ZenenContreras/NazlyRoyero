import { Headphones, Play } from 'lucide-react';

const PodcastPage = () => {
  const episodes = [
    {
      id: 1,
      title: "Efecto chispa: el instante en que todo empieza a moverse",
      subtitle: "🌟",
      description: "Explora ese momento decisivo cuando algo dentro de ti hace click y empiezas a moverte hacia tu transformación.",
      duration: "42 min",
      date: "20 Mar 2024",
      image: "/images/podcast/episodio1.png"
    },
    {
      id: 2,
      title: "El vértigo de moverte: cuando quedarse quieto ya no es opción",
      subtitle: "🌪️",
      description: "Esa sensación de vértigo que aparece cuando decidimos cambiar, y cómo navegarla con confianza y propósito.",
      duration: "38 min",
      date: "13 Mar 2024",
      image: "/images/podcast/episodio2.png"
    },
    {
      id: 3,
      title: "Pasaporte a tu próxima versión",
      subtitle: "🧳",
      description: "Los elementos esenciales que necesitas para hacer la transición hacia quien estás destinado a ser.",
      duration: "45 min",
      date: "6 Mar 2024",
      image: "/images/podcast/episodio3.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      
      {/* Hero Section - Título Principal */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#6C7A52]/10 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-[#6C7A52] via-[#D9A689] to-[#4F8F8B] bg-clip-text text-transparent">
              EN MOVIMIENTO
            </span>
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed">
            <span className="text-[#6C7A52] font-semibold">🎧 PODCAST:</span>{" "}
            <span className="text-gray-700">Nada se detiene,</span>{" "}
            <span className="text-[#D9A689] font-bold italic">todo se transforma</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            <span className="text-[#D9A689] font-medium">Conversaciones sobre transformación, propósito y liderazgo consciente</span>{" "}
            para construir una vida con intención y bienestar.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-6 sm:py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mobile: Stacked Layout, Desktop: 2 Columns */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Episodes List - Shows first on mobile, left on desktop */}
            <div className="order-2 lg:order-1">
              
              {/* Episodes List */}
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6">Episodios Disponibles</h2>
                
                {episodes.map((episode) => (
                  <div
                    key={episode.id}
                    className="group bg-white rounded-xl sm:rounded-2xl border border-gray-200 hover:border-[#6C7A52]/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div className="flex items-center p-3 sm:p-4">
                      
                      {/* Episode Number */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 mr-3 sm:mr-4">
                        <div className="w-full h-full bg-gradient-to-br from-[#6C7A52] to-[#4F8F8B] rounded-lg sm:rounded-xl flex items-center justify-center text-white font-medium text-sm sm:text-base">
                          {episode.id}
                        </div>
                      </div>

                      {/* Episode Image */}
                      <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 mr-3 sm:mr-4">
                        <div className="w-full h-full bg-gradient-to-br from-[#6C7A52]/10 to-[#4F8F8B]/10 rounded-lg sm:rounded-xl overflow-hidden">
                          <img 
                            src={episode.image} 
                            alt={episode.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.parentElement!.innerHTML = `
                                <div class="w-full h-full flex items-center justify-center text-[#6C7A52] text-lg sm:text-2xl">
                                  ${episode.subtitle}
                                </div>
                              `;
                            }}
                          />
                        </div>
                      </div>

                      {/* Episode Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-lg font-medium text-gray-900 group-hover:text-[#6C7A52] transition-colors line-clamp-1 sm:line-clamp-2 mb-1">
                          {episode.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-1 sm:line-clamp-2 mb-1 sm:mb-2">
                          {episode.description}
                        </p>
                        <div className="flex items-center text-xs text-gray-500">
                          <span>{episode.date}</span>
                          <span className="mx-1 sm:mx-2">•</span>
                          <span>{episode.duration}</span>
                        </div>
                      </div>

                      {/* Play Button */}
                      <div className="flex-shrink-0 ml-3 sm:ml-4">
                        <button className="w-8 h-8 sm:w-10 sm:h-10 bg-[#6C7A52] hover:bg-[#5a6644] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-105 shadow-lg">
                          <Play className="ml-0.5" size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Subscribe Actions */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-br from-[#6C7A52]/5 to-[#4F8F8B]/10 rounded-xl sm:rounded-2xl">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-3">
                  Suscríbete al podcast
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                  No te pierdas ningún episodio lleno de inspiración y herramientas para tu transformación.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="inline-flex items-center justify-center bg-[#6C7A52] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium hover:bg-[#5a6644] transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm">
                    <Headphones className="mr-2" size={14} />
                    Suscríbete
                  </button>
                  <button className="inline-flex items-center justify-center border border-[#6C7A52] text-[#6C7A52] px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium hover:bg-[#6C7A52] hover:text-white transition-all duration-300 text-xs sm:text-sm">
                    Spotify
                  </button>
                </div>
              </div>
            </div>

            {/* Podcast Cover & Player - Shows first on mobile, right on desktop */}
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-[#6C7A52]/5 to-[#4F8F8B]/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center lg:sticky lg:top-24">
                
                {/* Podcast Cover */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto bg-gradient-to-br from-[#6C7A52] to-[#4F8F8B] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src="/images/podcast/portada.png" 
                      alt="En Movimiento Podcast Cover"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="w-full h-full flex flex-col items-center justify-center text-white p-6 sm:p-8">
                            <div class="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 rounded-full bg-white/20 flex items-center justify-center">
                              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                              </svg>
                            </div>
                            <h3 class="text-lg sm:text-xl font-bold mb-2">EN MOVIMIENTO</h3>
                            <p class="text-sm opacity-90">PODCAST</p>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  
                  {/* Floating Play Button */}
                  <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2">
                    <button className="w-12 h-12 sm:w-16 sm:h-16 bg-white shadow-2xl rounded-full flex items-center justify-center text-[#6C7A52] hover:scale-110 transition-all duration-300 border-4 border-white">
                      <Play className="ml-0.5 sm:ml-1" size={20} />
                    </button>
                  </div>
                </div>

                {/* Podcast Info */}
                <div className="mt-6 sm:mt-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 mb-2 sm:mb-3">
                    En Movimiento
                  </h2>
                  <p className="text-[#D9A689] font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                    Nada se detiene, todo se transforma.
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
                    Espacio de conversaciones sobre transformación, intención, propósito, 
                    liderazgo consciente, bienestar y expansión.
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-4 sm:mt-6 flex justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
                  <div className="text-center">
                    <div className="font-medium text-[#6C7A52]">{episodes.length}</div>
                    <div className="text-gray-500">Episodios</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-[#6C7A52]">2024</div>
                    <div className="text-gray-500">Año</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-[#6C7A52]">40+</div>
                    <div className="text-gray-500">Min/ep</div>
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

export default PodcastPage;