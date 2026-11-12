import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Emotional() {
  const images = [
    "https://imgur.com/YG69u4j.png",
    "https://imgur.com/XHizIc2.png",
    "https://imgur.com/e47uGH7.png",
    "https://imgur.com/Ihg6jzk.png",
    "https://imgur.com/vI6TIkV.png",
    "https://imgur.com/lghBtG2.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#FFF8ED] p-8 py-10"
    >
      <div className="max-w-[520px] mx-auto text-center">
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="inline-block bg-[#C82127] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
        >
          🎄 O RESULTADO QUE VOCÊ QUER
        </motion.div>
        
        <motion.h2 
           initial={{ opacity: 0, y: 12 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2, duration: 0.4 }}
           className="text-2xl font-bold text-[#176B43] mb-4 leading-tight"
        >
          Quem disse que uma ceia econômica não pode ficar <span className="text-[#C82127]">LINDA ASSIM?</span>
        </motion.h2>

        <motion.p 
           initial={{ opacity: 0, y: 12 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3, duration: 0.4 }}
           className="text-[#51483E] mb-8"
        >
          Imagine essa mesa pronta, os pratos caprichados e sua família reunida para aproveitar o Natal.
        </motion.p>

        <div className="relative w-full h-[300px] md:h-[400px] rounded-[14px] shadow-[0_8px_24px_rgba(60,35,20,0.16)] mb-8 overflow-hidden cursor-pointer border border-[#E7BE56]/30">
          <AnimatePresence mode="popLayout">
            <motion.img 
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Fotografia da Ceia de Natal ${currentIndex + 1}`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="absolute w-full h-full object-contain bg-[#FFF8ED]"
            />
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-colors ${i === currentIndex ? 'bg-[#C82127]' : 'bg-[#E7BE56]'}`}
            />
          ))}
        </div>

        <motion.p
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5, duration: 0.4 }}
           className="text-[#176B43] font-bold"
        >
           Não é sobre gastar mais. É sobre escolher bem o que preparar. ❤️
        </motion.p>
      </div>
    </motion.section>
  );
}
