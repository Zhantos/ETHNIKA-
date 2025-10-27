import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#893101] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-[#ED7014] to-[#FA8128] rounded-lg p-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 4L4 10V22L16 28L28 22V10L16 4Z"
                    fill="white"
                    fillOpacity="0.9"
                  />
                  <path
                    d="M16 8L8 12V20L16 24L24 20V12L16 8Z"
                    fill="currentColor"
                    className="text-amber-100"
                  />
                  <circle cx="16" cy="16" r="4" fill="white" />
                </svg>
              </div>
              <span className="text-xl font-bold">ETHNIKA</span>
            </div>
            <p className="text-sm text-orange-200 mb-4">
              Esencia que conecta
            </p>
            <p className="text-sm text-orange-200">
              Conectando artesanos colombianos con el mundo
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm text-orange-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors">Tienda</a>
              </li>
              <li>
                <a href="#sobre-nosotros" className="hover:text-white transition-colors">Sobre Nosotros</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-orange-200">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+57 300 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@ethnika.co</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Bogotá, Colombia</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Síguenos</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="bg-[#80400B] hover:bg-[#ED7014] p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-[#80400B] hover:bg-[#ED7014] p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-[#80400B] hover:bg-[#ED7014] p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-2">Métodos de Pago</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white text-[#893101] px-2 py-1 rounded text-xs font-semibold">
                  Visa
                </span>
                <span className="bg-white text-[#893101] px-2 py-1 rounded text-xs font-semibold">
                  Mastercard
                </span>
                <span className="bg-white text-[#893101] px-2 py-1 rounded text-xs font-semibold">
                  PayPal
                </span>
                <span className="bg-white text-[#893101] px-2 py-1 rounded text-xs font-semibold">
                  PSE
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-800 pt-8 text-center">
          <p className="text-sm text-orange-200 mb-2">
            © 2025 Ethnika. Todos los derechos reservados.
          </p>
          <p className="text-sm text-orange-300 italic font-medium">
            "Compra con propósito. Vive lo auténtico."
          </p>
        </div>
      </div>
    </footer>
  );
}
