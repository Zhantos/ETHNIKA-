import { Heart, Target, Sparkles, Leaf, Users, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#893101] mb-4">
            Sobre Ethnika
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Somos una plataforma digital que conecta directamente a artesanos colombianos
            con consumidores nacionales e internacionales, promoviendo el comercio justo,
            la sostenibilidad y la innovación tecnológica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-[#ED7014] to-[#FA8128] p-8 rounded-2xl text-white shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <Target size={32} />
              <h3 className="text-3xl font-bold">Misión</h3>
            </div>
            <p className="text-lg leading-relaxed">
              Facilitar la comercialización de productos artesanales colombianos mediante
              un modelo de comercio justo, sostenible y tecnológicamente innovador,
              empoderando a nuestros artesanos para que alcancen mercados globales.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#FCAE1E] to-[#FA8128] p-8 rounded-2xl text-white shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={32} />
              <h3 className="text-3xl font-bold">Visión</h3>
            </div>
            <p className="text-lg leading-relaxed">
              Ser la plataforma líder en Latinoamérica que preserve y promueva la riqueza
              cultural de nuestros artesanos, conectándolos con el mundo y asegurando la
              sostenibilidad de sus oficios tradicionales.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#893101] text-center mb-8">
            Nuestros Valores
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <Heart size={48} className="mx-auto mb-4 text-[#ED7014]" />
              <h4 className="text-xl font-bold text-[#893101] mb-2">Comercio Justo</h4>
              <p className="text-gray-700">
                Garantizamos precios justos y condiciones equitativas para todos nuestros artesanos.
              </p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <Leaf size={48} className="mx-auto mb-4 text-[#ED7014]" />
              <h4 className="text-xl font-bold text-[#893101] mb-2">Sostenibilidad</h4>
              <p className="text-gray-700">
                Promovemos prácticas sostenibles que respetan el medio ambiente y las comunidades.
              </p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <Users size={48} className="mx-auto mb-4 text-[#ED7014]" />
              <h4 className="text-xl font-bold text-[#893101] mb-2">Comunidad</h4>
              <p className="text-gray-700">
                Fortalecemos las comunidades artesanales y preservamos tradiciones culturales.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#80400B] to-[#893101] text-white p-8 md:p-12 rounded-2xl shadow-xl mb-16">
          <h3 className="text-3xl font-bold mb-6 text-center">Qué Hacemos</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-3">Para los Artesanos</h4>
              <ul className="space-y-2">
                <li>• Plataforma digital fácil de usar</li>
                <li>• Acceso a mercados nacionales e internacionales</li>
                <li>• Capacitación en herramientas digitales</li>
                <li>• Apoyo en logística y distribución</li>
                <li>• Condiciones justas de negociación</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3">Para los Compradores</h4>
              <ul className="space-y-2">
                <li>• Productos auténticos y de calidad</li>
                <li>• Conexión directa con artesanos</li>
                <li>• Historia detrás de cada producto</li>
                <li>• Compra con propósito e impacto social</li>
                <li>• Experiencia de compra segura y confiable</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-orange-50 p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp size={32} className="text-[#ED7014]" />
              <h3 className="text-2xl font-bold text-[#893101]">Propuesta de Valor</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Ethnika elimina las barreras que enfrentan los artesanos colombianos,
              ofreciendo una solución integral que combina tecnología, comercio justo y
              sostenibilidad. Facilitamos el acceso al mercado global mientras preservamos
              la autenticidad y el valor cultural de cada pieza artesanal.
            </p>
          </div>

          <div className="bg-orange-50 p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Leaf size={32} className="text-[#ED7014]" />
              <h3 className="text-2xl font-bold text-[#893101]">Impacto Social y Ambiental</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Cada compra en Ethnika apoya directamente a comunidades artesanales colombianas,
              generando empleo digno y preservando técnicas ancestrales. Promovemos prácticas
              sostenibles que protegen el medio ambiente y fortalecen la economía local.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-2xl md:text-3xl font-bold text-[#893101] italic">
            "Compra con propósito. Vive lo auténtico."
          </p>
        </div>
      </div>
    </section>
  );
}
