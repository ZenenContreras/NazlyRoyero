import React from 'react';
import { Headphones, Play, ArrowRight } from 'lucide-react';

const PodcastPage = () => {
  const episodes = [
    {
      title: "Transformación desde adentro: El poder del autoconocimiento",
      description: "Una conversación profunda sobre cómo el conocimiento interno se convierte en la base de toda transformación auténtica.",
      duration: "42 min",
      date: "20 Mar 2024"
    },
    {
      title: "Liderazgo consciente en tiempos de cambio",
      description: "Exploramos cómo liderar con intención y propósito, especialmente durante períodos de incertidumbre y transformación.",
      duration: "38 min",
      date: "13 Mar 2024"
    },
    {
      title: "De la reinvención al legado: Construyendo impacto con sentido",
      description: "Cómo convertir los procesos de cambio personal en oportunidades para crear un legado significativo.",
      duration: "45 min",
      date: "6 Mar 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section id="podcast" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#6C7A52] to-[#5a6644] text-white">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
            <Headphones className="mr-0 sm:mr-3 mb-2 sm:mb-0" size={32} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-center">
              Podcast: <span className="font-medium">"En Movimiento"</span>
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Espacio de conversaciones sobre transformación, intención, propósito,
            liderazgo consciente, bienestar y expansión.
          </p>
        </div>

        {/* Episodes */}
        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          {episodes.map((episode, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl hover:bg-white/15 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                {/* Play Button */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#4FEF8B] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
                  <Play className="text-gray-900 ml-1" size={20} />
                </div>

                {/* Episode Info */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start text-xs sm:text-sm text-white/70 mb-2">
                    <span>{episode.date}</span>
                    <span className="mx-2">•</span>
                    <span>{episode.duration}</span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3 group-hover:text-[#4FEF8B] transition-colors">
                    {episode.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    {episode.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center bg-[#4FEF8B] text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-[#3de076] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
          >
            Escucha el podcast
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default PodcastPage;