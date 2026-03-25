import { motion } from 'framer-motion';
import { Heart, Leaf, Map, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-encanto-green font-semibold uppercase tracking-wider mb-2">Sobre Nosotros</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-encanto-dark mb-6">
              Tu refugio perfecto en medio de la <span className="text-encanto-yellow">Naturaleza</span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              El Encanto es más que un centro turístico; es un ecosistema diseñado para 
              desconectar de la rutina y reconectar con lo que realmente importa. Un espacio 
              donde el descanso, la diversión y la naturaleza conviven en perfecta armonía.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Ya sea que busques relajarte junto al agua, disfrutar de una tarde en familia 
              o celebrar un evento especial, nuestras instalaciones están preparadas para 
              ofrecerte una experiencia cálida, segura e inolvidable.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-encanto-lightBlue p-2 rounded-lg text-encanto-blue shrink-0">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-encanto-dark">Conexión Natural</h5>
                  <p className="text-sm text-gray-500">Aire puro y paisajes hermosos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-encanto-lightYellow p-2 rounded-lg text-encanto-yellow shrink-0">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-encanto-dark">Compartir</h5>
                  <p className="text-sm text-gray-500">Momentos en familia o amigos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-encanto-lightGreen p-2 rounded-lg text-encanto-green shrink-0">
                  <Map className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-encanto-dark">Recreación</h5>
                  <p className="text-sm text-gray-500">Actividades para todos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-slate-100 p-2 rounded-lg text-slate-600 shrink-0">
                  <Coffee className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-encanto-dark">Descanso</h5>
                  <p className="text-sm text-gray-500">Zonas de relajación total</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Composition */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/nosotros.jpg" 
                alt="Familia disfrutando en la naturaleza" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Design accents */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-encanto-yellow rounded-full z-0 blur-2xl opacity-40"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-encanto-green rounded-full z-0 blur-2xl opacity-40"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
