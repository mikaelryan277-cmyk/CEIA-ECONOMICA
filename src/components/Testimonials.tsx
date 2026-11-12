import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Juliana M.",
      text: "Meninaaa, fiz o frango de teste aqui em casa domingo e ficou uma delícia kkkkk 😍 meu marido já falou que quer de novo no Natal. Agora vou testar a farofa também ❤️",
      time: "14:22",
      photo: "https://imgur.com/Qq0OI1b.png"
    },
    {
      name: "Patrícia S.",
      text: "Aqui em casa somos 5 e eu tava sem ideia do que preparar sem gastar demais. Gostei muito da parte da lista de compras, porque dá pra ir organizando tudo antes 🥰",
      time: "15:40",
      photo: "https://imgur.com/IFER5fz.png"
    },
    {
      name: "Camila R.",
      text: "Gente, eu nunca fiz uma ceia sozinha kkkk. Tô começando pelas receitas mais fáceis e já escolhi o que quero fazer no Natal. Achei bem explicadinho ❤️",
      time: "18:10",
      photo: "https://imgur.com/lYP5T0Y.png"
    },
    {
      name: "Rosângela A.",
      text: "Esse ano a ceia vai ser aqui em casa e eu já tava ficando doida pensando em tanta coisa 😂 ter tudo organizado num lugar só ajuda demais!",
      time: "09:15",
      photo: "https://imgur.com/h2hmDRV.png"
    }
  ];

  return (
    <section className="bg-[var(--color-fundo)] p-6 py-12">
      <div className="max-w-[520px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-block text-[#C82127] text-[10px] font-bold tracking-widest uppercase bg-[#F8E5E5] px-3 py-1 rounded-full mb-3">
            Prévia ilustrativa dos depoimentos
          </span>
          <h2 className="text-2xl font-bold text-[#1F7A4C] mb-3 leading-tight">
            "Quem disse que uma ceia bonita precisa ser complicada? ❤️"
          </h2>
          <p className="text-[#4E5B55] text-sm mb-8">
            "Veja exemplos de experiências que queremos proporcionar com o nosso guia."
          </p>
        </motion.div>

        <div className="space-y-4 text-left">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white p-4 rounded-2xl rounded-tl-sm border border-[#EBD7C7] shadow-sm relative ml-2 sm:ml-4 mr-2"
            >
              {/* WhatsApp tail accent */}
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-white border-t border-l border-[#EBD7C7] transform rotate-45" />

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-[54px] h-[54px] rounded-full object-cover object-center border-2 border-[#1F7A4C] shadow-sm flex-shrink-0"
                  />
                  <span className="font-bold text-sm text-[#1F2A24]">{item.name}</span>
                </div>
                <span className="text-[10px] text-gray-400 flex items-center gap-1">
                  <MessageCircle size={10} className="text-[#1F7A4C]" /> {item.time}
                </span>
              </div>

              <p className="text-sm text-[#37312C] leading-relaxed bg-[#FFF8EE] p-3 rounded-xl border border-[#F5EAD9]">
                "{item.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
