export default function Footer() {
  return (
    <footer className="p-8 text-center text-[var(--color-texto-secundario)] text-xs">
      <p className="mb-2">Ceia Linda de Natal 2026.</p>
      <div className="flex justify-center gap-4 mb-2">
        <span>Contato e suporte</span>
        <span>Política de Privacidade</span>
        <span>Termos de Uso</span>
      </div>
      <p className="mt-4 text-[10px] text-gray-400">Aviso sobre variação de preços dos ingredientes.</p>
    </footer>
  );
}
