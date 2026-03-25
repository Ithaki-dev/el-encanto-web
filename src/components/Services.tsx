import { motion } from 'framer-motion';
import { Waves, Trees, Tent, Utensils, Volleyball, PartyPopper } from 'lucide-react';

const servicesList = [
  {
    icon: Waves,
    title: "Piscinas",
    description: "Refrescantes piscinas para adultos y niños, ideales para combatir el calor y divertirse.",
    color: "bg-encanto-lightBlue",
    textColor: "text-encanto-blue"
  },
  {
    icon: Trees,
    title: "Áreas Verdes",
    description: "Amplios jardines y senderos rodeados de naturaleza para caminar y respirar aire puro.",
    color: "bg-encanto-lightGreen",
    textColor: "text-encanto-green"
  },
  {
    icon: Tent,
    title: "Ranchos y Descanso",
    description: "Espacios techados y acogedores para relajarse en familia o leer un buen libro.",
    color: "bg-orange-100",
    textColor: "text-orange-500"
  },
  {
    icon: Utensils,
    title: "Restaurante",
    description: "Deliciosa comida local e internacional preparada con ingredientes frescos del día.",
    color: "bg-encanto-lightYellow",
    textColor: "text-yellow-600"
  },
  {
    icon: Volleyball,
    title: "Recreación",
    description: "Canchas deportivas y áreas de juego para mantener la energía y la diversión al máximo.",
    color: "bg-red-100",
    textColor: "text-red-500"
  },
  {
    icon: PartyPopper,
    title: "Eventos",
    description: "Zonas especiales adaptadas para celebrar cumpleaños, reuniones o eventos corporativos.",
    color: "bg-purple-100",
    textColor: "text-purple-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-encanto-blue font-semibold uppercase tracking-wider mb-2">Atracciones</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-encanto-dark mb-6">
            Todo lo que necesitas para un <span className="text-encanto-blue">día perfecto</span>
          </h2>
          <p className="text-gray-600 text-lg">
            En El Encanto ofrecemos una amplia variedad de espacios y actividades 
            diseñadas para que cada miembro de la familia encuentre su lugar favorito.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesList.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color}`}>
                <service.icon className={`w-7 h-7 ${service.textColor}`} />
              </div>
              <h3 className="text-xl font-bold text-encanto-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
