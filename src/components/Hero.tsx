import { motion } from 'framer-motion';
import { CalendarCheck, Users, TreePine } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="El Encanto Nature Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-encanto-dark/40" />
      </div>

      <div className="container-custom relative z-10 flex flex-col items-center text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Vive una experiencia inolvidable en <span className="text-encanto-yellow">El Encanto</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10">
            Un espacio donde la naturaleza, el descanso y la diversión se combinan para crear momentos perfectos en familia.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#booking" className="btn-primary w-full sm:w-auto text-lg px-8 py-4">
              Reservar ahora
            </a>
            <a href="#services" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-medium rounded-full shadow-md hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-lg">
              Ver actividades
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Benefits Bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-10 left-0 w-full z-20 hidden md:block"
      >
        <div className="container-custom">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl flex justify-between items-center max-w-4xl mx-auto border border-white/50">
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 bg-encanto-lightGreen rounded-full flex items-center justify-center mb-3">
                <TreePine className="text-encanto-green w-6 h-6" />
              </div>
              <h3 className="font-semibold text-encanto-dark">Ambiente Natural</h3>
              <p className="text-sm text-gray-500">Conexión total con la naturaleza</p>
            </div>
            
            <div className="w-px h-16 bg-gray-200"></div>
            
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 bg-encanto-lightYellow rounded-full flex items-center justify-center mb-3">
                <Users className="text-encanto-yellow w-6 h-6" />
              </div>
              <h3 className="font-semibold text-encanto-dark">Ideal para Familias</h3>
              <p className="text-sm text-gray-500">Espacios para todas las edades</p>
            </div>
            
            <div className="w-px h-16 bg-gray-200"></div>
            
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 bg-encanto-lightBlue rounded-full flex items-center justify-center mb-3">
                <CalendarCheck className="text-encanto-blue w-6 h-6" />
              </div>
              <h3 className="font-semibold text-encanto-dark">Reservas Fáciles</h3>
              <p className="text-sm text-gray-500">Asegura tu lugar en minutos</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
