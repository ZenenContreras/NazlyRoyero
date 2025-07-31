import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Star, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const NotFoundPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animación de entrada
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6C7A52]/5 via-white to-[#D9A689]/5 pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contenido Principal */}
        <div className={`text-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Número 404 con efectos */}
          <div className="relative mb-8 sm:mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="text-[#D9A689]/20 animate-pulse" size={200} />
            </div>
            <h1 className="relative text-8xl sm:text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-[#6C7A52] via-[#D9A689] to-[#4F8F8B] bg-clip-text text-transparent">
              404
            </h1>
          </div>

          {/* Mensaje Principal */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6C7A52] mb-4 sm:mb-6">
              ¡Ups! Esta página decidió tomarse un descanso
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              No pudimos encontrar la página que buscas. Quizás se fue a un retiro de 
              <span className="text-[#D9A689] font-medium"> transformación personal</span>, 
              pero no te preocupes, podemos ayudarte a encontrar tu camino.
            </p>
          </div>

          {/* Sugerencias de navegación */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-[#6C7A52] mb-6">
              ¿Qué te parece si exploramos juntos?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              
              {/* Método Estrella */}
              <Link 
                to="/metodo-estrella"
                className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-[#D9A689]/10 rounded-xl mb-4 group-hover:bg-[#D9A689]/20 transition-colors">
                  <Star className="text-[#D9A689]" size={24} />
                </div>
                <h4 className="font-semibold text-[#6C7A52] mb-2">Método Estrella</h4>
                <p className="text-sm text-gray-600">Descubre tu potencial de transformación</p>
              </Link>

              {/* Sobre Mí */}
              <Link 
                to="/sobre-mi"
                className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-[#6C7A52]/10 rounded-xl mb-4 group-hover:bg-[#6C7A52]/20 transition-colors">
                  <Search className="text-[#6C7A52]" size={24} />
                </div>
                <h4 className="font-semibold text-[#6C7A52] mb-2">Sobre Mí</h4>
                <p className="text-sm text-gray-600">Conoce mi historia y propósito</p>
              </Link>

              {/* Método CASA */}
              <Link 
                to="/metodo-casa"
                className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-[#4F8F8B]/10 rounded-xl mb-4 group-hover:bg-[#4F8F8B]/20 transition-colors">
                  <Home className="text-[#4F8F8B]" size={24} />
                </div>
                <h4 className="font-semibold text-[#6C7A52] mb-2">Método C.A.S.A.</h4>
                <p className="text-sm text-gray-600">Transformación para equipos</p>
              </Link>

            </div>
          </div>

          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            {/* Botón Inicio */}
            <Link
              to="/"
              className="inline-flex items-center bg-[#6C7A52] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-[#5a6644] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
            >
              <Home className="mr-2" size={20} />
              Ir al Inicio
              <Sparkles className="ml-2 group-hover:animate-pulse" size={16} />
            </Link>

            {/* Botón Regresar */}
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center bg-white text-[#6C7A52] border-2 border-[#6C7A52] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-[#6C7A52] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ArrowLeft className="mr-2" size={20} />
              Regresar
            </button>

          </div>

          {/* Mensaje motivacional */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-r from-[#6C7A52]/5 to-[#D9A689]/5 rounded-2xl border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <Star className="text-[#D9A689] mr-2" size={24} />
              <h4 className="text-lg sm:text-xl font-semibold text-[#6C7A52]">Recuerda</h4>
              <Star className="text-[#D9A689] ml-2" size={24} />
            </div>
            <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed">
              "Cada desvío en el camino es una oportunidad para descubrir algo nuevo. 
              A veces, perderse es el primer paso para encontrar exactamente lo que necesitabas."
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
