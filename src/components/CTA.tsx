import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="section-padding bg-encanto-green relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Haz de tu próxima salida una <span className="text-encanto-yellow">experiencia especial</span>
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Únete a cientos de visitantes que ya han disfrutado del descanso y la diversión 
            que solo El Encanto puede ofrecer. ¿Estás listo para vivirlo?
          </p>
          <a 
            href="#booking" 
            className="inline-block px-10 py-5 bg-encanto-yellow text-encanto-dark text-lg font-bold rounded-full shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            Agenda tu visita hoy
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
