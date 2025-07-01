import React from 'react';
import { BookOpen, Mail, ArrowRight, Calendar, User } from 'lucide-react';

const Blog = () => {
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
    <section id="blog" className="py-20 bg-gradient-to-br from-[#6C7A52]/5 to-[#A7D3C1]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="text-[#6C7A52] mr-3" size={40} />
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              INARA | <span className="text-[#6C7A52] font-medium">Blog & Newsletter</span>
            </h2>
          </div>
          
          <p className="text-xl text-[#D9A689] font-medium mb-8">
            De la raíz al legado
          </p>
          
          <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              Un espacio para transformar tu historia en propósito, cambio y legado.
            </p>
            
            <p>
              En algún punto de la vida y de la trayectoria profesional, llega el momento
              de pausar, mirar hacia adentro y preguntarte:
            </p>
            
            <div className="bg-white p-6 rounded-2xl shadow-md my-8">
              <div className="space-y-2 text-[#6C7A52] font-medium">
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
        <div className="bg-white p-8 rounded-3xl shadow-lg mb-16">
          <h3 className="text-2xl font-medium text-[#6C7A52] mb-6 text-center">
            ¿Qué encuentras en INARA?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#4FEF8B]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🌱</span>
              </div>
              <p className="text-gray-700 text-sm">Reflexiones profundas para navegar tus procesos de cambio.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#D9A689]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🛠️</span>
              </div>
              <p className="text-gray-700 text-sm">Herramientas prácticas para tu reinvención personal y profesional.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#A7D3C1]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💬</span>
              </div>
              <p className="text-gray-700 text-sm">Conversaciones sobre propósito, bienestar, aprendizaje y legado.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#6C7A52]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🤝</span>
              </div>
              <p className="text-gray-700 text-sm">Una comunidad de personas que eligen evolucionar de manera consciente.</p>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-medium text-[#6C7A52] mb-8 text-center">
            Últimas reflexiones del blog
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h4 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-[#6C7A52] transition-colors">
                  {post.title}
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-[#6C7A52] text-sm font-medium group-hover:translate-x-1 transition-transform">
                  <span>Leer más</span>
                  <ArrowRight size={16} className="ml-1" />
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-flex items-center border-2 border-[#6C7A52] text-[#6C7A52] px-8 py-3 rounded-full font-medium hover:bg-[#6C7A52] hover:text-white transition-all duration-300"
            >
              Ir al Blog
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-[#6C7A52] to-[#5a6644] p-8 rounded-3xl text-white">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Mail className="mr-3" size={32} />
              <h3 className="text-2xl font-medium">Suscríbete a INARA</h3>
            </div>
            
            <p className="text-lg mb-8 text-white/90">
              Recibe cada mes en tu correo notas, reflexiones y claves para tu evolución
              personal y profesional.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Tu nombre"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="bg-[#4FEF8B] text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-[#3de076] transition-colors whitespace-nowrap"
              >
                Quiero ser parte de INARA
              </button>
            </form>
          </div>
        </div>

        {/* Closing Message */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              INARA es una invitación a recordar que solo cuando honramos de dónde
              venimos, podemos construir el camino hacia el legado que queremos
              dejar.
            </p>
            
            <p className="text-xl text-[#6C7A52] font-medium mt-4">
              → INARA | De la raíz al legado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;