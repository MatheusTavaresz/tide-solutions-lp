import Container from './ui/Container'
import Reveal from './ui/Reveal'

export default function PainBar() {
  return (
    <section id="integracoes" className="border-y border-line bg-ink text-foam">
      <Container className="grid gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <Reveal>
          <p className="mb-4 font-display text-[0.72rem] font-semibold tracking-[0.22em] text-tide-soft uppercase">
            O custo dos sistemas isolados
          </p>
          <h2 className="type-display text-2xl font-bold sm:text-3xl">
            O problema invisível
          </h2>
          <p className="type-lead mt-5 text-base text-mist/90">
            Vendedores perdendo horas respondendo mensagens repetitivas, atendentes
            digitando boletos no ERP manualmente e dados críticos presos em Excel,
            Word, PDF ou planilhas sem comunicação com o sistema principal.
          </p>
        </Reveal>

        <Reveal
          delay={0.12}
          className="border-t border-white/10 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16"
        >
          <p className="mb-4 font-display text-[0.72rem] font-semibold tracking-[0.22em] text-tide-soft uppercase">
            A resposta da Tide
          </p>
          <h2 className="type-display text-2xl font-bold sm:text-3xl">
            Do canal ao sistema, sem digitar de novo
          </h2>
          <p className="type-lead mt-5 text-base text-mist/90">
            Conectamos WhatsApp, documentos e sistemas para que a informação entre
            uma vez e atualize o ERP, o banco ou o fluxo interno automaticamente.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
