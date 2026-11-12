import { useState } from 'react';
import { motion } from 'motion/react';
import { CHECKOUT_URLS } from '@/src/config/checkout';
import UpgradeModal from './UpgradeModal';

export default function Plans() {
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);

  // Generate 20 delicate snowflakes for a natural effect
  const snowflakes = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: `${(i * 5) + (i % 3) * 1.5}%`,
    size: `${(i % 3) + 2}px`,
    duration: `${4 + (i % 3) * 1.5}s`,
    delay: `${(i * 0.3) % 4}s`,
    opacity: 0.25 + (i % 4) * 0.1
  }));

  const handleCompletoClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        value: 37.90,
        currency: 'BRL',
        content_ids: ['ceia-completo']
      });
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="plans" 
      className="p-8"
    >
      <div className="max-w-[520px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-[var(--color-verde-vivo)] mb-3">Agora escolha como você quer preparar seu Natal! 🎄</h2>
          <p className="text-sm text-[var(--color-texto-secundario)] mb-10 leading-relaxed">
            Você já viu como pode ser sua ceia. Agora escolha o guia ideal para você e comece a planejar um <span className="text-[#C82127] font-semibold">Natal lindo</span>, sem complicação e respeitando seu orçamento. ❤️
          </p>
        </motion.div>
        
        {/* Básico */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-[var(--color-branco)] p-8 rounded-2xl border border-gray-100 mb-8 shadow-sm text-left"
        >
          <h3 className="font-bold text-lg mb-4 text-[var(--color-verde-escuro)]">CEIA ESSENCIAL</h3>
          <p className="text-sm text-[var(--color-texto-secundario)] mb-6 leading-relaxed">Para quem quer receitas e um cardápio organizado.</p>
          <ul className="space-y-3 mb-8 text-sm text-[var(--color-texto-principal)]">
            <li><span className="text-[var(--color-verde-vivo)] font-bold mr-2">✓</span> 2 cardápios econômicos.</li>
            <li><span className="text-[var(--color-verde-vivo)] font-bold mr-2">✓</span> Receitas passo a passo.</li>
            <li><span className="text-[var(--color-verde-vivo)] font-bold mr-2">✓</span> Listas de compras.</li>
            <li><span className="text-[var(--color-verde-vivo)] font-bold mr-2">✓</span> Quantidades dos ingredientes.</li>
            <li><span className="text-[var(--color-verde-vivo)] font-bold mr-2">✓</span> Acesso ao material digital.</li>
          </ul>
          <p className="text-3xl font-bold mb-6 text-[var(--color-texto-principal)]">R$ 9,90</p>
          <button 
            onClick={() => setIsUpgradeOpen(true)}
            className="cta-button w-full bg-[var(--color-verde-vivo)] text-[var(--color-branco)] py-4 rounded-[12px] font-bold shadow-[0_4px_0_#145236,_0_8px_16px_rgba(20,82,54,0.18)] hover:bg-[#18583B] transition-all duration-300 active:translate-y-[2px] cursor-pointer"
          >
            QUERO O ESSENCIAL
          </button>
        </motion.div>

        {/* Premium */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-b from-[#18583B] to-[#12422C] p-8 rounded-3xl text-[var(--color-branco)] shadow-[0_12px_35px_rgba(20,82,54,0.35),0_0_25px_rgba(231,190,86,0.25)] relative border-4 border-[var(--color-dourado)] overflow-hidden"
        >
          {/* Snowfall Container */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-3xl">
            {snowflakes.map((flake) => (
              <div
                key={flake.id}
                className="absolute bg-white rounded-full"
                style={{
                  left: flake.left,
                  width: flake.size,
                  height: flake.size,
                  opacity: flake.opacity,
                  animation: `snowfall ${flake.duration} linear infinite`,
                  animationDelay: flake.delay,
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            {/* Flow-based badge with zero overlap risk */}
            <div className="flex justify-center mb-5">
              <span className="bg-[var(--color-dourado)] text-[var(--color-verde-escuro)] px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md border border-white/20">
                ⭐ PLANO MAIS COMPLETO
              </span>
            </div>

            <h3 className="font-bold text-lg mb-3 text-center leading-snug">Quer preparar uma ceia ainda mais bonita, com aulas práticas para acompanhar cada etapa?</h3>
            <p className="text-sm mb-6 text-center text-gray-200">Então o Ceia Linda Completa foi feito para você!</p>
            
            <div className="space-y-3 mb-6 text-sm text-left">
                <div className="bg-[#FFF8EE]/95 backdrop-blur-sm p-3.5 rounded-xl text-[var(--color-verde-vivo)] font-semibold border border-[var(--color-dourado)] shadow-sm">✓ 5 videoaulas práticas.</div>
                <div className="bg-[#FFF8EE]/95 backdrop-blur-sm p-4 rounded-xl text-[var(--color-verde-vivo)] font-semibold border border-[var(--color-dourado)] shadow-sm">✓ Bônus exclusivos.</div>
                <ul className="space-y-1.5 text-[var(--color-branco)] text-xs pl-2">
                  <li>✓ Tudo do plano essencial.</li>
                  <li>✓ Cardápios extras.</li>
                  <li>✓ Cronograma de compras e preparo.</li>
                  <li>✓ Guia da primeira ceia.</li>
                  <li>✓ Substituições econômicas.</li>
                  <li>✓ Dicas para deixar os pratos mais bonitos.</li>
                </ul>
            </div>
            
            <p className="text-5xl font-bold mb-2 text-center text-[var(--color-branco)] tracking-tight">R$ 37,90</p>
            <p className="text-xs mb-8 text-center text-[var(--color-dourado)] font-semibold">Uma pequena escolha para começar a planejar um Natal especial!</p>
            
            <a 
              href={CHECKOUT_URLS.completo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCompletoClick}
              className="cta-button block text-center w-full bg-[#C82127] text-white py-5 rounded-[12px] font-bold text-lg shadow-[0_5px_0_#8F1720,_0_10px_20px_rgba(100,15,20,0.18)] transition-all duration-300 active:translate-y-[3px] active:shadow-[0_2px_0_#8F1720,_0_4px_10px_rgba(100,15,20,0.15)] hover:bg-[#B51D25] hover:-translate-y-[2px] hover:shadow-[0_7px_0_#8F1720,_0_14px_24px_rgba(100,15,20,0.20)]"
            >
              🎁 QUERO MINHA CEIA COMPLETA!
            </a>
          </div>
        </motion.div>
      </div>

      {/* Upgrade Modal */}
      <UpgradeModal isOpen={isUpgradeOpen} onClose={() => setIsUpgradeOpen(false)} />
    </motion.section>
  );
}
