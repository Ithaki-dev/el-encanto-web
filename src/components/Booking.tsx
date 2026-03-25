import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Mail, Phone, User, MessageSquare, CheckCircle2 } from 'lucide-react';

const Booking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    guests: '2',
    package: 'day-pass',
    comments: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="booking" className="section-padding bg-white relative">
      <div className="container-custom relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
          
          {/* Visual/Info Side */}
          <div className="w-full lg:w-5/12 bg-encanto-dark p-10 md:p-12 flex flex-col justify-between relative overflow-hidden text-white">
            <div className="absolute inset-0 z-0 opacity-20">
              <img 
                src="images/reservas.jpg" 
                alt="Fondo reserva" 
                className="w-full h-full object-cover text-white"
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-white">Asegura tu lugar en el paraíso</h3>
              <p className="text-blue-100 mb-8 text-lg">
                Reserva hoy mismo y prepárate para vivir momentos inolvidables en El Encanto.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <CheckCircle2 className="w-6 h-6 text-encanto-yellow" />
                  </div>
                  <div>
                    <strong className="block text-lg">Reserva Sin Costo</strong>
                    <span className="text-blue-100">Paga al llegar a nuestras instalaciones</span>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <CheckCircle2 className="w-6 h-6 text-encanto-green" />
                  </div>
                  <div>
                    <strong className="block text-lg">Confirmación Inmediata</strong>
                    <span className="text-blue-100">Recibe tu pase de acceso en tu correo</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-7/12 p-10 md:p-12">
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-10"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-encanto-dark mb-4">¡Reserva Solicitada!</h3>
                <p className="text-gray-600 mb-8 max-w-md">
                  Gracias por elegir El Encanto. Hemos recibido tu solicitud y te contactaremos 
                  pronto para confirmar los detalles de tu visita.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="btn-secondary"
                >
                  Hacer otra reserva
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-encanto-dark mb-8">Completa tus datos</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                      <div className="relative relative flex items-center">
                        <User className="absolute left-3 w-5 h-5 text-gray-400" />
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-encanto-blue focus:border-transparent outline-none transition-all"
                          placeholder="Juan Pérez"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                      <div className="relative relative flex items-center">
                        <Phone className="absolute left-3 w-5 h-5 text-gray-400" />
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-encanto-blue focus:border-transparent outline-none transition-all"
                          placeholder="+506 8888 8888"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                    <div className="relative relative flex items-center">
                      <Mail className="absolute left-3 w-5 h-5 text-gray-400" />
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-encanto-blue focus:border-transparent outline-none transition-all"
                        placeholder="juan@ejemplo.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de visita</label>
                      <div className="relative relative flex items-center">
                        <Calendar className="absolute left-3 w-5 h-5 text-gray-400" />
                        <input 
                          type="date" 
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-encanto-blue focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cantidad de personas</label>
                      <div className="relative relative flex items-center">
                        <Users className="absolute left-3 w-5 h-5 text-gray-400 z-10" />
                        <select 
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-encanto-blue focus:border-transparent outline-none transition-all appearance-none cursor-pointer bg-white"
                        >
                          <option value="1">1 Persona</option>
                          <option value="2">2 Personas</option>
                          <option value="3">3 Personas</option>
                          <option value="4">4 Personas</option>
                          <option value="5">5 Personas</option>
                          <option value="6+">6 o más Personas</option>
                        </select>
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de entrada</label>
                      <select 
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-encanto-blue focus:border-transparent outline-none transition-all cursor-pointer bg-white"
                      >
                        <option value="day-pass">Pase del Día</option>
                        <option value="vip">Pase VIP con Almuerzo</option>
                        <option value="event">Evento Especial</option>
                        <option value="camping">Camping</option>
                      </select>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Comentarios (Opcional)</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea 
                        name="comments"
                        rows={3}
                        value={formData.comments}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-encanto-blue focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Algún requerimiento especial..."
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit" className="w-full btn-primary py-4 text-lg">
                    Reservar ahora
                  </button>

                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
