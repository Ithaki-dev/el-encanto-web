import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, HeartHandshake, MapPin } from 'lucide-react';

const benefitsList = [
  {
    icon: HeartHandshake,
    title: "Atención Personalizada",
    description: "Nuestro equipo está dedicado a hacer de tu visita una experiencia cálida y memorable."
  },
  {
    icon: ShieldCheck,
    title: "Tranquilidad y Seguridad",
    description: "Instalaciones seguras y bien mantenidas para que solo te preocupes por disfrutar."
  },
  {
    icon: Sparkles,
    title: "Espacios Mágicos",
    description: "Rincones fotogénicos e ideales para celebraciones, retiros y momentos únicos."
  },
  {
    icon: MapPin,
    title: "Fácil Acceso",
    description: "Ubicación privilegiada con rápidos accesos y proceso de reserva sin complicaciones."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-encanto-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-encanto-blue/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/3">
            <h4 className="text-encanto-yellow font-semibold uppercase tracking-wider mb-2">Por qué elegirnos</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Una experiencia diseñada para ti
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              En El Encanto combinamos lo mejor de un destino turístico con la calidez de un hogar. 
              Descubre por qué cientos de familias nos eligen cada mes.
            </p>
            <a href="#booking" className="btn-primary bg-encanto-yellow text-encanto-dark hover:bg-yellow-400">
              Agenda tu visita
            </a>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefitsList.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-encanto-yellow rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-encanto-dark" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Benefits;
