import Container from './ui/Container'
import Reveal, { RevealStagger, RevealItem } from './ui/Reveal'

const items = [
  {
    title: 'Resiliência de Integrações',
    body: 'Arquitetura desacoplada com filas de retry e fallback. Nenhuma mensagem ou transação de cliente se perde.',
  },
  {
    title: 'Privacidade e LGPD',
    body: 'Tratamento estrito de dados pessoais em trânsito e em repouso, com cuidado com o que a LGPD exige na prática.',
  },
]

export default function Security() {
  return (
    <section id="seguranca" className="bg-depth text-foam">
      <Container className="py-20 sm:py-28">
        <Reveal className="max-w-3xl">
          <p className="mb-4 font-display text-[0.72rem] font-semibold tracking-[0.22em] text-tide-soft uppercase">
            Governança
          </p>
          <h2 className="type-display text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem]">
            Estabilidade & Segurança
          </h2>
          <p className="type-lead mt-5 text-base text-mist/85 sm:text-lg">
            Quando a operação depende de integrações e automações, a solução precisa
            aguentar volume, falha e auditoria.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid gap-10 md:grid-cols-2" stagger={0.12}>
          {items.map((item) => (
            <RevealItem key={item.title} className="border-t border-white/15 pt-7">
              <h3 className="type-display text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-mist/85">{item.body}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  )
}
