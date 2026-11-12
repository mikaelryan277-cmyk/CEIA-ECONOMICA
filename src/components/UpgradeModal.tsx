import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, Check } from 'lucide-react';
import { CHECKOUT_URLS } from '@/src/config/checkout';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UpgradeModal({ isOpen, onClose }: UpgradeModalProps) {
  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleAccept = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        value: 27.90,
        currency: 'BRL',
        content_ids: ['ceia-downsell']
      });
    }
    window.location.href = CHECKOUT_URLS.downsell;
  };

  const handleDecline = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        value: 9.90,
        currency: 'BRL',
        content_ids: ['ceia-essencial']
      });
    }
    window.location.href = CHECKOUT_URLS.essencial;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="upgrade-title"
            className="relative w-full max-w-[480px] bg-[#8C1820] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#E7BE51] z-10 overflow-y-auto max-h-[90dvh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Fechar modal"
              className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/20 p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            {/* Tag */}
            <div className="flex justify-center mb-4">
              <span className="bg-[#E7BE51] text-[#145236] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <Gift size={14} /> UMA OFERTA ESPECIAL PARA VOCÊ!
              </span>
            </div>

            {/* Headline */}
            <h3 id="upgrade-title" className="text-lg sm:text-2xl font-bold font-serif text-center mb-3 text-white leading-snug">
              Antes de continuar... que tal levar o Guia COMPLETO economizando R$ 10?
            </h3>

            {/* Subheadline */}
            <p className="text-xs sm:text-sm text-gray-100 text-center mb-6 leading-relaxed">
              Você escolheu o Guia Essencial, mas pode aproveitar esta condição especial para receber também as videoaulas, cardápios extras e bônus do Plano Completo.
            </p>

            {/* Price Box */}
            <div className="bg-black/20 rounded-2xl p-4 text-center mb-6 border border-[#E7BE51]/40">
              <span className="text-xs uppercase tracking-wider text-[#E7BE51] font-semibold block mb-1">CONDIÇÃO EXCLUSIVA</span>
              <div className="flex items-center justify-center gap-3">
                <span className="text-base sm:text-lg text-gray-300 line-through">De R$ 37,90</span>
                <span className="text-2xl sm:text-4xl font-extrabold text-[#E7BE51]">por R$ 27,90</span>
              </div>
            </div>

            {/* Checklist */}
            <ul className="space-y-2 mb-6 text-xs sm:text-sm text-gray-100 bg-black/15 p-4 rounded-xl text-left">
              <li className="flex items-center gap-2"><Check size={16} className="text-[#E7BE51] flex-shrink-0" /> Tudo do Guia Essencial.</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-[#E7BE51] flex-shrink-0" /> 5 videoaulas práticas.</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-[#E7BE51] flex-shrink-0" /> Cardápios extras.</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-[#E7BE51] flex-shrink-0" /> Cronograma de compras e preparo.</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-[#E7BE51] flex-shrink-0" /> Bônus exclusivos.</li>
            </ul>

            {/* Primary Button */}
            <button
              onClick={handleAccept}
              className="w-full bg-[#E7BE51] text-[#145236] py-4 px-6 rounded-xl font-bold text-sm sm:text-lg shadow-lg hover:bg-[#f3d071] transition-all duration-300 active:scale-95 mb-3 text-center"
            >
              🎁 SIM! QUERO O COMPLETO POR R$ 27,90
            </button>

            {/* Secondary Button */}
            <button
              onClick={handleDecline}
              className="w-full text-white/90 hover:text-white py-3 px-4 rounded-xl font-medium text-xs sm:text-sm transition-colors text-center underline underline-offset-4"
            >
              Não, quero apenas o Essencial por R$ 9,90
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
