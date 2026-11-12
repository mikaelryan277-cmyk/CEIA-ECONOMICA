import { motion } from 'motion/react';
import { Wallet } from 'lucide-react';

export default function TargetAudience() {
  return (
    <section className="bg-[#173D2B] text-white py-12 px-6 overflow-hidden">
      <div className="max-w-[520px] mx-auto text-center">
        {/* Top Gold Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-[#F4C66B] text-[11px] font-bold tracking-[0.2em] uppercase mb-4"
        >
          ✦ FEITO PARA QUEM QUER FAZER BONITO ✦
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-bold font-serif mb-3 leading-tight"
        >
          Sua primeira ceia pode ser <span className="text-[#F4C66B]">inesquecível.</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-200 text-sm mb-8 px-4 leading-relaxed"
        >
          Mesmo sem experiência na cozinha e sem gastar além do que pode.
        </motion.p>

        {/* Large Feature Photo with Red Panel Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 border border-[#F4C66B]/30"
        >
          <img
            src="https://imgur.com/YG69u4j.png"
            alt="Ceia de Natal Especial"
            className="w-full h-auto object-cover aspect-[4/3]"
          />

          {/* Red Natalino Panel over lower part */}
          <div className="bg-[#8C1820] p-6 text-left text-white border-t border-[#F4C66B]/20">
            <span className="inline-block text-[#F4C66B] text-[10px] font-bold uppercase tracking-wider mb-2">
              O QUE VOCÊ PRECISA NÃO É EXPERIÊNCIA.
            </span>
            <h3 className="text-xl font-bold mb-2 font-serif">
              É saber por onde começar.
            </h3>
            <p className="text-xs text-gray-100 leading-relaxed">
              Cardápio escolhido, compras organizadas e preparo explicado. Um caminho para sair da dúvida e colocar a ceia na mesa.
            </p>
          </div>
        </motion.div>

        {/* Gold Debt-free Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative bg-[#F4C66B] text-[#173D2B] p-6 rounded-2xl text-left shadow-lg overflow-hidden border border-white/20"
        >
          {/* Subtle light shimmer effect across strip */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none animate-pulse" />

          <div className="flex items-start gap-3 mb-3">
            <div className="bg-[#173D2B] text-[#F4C66B] p-2 rounded-xl">
              <Wallet size={22} />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C1820] block mb-1">
                SEU NATAL NÃO PRECISA VIRAR UMA DÍVIDA
              </span>
              <h4 className="font-bold text-base font-serif text-[#173D2B] leading-snug">
                Faça bonito no Natal. E comece janeiro com mais tranquilidade.
              </h4>
            </div>
          </div>
          <p className="text-xs text-[#2A4D3C] leading-relaxed font-medium">
            Com uma lista pronta, você sabe o que procurar no mercado antes de sair comprando por impulso.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
