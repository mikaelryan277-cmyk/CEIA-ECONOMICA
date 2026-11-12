import { motion } from 'motion/react';

export default function Hero() {
  const marqueeText = "🔥 BLACK FRIDAY DE NATAL • CONDIÇÃO ESPECIAL POR TEMPO LIMITADO! 🎄";
  
  return (
    <section className="flex flex-col items-center pt-0 pb-8 text-center">
      <div className="w-full bg-[#B51226] text-white py-2 mb-6 overflow-hidden h-[38px] flex items-center whitespace-nowrap">
        <motion.div 
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-sm font-bold tracking-wide">
              {marqueeText.split("•").map((part, index) => (
                <span key={index}>
                  {part}
                  {index === 0 && <span className="text-[#F5C542] mx-3">•</span>}
                </span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>
      <div className="px-4 max-w-[520px]">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[28px] font-bold text-[#175B3B] mb-3 leading-[1.15]"
        >
          Prepare uma CEIA DE NATAL LINDA E DELICIOSA gastando <span className="text-[#C62828] font-extrabold">MENOS DE R$ 150!</span>
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg font-bold text-[#175B3B] mb-5"
        >
          Mesmo que seja sua primeira vez! Receba cardápios, listas de compras e receitas passo a passo.
        </motion.h2>
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-full mb-6"
        >
          <img 
            src="https://i.imgur.com/b4JIHsj.png" 
            alt="Mockup do Guia Ceia Linda de Natal" 
            className="w-full h-auto object-contain rounded-2xl shadow-xl border border-gray-100"
          />
        </motion.div>
        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="#plans" 
          className="cta-button block w-full bg-[#C82127] text-white py-4 rounded-[12px] font-bold text-lg shadow-[0_5px_0_#8F1720,_0_10px_20px_rgba(100,15,20,0.18)] transition-all duration-300 mb-3 active:translate-y-[3px] active:shadow-[0_2px_0_#8F1720,_0_4px_10px_rgba(100,15,20,0.15)] hover:bg-[#B51D25] hover:-translate-y-[2px] hover:shadow-[0_7px_0_#8F1720,_0_14px_24px_rgba(100,15,20,0.20)]"
        >
          QUERO PREPARAR MINHA CEIA!
        </motion.a>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center gap-4 text-[var(--color-verde-vivo)] text-xs font-semibold"
        >
          <span>✓ A partir de R$ 9,90</span>
          <span>✓ Acesso imediato</span>
        </motion.div>
      </div>
    </section>
  );
}
