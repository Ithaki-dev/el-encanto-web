import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-white/80">
      <div className="container-custom">
        {/* Mapa */}
        <div className="w-full h-64 md:h-80 mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <iframe 
            src="https://maps.google.com/maps?q=10.174823,-84.730407&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Col */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <img
                src="images/logo_encanto.png"
                alt="El Encanto Logo"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="mb-6 leading-relaxed">
              Un refugio turístico diseñado para conectarte con la naturaleza y
              ofrecerte momentos inolvidables en familia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold hover:bg-encanto-yellow hover:text-encanto-dark transition-colors">
                Fb
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold hover:bg-encanto-yellow hover:text-encanto-dark transition-colors">
                Ig
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold hover:bg-encanto-yellow hover:text-encanto-dark transition-colors">
                X
              </a>
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-encanto-yellow shrink-0 mt-1" />
                <span>Camino a la Montaña Km 15, Paraíso, Costa Rica</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-encanto-yellow shrink-0" />
                <span>+506 8888 8888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-encanto-yellow shrink-0" />
                <span>reservas@elencanto.com</span>
              </li>
            </ul>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-encanto-yellow transition-colors">Sobre Nosotros</a></li>
              <li><a href="#services" className="hover:text-encanto-yellow transition-colors">Servicios e Instalaciones</a></li>
              <li><a href="#gallery" className="hover:text-encanto-yellow transition-colors">Galería de Fotos</a></li>
              <li><a href="#testimonials" className="hover:text-encanto-yellow transition-colors">Testimonios</a></li>
              <li><a href="#booking" className="hover:text-encanto-yellow transition-colors">Reservaciones</a></li>
            </ul>
          </div>

          {/* Business Hours Col */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Horarios</h4>
            <ul className="space-y-3">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Lunes - Viernes:</span>
                <span className="text-white">8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Sábados:</span>
                <span className="text-white">8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Domingos:</span>
                <span className="text-white">8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} El Encanto. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
