import React from 'react';
import { Star, Download, CheckCircle, Sparkles, FileText, Edit3 } from 'lucide-react';

const InaraBlogCap1 = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <section className="py-2 sm:py-6 md:py-8 lg:py-12 bg-gradient-to-br from-[#A7D3C1]/10 to-white animate-in fade-in duration-500">
        <div className="w-full sm:max-w-6xl sm:mx-auto sm:px-6 lg:px-8">
          <div className="relative w-full sm:max-w-2xl sm:mx-auto" style={{ aspectRatio: '2640/1485' }}>
            <img
              src="/images/blog/banner.PNG"
              alt="INARA Blog Banner"
              className="w-full h-full object-cover object-center sm:rounded-2xl shadow-2xl"
              style={{ aspectRatio: '2640/1485' }}
            />
          </div>
        </div>
      </section>

      {/* Main Article */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Article Title */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6" style={{ color: '#f3bb9a' }}>
            Cómo redescubrir quién eres cuando todo parece cambiar:{' '}
            <span className="font-light italic" style={{ color: '#4F8F8B' }}>
              guía para encontrar tu esencia en tiempos de incertidumbre
            </span>
          </h2>
          <div className="w-full h-[0.2px] mb-8" style={{ backgroundColor: '#B8860B' }}></div>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <div className="flex items-start mb-6">
            <div className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A4A4A' }}></div>
            <p className="text-lg font-medium" style={{ color: '#4A4A4A' }}>
              Porque en medio de la tormenta también hay una brújula que apunta a lo esencial: Tú.
            </p>
          </div>
          
          <div className="mb-4 flex items-center">
            <span className="text-lg" style={{ color: '#4A4A4A' }}>✨ Cuando todo cambia, ¿Quién eres tú?</span>
          </div>

          <div className="space-y-6 text-base leading-relaxed" style={{ color: '#555555' }}>
            <p>
              Hay momentos en la vida en los que el suelo parece moverse bajo tus pies. Cambios laborales 
              inesperados, relaciones que terminan, decisiones que se vuelven urgentes y el ruido externo que 
              no deja pensar.
            </p>

            <p>
              En ese torbellino, surge una pregunta que quema por dentro: <strong style={{ color: '#4A4A4A' }}>¿Quién soy yo ahora?</strong>
            </p>

            <p>
              Muchas veces hemos construido una identidad por lo que hacemos, los roles que ocupamos o las 
              expectativas de otros. Pero, cuando esas piezas se desarman, aparece el silencio incómodo... y 
              también la mayor la oportunidad para reencontrarte.
            </p>
          </div>
        </div>

        {/* Featured Quote */}
        <div className="relative overflow-hidden rounded-lg mb-16 p-8 text-white" style={{ background: 'linear-gradient(90deg, #4F8F8B 0%,#f3bb9a 50%, #8B9A6B 100%)' }}>
          <div className="absolute top-4 left-4 text-4xl lg:text-6xl opacity-20">❝</div>
          <div className="absolute bottom-2 right-4 text-4xl lg:text-6xl opacity-20  ">❞</div>
          <p className="text-xl lg:text-2xl font-medium text-center relative z-10">
            Este es el primer paso para que tu historia se transforme en un propósito que te guíe.
          </p>
        </div>

        {/* Rediscovery Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <h3 className="text-xl lg:text-2xl font-bold" style={{ color: '#9BB59B' }}>
              🌱 Redescubrirse: volver a la raíz para crecer con fuerza renovada
            </h3>
          </div>

          <div className="space-y-6 text-base leading-relaxed" style={{ color: '#555555' }}>
            <p>
              Redescubrir quién eres no significa volver al punto de partida, sino volver a tu esencia con una 
              mirada fresca y renovada. Significa mirar hacia adentro para encontrar esos valores que resisten 
              cualquier tormenta y preguntarte:
            </p>

            <ul className="space-y-3 ml-4">
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{ backgroundColor: '#8B8B8B' }}></span>
                ¿Qué valores siguen intactos en mí?
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{ backgroundColor: '#8B8B8B' }}></span>
                ¿Qué sueños había olvidado y necesitan renacer?
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{ backgroundColor: '#8B8B8B' }}></span>
                ¿Qué cargas o expectativas puedo soltar hoy para avanzar con libertad?
              </li>
            </ul>

            <p>
              Redescubrirse es un proceso de <strong style={{ color: '#f3bb9a' }}>autoconocimiento profundo y amoroso</strong>, 
              una invitación a conectar con la fuerza que siempre ha estado dentro de ti para reinventarte con sentido.
            </p>
          </div>
        </div>

        {/* Architectural Image Placeholder */}
            <img
              src="/images/blog/1/persona.png"
              alt="INARA Blog Banner"
              className="w-full h-full mb-16 object-cover object-center"
            />
            {/* Optional overlay for better visual appeal */}
            <div className="absolute inset-0 bg-black/5 sm:rounded-2xl"></div>

        {/* Tools Section */}
        <div className="mb-16">
          <h3 className="text-xl lg:text-2xl font-bold mb-8" style={{ color: '#B8860B' }}>
            Herramientas que pueden ayudarte a avanzar
          </h3>

          <p className="text-base leading-relaxed mb-8" style={{ color: '#555555' }}>
            En mi experiencia acompañando procesos de cambio, he visto que ciertas prácticas pueden abrir 
            caminos incluso en los momentos más complejos y ayudarte a avanzar con paso firme:
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 mt-1 mr-4 flex-shrink-0" style={{ color: 'black' }} />
              <div>
                <h4 className="font-bold mb-2" style={{ color: '#4A4A4A' }}>Mapea tu historia personal:</h4>
                <p style={{ color: '#555555' }}>
                  Escribe los hitos que te han marcado y lo que aprendiste de cada uno. 
                  Ver tu historia trazada te devolverá la perspectiva y sentido.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 mt-1 mr-4 flex-shrink-0" style={{ color: 'black' }} />
              <div>
                <h4 className="font-bold mb-2" style={{ color: '#4A4A4A' }}>Define tus valores esenciales:</h4>
                <p style={{ color: '#555555' }}>
                  ¿Qué no estás dispuesto a negociar en tu vida? Eso es tu brújula.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 mt-1 mr-4 flex-shrink-0" style={{ color: 'black' }} />
              <div>
                <h4 className="font-bold mb-2" style={{ color: '#4A4A4A' }}>Explora nuevas preguntas:</h4>
                <p style={{ color: '#555555' }}>
                  En lugar de buscar respuestas inmediatas, hazte preguntas que te inviten a profundizar: 
                  ¿Qué quiero crear ahora? ¿Qué me da sentido hoy?
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 mt-1 mr-4 flex-shrink-0" style={{ color: 'black' }} />
              <div>
                <h4 className="font-bold mb-2" style={{ color: '#4A4A4A' }}>Diseña micro-acciones desde hoy:</h4>
                <p style={{ color: '#555555' }}>
                  No esperes al momento perfecto. Empieza con pequeños pasos: un hábito nuevo, un proyecto sencillo, 
                  una conversación que refleje quién quieres ser. Las evoluciones verdaderas nacen de movimientos cotidianos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Exercise Section */}
        <div className="rounded-lg mb-16 p-8 border-l-4" style={{ backgroundColor: '#FAF8F2', borderColor: '#4F8F8B' }}>
          <div className="flex items-start mb-6">
            <h4 className="text-xl font-bold" style={{ color: '#4F8F8B' }}>
              ✨ Ejercicio Exprés de Autodescubrimiento: "Tu pausa con propósito"
            </h4>
          </div>

          <p className="mb-6" style={{ color: '#555555' }}>
            Antes de seguir navegando la tormenta del cambio, detente 5 minutos para hacerte 
            estas preguntas y escribir las respuestas con sinceridad. Esta pausa te conectará con 
            tu brújula interior y te traerá claridad:
          </p>

          <div className="bg-white p-6 rounded-lg border-l-4 mb-6" style={{ borderColor: '#4F8F8B' }}>
            <div className="flex items-start mb-4">
              <Edit3 className="w-5 h-5 mt-1 mr-3 flex-shrink-0" style={{ color: '#4F8F8B' }} />
              <div className="flex-1">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{ backgroundColor: '#8B8B8B' }}></span>
                    ¿Qué parte de mí quiero cultivar en medio de este cambio?
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{ backgroundColor: '#8B8B8B' }}></span>
                    ¿Qué necesito dejar ir para que esa parte crezca?
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{ backgroundColor: '#8B8B8B' }}></span>
                    ¿Qué pequeño paso puedo dar hoy para honrar esa intención?
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p style={{ color: '#555555' }}>
            Cuando termines, cierra tus notas y respira profundo. Visualiza cómo sería tu vida si 
            caminaras con esa intención clara como guía. Con este ejercicio, comienzas a 
            transformar la incertidumbre en acción deliberada.
          </p>
        </div>

        {/* Inspirational Quote */}
        <div className="w-full h-[0.2px] mb-2" style={{ backgroundColor: '#B8860B' }}></div>

        <div className="p-8 rounded-lg mb-2 relative">
          <div className="absolute top-4 left-4 text-4xl" style={{ color: '#f3bb9a' }}>❝</div>
          <div className="absolute bottom-4 right-4 text-4xl  " style={{ color: '#f3bb9a' }}>❞</div>
          <div className="text-left">
            <p className="text-lg font-medium italic mb-4" style={{ color: '#f3bb9a' }}>
              ✨ Cuando te conoces, vuelves a elegir con intención
            </p>
            <p className="leading-relaxed" style={{ color: '#555555' }}>
              El autoconocimiento no es un ejercicio abstracto ni un lujo. Es la base para tomar decisiones 
              alineadas con lo que eres hoy y construir desde ahí un futuro con sentido. Cuando te das el 
              permiso para mirarte, cuestionarte y redefinir tu camino, ya no eres solo alguien reaccionando 
              al cambio: te conviertes en alguien que elige cómo avanzar.
            </p>
          </div>
        </div>

        <div className="w-full h-[0.2px] mb-16" style={{ backgroundColor: '#B8860B' }}></div>

        {/* Accompaniment Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center mb-6">
              <h3 className="text-xl lg:text-2xl font-bold" style={{ color: '#f3bb9a' }}>
                ✨ ¿Quieres un acompañamiento para redescubrirte y avanzar?
              </h3>
            </div>

            <div className="space-y-6 text-base leading-relaxed" style={{ color: '#555555' }}>
              <p>
                Si este artículo resonó contigo, no tienes por qué hacerlo sola o solo.
              </p>

              <p>
                Con el Método Estrella acompaño a personas que están justamente en ese punto crucial:
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 mt-1 mr-3 flex-shrink-0" style={{ color: 'black' }} />
                  <span >Transitando procesos de cambio personal y profesional.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 mt-1 mr-3 flex-shrink-0" style={{ color: 'black' }} />
                  <span>En búsqueda de propósito y claridad.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 mt-1 mr-3 flex-shrink-0" style={{ color: 'black' }} />
                  <span>Diseñando un plan que alinee su esencia con sus metas.</span>
                </div>
              </div>
            </div>
          </div>

          <img src="/" alt="" />
        </div>

        {/* Free Guide CTA */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <h3 className=" text-xl lg:text-2xl font-bold" style={{ color: '#4A4A4A' }}>
              ✨ Por eso quiero ofrecerte una guía gratuita exclusiva:
            </h3>
          </div>

          <div className="p-8 rounded-lg border" style={{ backgroundColor: '#FAF8F2', borderColor: '#9BB59B' }}>
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#9BB59B' }}>
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <Download className="w-5 h-5 mr-2" style={{ color: '#4A4A4A' }} />
                  <span className="font-medium" style={{ color: '#4A4A4A' }}>
                    "Las 5 preguntas clave para redescubrirte y construir un plan con propósito"
                  </span>
                </div>
                <div className="flex items-center">
                  <Download className="w-5 h-5 mr-2" style={{ color: '#4A4A4A' }} />
                  <button className="italic hover:underline transition-colors duration-200" style={{ color: '#4A4A4A' }}>
                    Quiero mi guía gratuita
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-left mb-16">
          <a href="/contacto" className="inline-flex  text-white px-8 py-3 rounded-full mb-8 text-lg font-medium" style={{ background: '#4F8F8B' }}>
            🌟 Da el siguiente paso
          </a>

          <p className="text-lg mb-8 max-w-2xl" style={{ color: '#555555' }}>
            No importa lo que esté cambiando a tu alrededor: siempre puedes volver a ti, encontrar tu brújula 
            y construir algo valioso y con sentido.
          </p>

          <div className="p-4 rounded-lg mb-8" style={{ backgroundColor: '#F8F6F0' }}>
            <div className="text-5xl mb-2" style={{ color: '#9BB59B' }}>❝</div>
            <p className="text-xl text-center font-medium italic mb-2" style={{ color: '#4A4A4A' }}>
              Hoy puede ser el inicio de una historia extraordinario.
            </p>
            <div className="text-5xl transform rotate-180" style={{ color: '#9BB59B' }}>❝</div>
          </div>

          <p className="text-left" style={{ color: '#555555' }}>
            Te acompaño en el camino profundo, honesto y lleno de esperanza. ✨
          </p>
        </div>

        {/* Sobre el blog */}
        <div className="rounded-lg mb-16 p-8 border-l-4" style={{ backgroundColor: '#C2A14D', borderColor: 'white' }}>
          <div className="flex items-start mb-6">
            <h4 className="text-xl font-bold" style={{ color: 'white' }}>
              ️⭐ Sobre este blog
            </h4>
          </div>

          <p className="mb-6" style={{ color: 'white' }}>
            <strong>En INARA: </strong>De la raíz al legado comparto reflexiones y herramientas para transformar
            tu historia en propósito, evolución y legado.
          </p>
            <p className="mb-6" style={{ color: 'white' }}>
            Exploramás artículos o conocemis servicios de acompañamiento personalizados

          </p>
        </div>
      </main>

    </div>
  );
};

export default InaraBlogCap1;