import { motion } from 'motion/react';
import { ShoppingCart, NotebookTabs, Wallet, Heart } from 'lucide-react';

export default function PainPoints() {
  const cards = [
    { title: "O susto no mercado", text: "Você olha os preços e começa a tirar pratos da ceia antes mesmo de começar.", icon: ShoppingCart },
    { title: "Receitas que viram confusão", text: "Salva um monte de ideias bonitas, mas não sabe o que comprar nem quanto vai gastar.", icon: NotebookTabs },
    { title: "O medo de janeiro", text: "Quer caprichar no Natal, mas sabe que as contas do próximo mês não vão esperar.", icon: Wallet },
    { title: "A vontade de fazer bonito", text: "No fundo, só quer ver a família reunida e sentir orgulho da mesa que preparou.", icon: Heart }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-[#FFF8EE] p-6 py-10"
    >
      <div className="max-w-[520px] mx-auto">
        <h2 className="text-2xl font-bold text-[#196B45] text-center mb-3 leading-tight">
          Já pensou preparar a ceia dos sonhos… e depois <span className="text-[#C82127]">ficar apertada com as contas de janeiro?</span>
        </h2>
        <p className="text-center text-[#37312C] mb-8">
          O Natal passa rápido. Mas uma compra mal planejada pode pesar no bolso por muito mais tempo.
        </p>

        <div className="space-y-3">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.09 }}
              whileHover={{ y: -3, borderColor: '#A91C26' }}
              className="bg-white p-3 rounded-[12px] flex items-center gap-4 border border-[#EDD9C9] shadow-sm transition-colors"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileInView={{ scale: [1, 1.07, 1] }}
                transition={{ duration: 0.7, delay: i * 0.09 + 0.2 }}
                className="bg-[#F8E5E5] p-2.5 rounded-lg flex-shrink-0"
              >
                <card.icon className="text-[#C82127]" size={22} />
              </motion.div>
              <div className="text-left">
                <h4 className="font-bold text-[#A91C26] text-sm mb-0.5">{card.title}</h4>
                <p className="text-[13px] text-[#37312C] leading-snug">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="bg-[#196B45] p-5 rounded-[12px] text-white text-center mt-6"
        >
          <p className="font-bold mb-1.5">Você não precisa escolher entre uma ceia especial e começar janeiro com tranquilidade.</p>
          <p className="text-xs text-[#FFF8EE]">O primeiro passo é planejar o que vai servir e quanto pode gastar.</p>
        </motion.div>
      </div>
    </motion.section>
  );
}
