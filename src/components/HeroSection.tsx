import { Check } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center pt-8 pb-12 px-4 max-w-[500px] mx-auto text-center">
      <div className="w-full bg-[#1E5B3F] text-white text-xs py-2 mb-6 rounded-md">
        O SEGREDO PARA UM NATAL COMPLETO E ECONÔMICO
      </div>
      <h1 className="text-3xl font-bold text-[#1E5B3F] mb-6">
        Cardápios prontos, listas de compras e receitas passo a passo para sua ceia de Natal <span className="text-[#B8322A]">caber no bolso!</span>
      </h1>
      <div className="w-full h-64 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
        [MOCKUP DO EBOOK]
      </div>
      <div className="bg-[#FCE9C4] text-[#1E5B3F] text-xs px-4 py-1 rounded-full mb-6 font-semibold">
        EDIÇÃO ESPECIAL DE NATAL
      </div>
      <h2 className="text-xl font-bold text-[#1E5B3F] mb-4">
        Uma ceia de Natal bonita, farta e gostosa, sem gastar mais do que você pode.
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Descubra como planejar tudo com antecedência e economizar muito.
      </p>
      <button className="w-full bg-[#B8322A] text-white py-4 rounded-lg font-bold text-lg shadow-[0_4px_0_#9a2a24] mb-4">
        Quero montar minha ceia
      </button>
      <div className="flex gap-2 text-[#1E5B3F] text-sm font-semibold">
        <Check size={18} /> Economia garantida
        <Check size={18} /> Passo a passo
      </div>
    </section>
  );
}
