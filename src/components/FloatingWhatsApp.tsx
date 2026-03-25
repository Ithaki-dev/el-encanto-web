import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  const message = encodeURIComponent("Hola, me gustaría obtener información sobre reservas en El Encanto.");
  const whatsappUrl = `https://wa.me/50688888888?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] transition-all flex items-center justify-center group"
    >
      <MessageCircle className="w-8 h-8" />
      
      {/* Pulse effect */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping -z-10"></span>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none transform translate-x-2 group-hover:translate-x-0 duration-300">
        ¡Hablemos por WhatsApp!
        {/* Arrow */}
        <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-y-8 border-y-transparent border-l-8 border-l-white"></span>
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
