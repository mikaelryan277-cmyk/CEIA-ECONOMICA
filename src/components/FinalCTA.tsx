export default function FinalCTA() {
  return (
    <section className="bg-[var(--color-verde-escuro)] p-10 text-center text-[var(--color-branco)]">
      <div className="max-w-[520px] mx-auto">
        <h2 className="text-3xl font-bold mb-6 leading-tight">
          Neste Natal, sua mesa pode ser motivo de <span className="text-[var(--color-dourado)]">ORGULHO! ❤️</span>
        </h2>
        <p className="text-sm mb-6 text-gray-200 leading-relaxed">Eu sei que as coisas estão caras. Sei que o dinheiro precisa render.</p>
        <p className="text-sm mb-8 text-gray-200 leading-relaxed">Mas você ainda pode organizar uma ceia gostosa, bonita e feita com carinho para reunir as pessoas que ama.</p>
        <p className="text-xl font-bold text-[var(--color-dourado)] mb-8 leading-snug">
          Porque o valor do Natal não está no preço da mesa… está em quem se reúne ao redor dela.
        </p>
        <a href="#plans" className="cta-button block w-full bg-[#C82127] text-white py-5 rounded-[12px] font-bold text-lg shadow-[0_5px_0_#8F1720,_0_10px_20px_rgba(100,15,20,0.18)] transition-all duration-300 mb-4 active:translate-y-[3px] active:shadow-[0_2px_0_#8F1720,_0_4px_10px_rgba(100,15,20,0.15)] hover:bg-[#B51D25] hover:-translate-y-[2px] hover:shadow-[0_7px_0_#8F1720,_0_14px_24px_rgba(100,15,20,0.20)]">
          🎄 QUERO PREPARAR MINHA CEIA!
        </a>
        <p className="text-xs text-gray-300">Planos a partir de R$ 9,90 • Produto digital • Pagamento único</p>
      </div>
    </section>
  );
}
