import React from 'react';
import { Link } from 'react-router-dom';
import { Edit3, Download, CheckCircle } from 'lucide-react';

const InaraBlogCap2 = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <section className="py-2 sm:py-6 md:py-8 lg:py-1 animate-in fade-in duration-500">
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
        <div className="mb-16 text-justify">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6" style={{ color: '#f3bb9a' }}>
            De la raíz a tu propósito:{' '}
            <span className="font-light italic" style={{ color: '#4F8F8B' }}>
              ejercicios para encontrar tu norte personal
            </span>
          </h2>
          <div className="w-full h-[0.2px] mb-8" style={{ backgroundColor: '#B8860B' }}></div>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <div className="flex items-start mb-6">
            <div className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A4A4A' }}></div>
            <p className="text-lg font-medium" style={{ color: '#4A4A4A' }}>
              Porque a veces perderse es el primer paso para encontrarse.
            </p>
          </div>
          
          <div className="mb-4 flex items-center">
            <span className="text-lg" style={{ color: '#4A4A4A' }}>✨ Cuando el ruido de afuera no deja escuchar tu voz interior</span>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-justify" style={{ color: '#555555' }}>
            <p>
              ¿Alguna vez has sentido que avanzas, pero no sabes exactamente hacia dónde?
            </p>

            <p>
              El trabajo, las responsabilidades, los compromisos... y de repente, un día te preguntas:
            </p>

            <p>
              <strong style={{ color: '#4A4A4A' }}>¿Esto es realmente lo que quiero? ¿Hacia dónde estoy yendo?</strong>
            </p>

            <p>
              En esos momentos no necesitas más prisa. Necesitas volver a la raíz.
            </p>
          </div>
        </div>

        {/* Featured Quote */}
        <div className="relative overflow-hidden rounded-lg mb-16 p-8 text-white" style={{ background: 'linear-gradient(90deg, #4F8F8B 0%,#f3bb9a 50%, #8B9A6B 100%)' }}>
          <div className="absolute top-4 left-4 text-4xl lg:text-6xl opacity-20">❝</div>
          <div className="absolute bottom-2 right-4 text-4xl lg:text-6xl opacity-20">❞</div>
          <p className="text-xl lg:text-2xl font-medium text-center relative z-10">
            Este es el primer paso para que tu historia se transforme en un propósito que te guíe.
          </p>
        </div>

        {/* Root Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <h3 className="text-xl lg:text-2xl font-bold" style={{ color: '#9BB59B' }}>
              🌱 Tu raíz: lo que te sostiene y te define
            </h3>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-justify" style={{ color: '#555555' }}>
            <p>
              Tu raíz son tus valores, tus experiencias, tus dones únicos. Es todo aquello que sigue siendo 
              verdad para ti aunque todo alrededor cambie.
            </p>

            <p>
              Cuando te conectas con tu raíz, encuentras claridad. Y desde esa claridad puedes decidir hacia 
              dónde crecer, hacia dónde orientar tus pasos, hacia dónde apuntar tu vida.
            </p>
          </div>
        </div>


        {/* Exercises Section */}
        <div className="mb-16">
          <h3 className="text-xl lg:text-2xl font-bold mb-8" style={{ color: '#B8860B' }}>
            ✨ Ejercicios para redescubrir tu propósito
          </h3>

          <p className="text-base leading-relaxed mb-8 text-justify" style={{ color: '#555555' }}>
            En mi experiencia acompañando procesos de cambio, he visto que ciertas prácticas pueden abrir 
            caminos incluso en los momentos más complejos y ayudarte a avanzar con paso firme:
          </p>

          <div className="space-y-6 text-justify">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 mt-1 mr-4 flex-shrink-0" style={{ color: 'black' }} />
              <div>
                <h4 className="font-bold mb-2" style={{ color: '#4A4A4A' }}>Mapa de momentos clave:</h4>
                <p style={{ color: '#555555' }}>
                  Escribe tres momentos de tu vida que te marcaron profundamente. ¿Qué aprendiste? 
                  ¿Qué valores surgieron de allí? Eso habla de quién eres.
                </p>
              </div>
            </div>

            <div className="flex items-start text-justify">
              <CheckCircle className="w-6 h-6 mt-1 mr-4 flex-shrink-0" style={{ color: 'black' }} />
              <div>
                <h4 className="font-bold mb-2" style={{ color: '#4A4A4A' }}>El espejo de tus talentos:</h4>
                <p style={{ color: '#555555' }}>
                  Pide a tres personas de confianza que te digan cuáles creen que son tus mayores fortalezas. 
                  Compara sus respuestas con lo que tú percibes de ti mismo.
                </p>
              </div>
            </div>

            <div className="flex items-start text-justify">
              <CheckCircle className="w-6 h-6 mt-1 mr-4 flex-shrink-0" style={{ color: 'black' }} />
              <div>
                <h4 className="font-bold mb-2" style={{ color: '#4A4A4A' }}>Visualiza tu legado:</h4>
                <p style={{ color: '#555555' }}>
                  Imagina que han pasado 10 años: ¿Qué te gustaría que las personas dijeran de ti y de lo 
                  que construiste? Eso es un faro para tus decisiones de hoy.
                </p>
              </div>
            </div>

            <div className="flex items-start text-justify">
              <CheckCircle className="w-6 h-6 mt-1 mr-4 flex-shrink-0" style={{ color: 'black' }} />
              <div>
                <h4 className="font-bold mb-2" style={{ color: '#4A4A4A' }}>Diseña micro-acciones alineadas:</h4>
                <p style={{ color: '#555555' }}>
                  No esperes la gran revelación. Haz algo pequeño esta semana que refleje eso que descubriste de ti.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ready to Go Deeper Section */}
        <div className="rounded-lg mb-16 p-8 border-l-4" style={{ backgroundColor: '#FAF8F2', borderColor: '#4F8F8B' }}>
          <div className="flex items-start mb-6">
            <h4 className="text-xl font-bold" style={{ color: '#4F8F8B' }}>
              ✨ ¿Listo para profundizar y diseñar tu plan con propósito?
            </h4>
          </div>

          <p className="mb-6 text-justify" style={{ color: '#555555' }}>
            Si estas preguntas y ejercicios encendieron algo en ti, no dejes que se apague.
          </p>

          <p className="mb-6 text-justify" style={{ color: '#555555' }}>
            Te ofrezco una herramienta gratuita que te ayudará a ir más lejos.
          </p>

          <div className="bg-white p-6 rounded-lg border-l-4 mb-6" style={{ borderColor: '#4F8F8B' }}>
            <div className="flex items-start mb-4">
              <Download className="w-5 h-5 mt-1 mr-3 flex-shrink-0" style={{ color: '#4F8F8B' }} />
              <div className="flex-1">
                <p className="mb-3 font-medium" style={{ color: '#4A4A4A' }}>
                  "Las 5 preguntas clave para redescubrirte y construir un plan con propósito"
                </p>
                <a 
                  href='/images/blog/1/Guia5Preguntas.pdf'
                  download='Guia5Preguntas.pdf'
                  className="flex items-center italic hover:underline transition-colors duration-200" 
                  style={{ color: '#4A4A4A' }}
                >
                  <Download className="w-5 h-5 mr-2" style={{ color: '#4A4A4A' }} />
                  Quiero mi guía gratuita
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="w-full h-[0.2px] mb-2" style={{ backgroundColor: '#B8860B' }}></div>

        <div className="p-8 rounded-lg mb-2 relative">
          <div className="absolute top-4 left-4 text-4xl" style={{ color: '#f3bb9a' }}>❝</div>
          <div className="absolute bottom-4 right-4 text-4xl" style={{ color: '#f3bb9a' }}>❞</div>
          <div className="text-left">
            <p className="text-lg font-medium italic mb-4" style={{ color: '#f3bb9a' }}>
              ✨ Tu propósito no se encuentra afuera, se construye desde adentro
            </p>
            <p className="leading-relaxed text-justify" style={{ color: '#555555' }}>
              No se trata de perseguir un destino perfecto, sino de caminar con dirección. Cuando entiendes 
              tus raíces, encuentras un norte que te guía incluso en medio de la incertidumbre.
            </p>
          </div>
        </div>

        <div className="w-full h-[0.2px] mb-16" style={{ backgroundColor: '#B8860B' }}></div>

        {/* Accompaniment Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center mb-6">
              <h3 className="text-xl lg:text-2xl font-bold" style={{ color: '#f3bb9a' }}>
                ✨ ¿Quieres un acompañamiento para ir más profundo?
              </h3>
            </div>

            <div className="space-y-6 text-base text-justify leading-relaxed" style={{ color: '#555555' }}>
              <p>
                Si quieres más que una guía, puedo acompañarte personalmente con mi Método Estrella, 
                un proceso diseñado para:
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 mt-1 mr-3 flex-shrink-0" style={{ color: 'black' }} />
                  <span>Conectarte con tu esencia.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 mt-1 mr-3 flex-shrink-0" style={{ color: 'black' }} />
                  <span>Replantear tus metas desde lo auténtico.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 mt-1 mr-3 flex-shrink-0" style={{ color: 'black' }} />
                  <span>Crear un plan de vida alineado con tu propósito.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl sm:rounded-2xl flex items-center justify-center">
            <img 
              className='w-full h-full object-cover object-center'
              src="/images/blog/1/nazlyInara1.jpeg" 
              alt="Nazly Inara" 
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-justify mb-12">
          <Link to="/contacto" className="inline-flex text-white px-8 py-3 rounded-full mb-8 text-lg font-medium" style={{ background: '#4F8F8B' }}>
            🌟 De la raíz al propósito, tu historia tiene sentido
          </Link>

          <p className="text-lg text-justify mb-8 max-w-2xl" style={{ color: '#555555' }}>
            Tu historia no es un obstáculo, es tu materia prima. Cuando te das el tiempo de mirarla con 
            nuevos ojos, descubres que ya tienes lo que necesitas para construir una vida que te haga 
            sentido... y que deje huella.
          </p>

          <div className="p-4 rounded-lg mb-8" style={{ backgroundColor: '#F8F6F0' }}>
            <div className="text-5xl" style={{ color: '#9BB59B' }}>❝</div>
            <p className="text-xl text-center font-medium italic" style={{ color: '#4A4A4A' }}>
              Hoy puede ser el inicio de una historia extraordinaria.
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
              ⭐ Sobre este blog
            </h4>
          </div>

          <p className="mb-6" style={{ color: 'white' }}>
            <strong>En INARA: </strong>De la raíz al legado comparto reflexiones y herramientas para transformar
            tu historia en propósito, evolución y legado.
          </p>
          <p className="mb-6" style={{ color: 'white' }}>
            Explora más artículos o conoce mis servicios de acompañamiento personalizados.
          </p>
        </div>
      </main>
    </div>
  );
};

export default InaraBlogCap2;