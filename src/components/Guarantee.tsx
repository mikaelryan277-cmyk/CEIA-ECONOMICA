import { Lock } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="bg-white p-5 rounded-2xl mx-4 my-6 border border-[#1F7A4C]/20 shadow-sm flex items-start gap-4">
      <div className="bg-[#1F7A4C]/10 p-2.5 rounded-xl text-[#1F7A4C] flex-shrink-0 mt-0.5">
        <Lock size={22} />
      </div>
      <div>
        <h3 className="font-bold text-[#1F7A4C] text-base mb-1">🔒 Compra segura e acesso digital</h3>
        <p className="text-[15px] text-[#1F2A24] leading-relaxed mb-2">
          Escolha seu plano, finalize o pagamento no checkout e receba as instruções para acessar seu material digital após a confirmação.
        </p>
        <p className="text-xs font-semibold text-[#4E5B55] tracking-wide">
          Pagamento único • Produto digital • Sem envio físico
        </p>
      </div>
    </section>
  );
}
