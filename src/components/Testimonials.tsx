import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "María Fernanda López",
    role: "Visita Familiar",
    comment: "Un lugar mágico. Mis hijos disfrutaron muchísimo de las piscinas y nosotros del descanso en los ranchos. ¡Definitivamente volveremos!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: "Carlos Rivera",
    role: "Escapada de Fin de Semana",
    comment: "Excelente servicio y atención. Las instalaciones están en perfecto estado y la comida del restaurante es deliciosa. Muy recomendado.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: "Ana Lucía Méndez",
    role: "Celebración de Cumpleaños",
    comment: "Celebramos el cumpleaños de mi mamá y no podríamos haber elegido mejor lugar. El personal nos ayudó en todo y la pasamos increíble.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2670&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-encanto-lightGreen/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-encanto-green font-semibold uppercase tracking-wider mb-2">Testimonios</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-encanto-dark mb-6">
            Lo que dicen nuestros <span className="text-encanto-green">visitantes</span>
          </h2>
          <p className="text-gray-600 text-lg">
            La sonrisa de quienes nos visitan es nuestra mejor carta de presentación.
            Descubre sus experiencias en El Encanto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote Mark */}
              <div className="text-encanto-lightGreen opacity-50 absolute top-4 right-6 text-6xl font-serif leading-none">
                "
              </div>
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-encanto-yellow text-encanto-yellow" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-8 relative z-10 italic">
                "{testimonial.comment}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-gray-50 pt-6 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-encanto-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
