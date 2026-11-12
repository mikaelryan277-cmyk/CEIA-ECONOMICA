import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preview() {
  const previews = [
    {
      title: "Cardápios econômicos",
      desc: "Sugestões prontas para você escolher sua ceia sem ficar montando tudo do zero.",
      img: "https://i.imgur.com/vkL81pY.png"
    },
    {
      title: "Listas de compras",
      desc: "Saiba exatamente o que comprar e evite esquecer ingredientes importantes.",
      img: "https://i.imgur.com/kMCTUEr.png"
    },
    {
      title: "Receitas passo a passo",
      desc: "Aprenda o preparo de cada prato com orientações simples e organizadas.",
      img: "https://i.imgur.com/vVeqmyl.png"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % previews.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % previews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + previews.length) % previews.length);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
    }),
    center: {
      x: 0,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
    }),
  };

  return (
    <section className="bg-[#FFF8EE] p-6 sm:p-8 py-10">
      <div className="max-w-[520px] mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-[#196B45] mb-4"
        >
          Veja por dentro o que você vai receber! 🎁
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#514840] mb-8"
        >
          Cardápios prontos, listas organizadas e receitas explicadas para facilitar sua ceia do início ao fim.
        </motion.p>
        
        {/* Carousel Container with explicit height */}
        <div className="relative w-full h-[380px] sm:h-[420px] rounded-[14px] shadow-[0_8px_24px_rgba(60,35,20,0.12)] mb-6 overflow-hidden border border-[#EBD7C7] bg-white">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div 
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.9, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, { offset }) => {
                if (offset.x < -40) {
                  handleNext();
                } else if (offset.x > 40) {
                  handlePrev();
                }
              }}
              className="absolute inset-0 w-full h-full bg-white p-4 sm:p-5 flex flex-col items-center justify-between cursor-grab active:cursor-grabbing"
            >
              <div className="w-[95%] h-[250px] sm:h-[280px] flex items-center justify-center overflow-hidden">
                <img 
                  src={previews[currentIndex].img} 
                  alt={previews[currentIndex].title} 
                  className="w-full h-full object-contain pointer-events-none select-none" 
                />
              </div>
              <div className="w-full text-center mt-2">
                <h3 className="font-bold text-[#196B45] text-base mb-1">{previews[currentIndex].title}</h3>
                <p className="text-xs sm:text-sm text-[#514840] leading-snug px-2">{previews[currentIndex].desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {previews.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-colors ${i === currentIndex ? 'bg-[#C82127]' : 'bg-[#E7BE56]'}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <a href="#plans" className="cta-button block w-full bg-[#C82127] text-white py-5 rounded-[12px] font-bold text-lg shadow-[0_5px_0_#8F1720,_0_10px_20px_rgba(100,15,20,0.18)] transition-all duration-300 active:translate-y-[3px] active:shadow-[0_2px_0_#8F1720,_0_4px_10px_rgba(100,15,20,0.15)] hover:bg-[#B51D25] hover:-translate-y-[2px] hover:shadow-[0_7px_0_#8F1720,_0_14px_24px_rgba(100,15,20,0.20)]">
          QUERO MEU GUIA DE NATAL!
        </a>
      </div>
    </section>
  );
}
