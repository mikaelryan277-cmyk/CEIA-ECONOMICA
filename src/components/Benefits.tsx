import { motion } from 'motion/react';

export default function Benefits() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#FFF8EE] p-6 py-10"
    >
      <div className="max-w-[520px] mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#196B45] mb-4 leading-tight">
          Tudo que você precisa para preparar sua ceia, <span className="text-[#C82127]">em um só lugar!</span>
        </h2>
        <p className="text-[#514840] mb-8 leading-relaxed">
          Cardápios econômicos, listas de compras, receitas passo a passo e planejamento para facilitar seu Natal.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-full flex justify-center"
        >
          <img 
            src="https://imgur.com/5MyKXN8.png"
            alt="Mega Mockup Ceia Linda de Natal"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
