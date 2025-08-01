import { BookOpen, Mail, ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';

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
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#6C7A52]/5 to-[#4F8F8B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex flex-col items-center mb-8">
              <div className="relative mb-6">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#6C7A52] to-[#4F8F8B] rounded-3xl flex items-center justify-center shadow-2xl">
                  <BookOpen className="text-white" size={48} />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#D9A689] rounded-full flex items-center justify-center">
                  <ChevronRight className="text-white" size={16} />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-4">
                INARA | <span className="text-[#6C7A52] font-medium">Blog</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[#D9A689] font-medium mb-8">
                De la raíz al legado
              </p>
              
              <div className="max-w-4xl text-center">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Un espacio para transformar tu historia en propósito, cambio y legado.
                </p>
                
                <p className="text-lg text-gray-600 mb-8">
                  En algún punto de la vida y de la trayectoria profesional, llega el momento
                  de pausar, mirar hacia adentro y preguntarte:
                </p>
                
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 max-w-3xl mx-auto">
                  <div className="space-y-4 text-[#6C7A52] font-medium">
                    <div className="flex items-start text-left">
                      <span className="text-[#D9A689] mr-3 text-xl">→</span>
                      <span>¿Qué de mi historia merece ser honrado?</span>
                    </div>
                    <div className="flex items-start text-left">
                      <span className="text-[#D9A689] mr-3 text-xl">→</span>
                      <span>¿Qué necesito soltar para seguir creciendo?</span>
                    </div>
                    <div className="flex items-start text-left">
                      <span className="text-[#D9A689] mr-3 text-xl">→</span>
                      <span>¿Cómo convierto lo vivido en mi mayor activo personal y profesional?</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Recent Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Últimas <span className="text-[#6C7A52] font-medium">Reflexiones</span>
            </h2>
            <p className="text-lg text-gray-600">
              Cada artículo es una invitación a profundizar en tu proceso de transformación
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-[#6C7A52]/10 to-[#4F8F8B]/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6C7A52]/20 to-[#4F8F8B]/20 flex items-center justify-center">
                    <div className="text-center text-[#6C7A52]">
                      <BookOpen size={32} className="mx-auto mb-2" />
                      <span className="text-sm font-medium">Artículo #{index + 2}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-[#6C7A52] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-[#6C7A52] font-medium group-hover:translate-x-1 transition-transform">
                    <span>Leer más</span>
                    <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="inline-flex items-center border-2 border-[#6C7A52] text-[#6C7A52] px-8 py-4 rounded-full font-medium hover:bg-[#6C7A52] hover:text-white transition-all duration-300">
              Ver todos los artículos
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <section className="py-16 bg-gradient-to-br from-[#6C7A52]/5 to-[#4F8F8B]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed italic mb-6">
              "INARA es una invitación a recordar que solo cuando honramos de dónde
              venimos, podemos construir el camino hacia el legado que queremos
              dejar."
            </blockquote>
            
            <div className="text-2xl md:text-3xl text-[#6C7A52] font-medium">
              → INARA | De la raíz al legado.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;