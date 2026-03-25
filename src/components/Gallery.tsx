import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
  {
    src: "images/g_2.heic",
    alt: "Piscina cristalina",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    src: "images/g_3.heic",
    alt: "Comida en el restaurante",
    className: "col-span-1 row-span-1"
  },
  {
    src: "images/g_4.heic",
    alt: "Senderos verdes",
    className: "col-span-1 row-span-1"
  },
  {
    src: "images/g_5.jpg",
    alt: "Zona de descanso",
    className: "md:col-span-2 row-span-1"
  },
  {
    src: "images/g_6.jpg",
    alt: "Niños jugando",
    className: "col-span-1 row-span-1"
  },
  {
    src: "images/g_7.jpg",
    alt: "Áreas recreativas",
    className: "col-span-1 row-span-1"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h4 className="text-encanto-green font-semibold uppercase tracking-wider mb-2">Galería</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-encanto-dark">
              Explora nuestros <span className="text-encanto-green">rincones</span>
            </h2>
          </div>
          <a href="#booking" className="hidden md:inline-flex text-encanto-blue font-medium hover:text-blue-700 transition-colors mt-4 md:mt-0">
            Descubre más →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-none md:grid-rows-3 gap-4 h-auto md:h-[600px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${image.className}`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
              title="Cerrar"
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Imagen ampliada"
              className="max-w-full max-h-full rounded-2xl shadow-2xl object-scale-down cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
