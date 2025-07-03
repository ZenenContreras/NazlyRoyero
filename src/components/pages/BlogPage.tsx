import React from 'react';
import { BookOpen, Mail, ArrowRight, Calendar, User } from 'lucide-react';

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
      <section id="blog" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#6C7A52]/5 to-[#A7D3C1]/10">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
            <BookOpen className="text-[#6C7A52] mr-0 sm:mr-3 mb-2 sm:mb-0" size={32} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 text-center">
              INARA | <span className="text-[#6C7A52] font-medium">Blog & Newsletter</span>
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl text-[#D9A689] font-medium mb-6 sm:mb-8">
            De la raíz al legado
          </p>
          
          <div className="max-w-4xl mx-auto text-base sm:text-lg text-gray-700 leading-relaxed space-y-3 sm:space-y-4">
            <p>
              Un espacio para transformar tu historia en propósito, cambio y legado.
            </p>
            
            <p>
              En algún punto de la vida y de la trayectoria profesional, llega el momento
              de pausar, mirar hacia adentro y preguntarte:
            </p>
            
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md my-6 sm:my-8">
              <div className="space-y-2 text-sm sm:text-base text-[#6C7A52] font-medium">
                <p>→ ¿Qué de mi historia merece ser honrado?</p>
                <p>→ ¿Qué necesito soltar para seguir creciendo?</p>
                <p>→ ¿Cómo convierto lo vivido en mi mayor activo personal y profesional?</p>
              </div>
            </div>
            
            <p>
              INARA | De la raíz al legado es un espacio creado para acompañarte en
              esos puntos de inflexión. Aquí comparto reflexiones, aprendizajes y
              herramientas para quienes están transitando procesos de transformación
              personal, profesional o vital.
            </p>
          </div>
        </div>

        {/* What you'll find */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-medium text-[#6C7A52] mb-4 sm:mb-6 text-center">
            ¿Qué encuentras en INARA?
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#4FEF8B]/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <span className="text-lg sm:text-2xl">🌱</span>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">Reflexiones profundas para navegar tus procesos de cambio.</p>
            </div>
            
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D9A689]/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <span className="text-lg sm:text-2xl">🛠️</span>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">Herramientas prácticas para tu reinvención personal y profesional.</p>
            </div>
            
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#A7D3C1]/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <span className="text-lg sm:text-2xl">💬</span>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">Conversaciones sobre propósito, bienestar, aprendizaje y legado.</p>
            </div>
            
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6C7A52]/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <span className="text-lg sm:text-2xl">🤝</span>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">Una comunidad de personas que eligen evolucionar de manera consciente.</p>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-medium text-[#6C7A52] mb-6 sm:mb-8 text-center">
            Últimas reflexiones del blog
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                  <Calendar size={14} className="mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-3 group-hover:text-[#6C7A52] transition-colors">
                  {post.title}
                </h4>
                
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-[#6C7A52] text-xs sm:text-sm font-medium group-hover:translate-x-1 transition-transform">
                  <span>Leer más</span>
                  <ArrowRight size={14} className="ml-1" />
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-6 sm:mt-8">
            <a
              href="#"
              className="inline-flex items-center border-2 border-[#6C7A52] text-[#6C7A52] px-6 py-3 sm:px-8 sm:py-3 rounded-full font-medium hover:bg-[#6C7A52] hover:text-white transition-all duration-300 text-sm sm:text-base"
            >
              Ir al Blog
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-[#6C7A52] to-[#5a6644] p-6 sm:p-8 rounded-3xl text-white">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
              <Mail className="mr-0 sm:mr-3 mb-2 sm:mb-0" size={28} />
              <h3 className="text-xl sm:text-2xl font-medium">Suscríbete a INARA</h3>
            </div>
            
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-white/90">
              Recibe cada mes en tu correo notas, reflexiones y claves para tu evolución
              personal y profesional.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Tu nombre"
                className="flex-1 px-4 py-2 sm:py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 sm:py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base"
              />
              <button
                type="submit"
                className="bg-[#4FEF8B] text-gray-900 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium hover:bg-[#3de076] transition-colors whitespace-nowrap text-xs sm:text-sm"
              >
                Quiero ser parte de INARA
              </button>
            </form>
          </div>
        </div>

        {/* Closing Message */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed italic">
              INARA es una invitación a recordar que solo cuando honramos de dónde
              venimos, podemos construir el camino hacia el legado que queremos
              dejar.
            </p>
            
            <p className="text-lg sm:text-xl text-[#6C7A52] font-medium mt-3 sm:mt-4">
              → INARA | De la raíz al legado.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default BlogPage;