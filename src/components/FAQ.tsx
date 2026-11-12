import { useState } from 'react';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "Nunca fiz uma ceia. Vou conseguir?", a: "Sim! As receitas são explicadas passo a passo para facilitar o preparo, inclusive para quem está começando." },
    { q: "Preciso comprar ingredientes caros?", a: "Os cardápios priorizam ingredientes acessíveis e trazem sugestões de substituições. Os preços variam de acordo com sua região." },
    { q: "O material é físico?", a: "Não. Você recebe um produto digital para acessar pelo celular ou computador." },
    { q: "Qual a diferença entre os planos?", a: "O essencial inclui receitas, cardápios e listas. O completo adiciona materiais extras de planejamento e cinco videoaulas práticas." },
    { q: "O pagamento é único?", a: "Sim! Você paga apenas o valor do plano escolhido, sem mensalidade." },
    { q: "Consigo preparar para poucas pessoas?", a: "Você pode escolher cardápios adequados e ajustar as quantidades com base nas orientações do material." }
  ];

  return (
    <section className="p-8">
      <div className="max-w-[520px] mx-auto">
        <h2 className="text-2xl font-bold text-[var(--color-verde-vivo)] text-center mb-10">Ainda ficou alguma dúvida?</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[var(--color-branco)] p-5 rounded-xl border border-gray-100 shadow-sm">
              <button 
                className="flex justify-between items-center w-full text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-sm text-[var(--color-verde-escuro)]">{faq.q}</span>
                <span className={`text-[var(--color-verde-vivo)] transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && <p className="text-sm mt-4 text-[var(--color-texto-secundario)] leading-relaxed animate-fade-in">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
