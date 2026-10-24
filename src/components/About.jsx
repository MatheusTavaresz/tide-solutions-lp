import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import { RevealStagger, RevealItem } from './ui/Reveal'
import portrait from '../assets/patrick.jpg'

const circles = [
  {
    id: 'why',
    label: 'Por que',
    title: 'Por que fazemos',
    body: 'Acreditamos que nenhuma empresa deveria limitar seu crescimento porque seus sistemas não conversam ou porque seus colaboradores viraram “digitadores de luxo”. O valor de uma equipe está na estratégia, não em transferir dados de uma tela para outra.',
  },
  {
    id: 'how',
    label: 'Como',
    title: 'Como fazemos',
    body: 'Mapeamos o processo, desenhamos o fluxo e implementamos a solução sob medida: automação no WhatsApp, integração entre sistemas, migração de Excel, Word e PDF, leitura de documentos ou coleta em páginas e portais.',
  },
  {
    id: 'what',
    label: 'O que',
    title: 'O que entregamos',
    body: 'Soluções sob medida que conectam o WhatsApp aos seus sistemas, migram dados de Excel, Word e PDF, leem documentos, coletam informações de páginas e portais e alimentam o ERP ou banco via API.',
  },
]

export default function About() {
  return (
    <section id="sobre" className="border-t border-line bg-white py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16">
          <figure className="mx-auto w-full max-w-xs lg:sticky lg:top-28 lg:mx-0 lg:max-w-none">
            <img
              src={portrait}
              alt="Matheus Patrick Tavares Soares"
              className="w-full rounded-2xl ring-1 ring-line"
            />
          </figure>

          <div className="min-w-0">
            <SectionHeading
              title="Sobre nós"
              description="A Tide existe para devolver tempo estratégico às equipes, conectando canais, dados e sistemas com engenharia de verdade."
            />

            <RevealStagger className="mt-10 space-y-0" stagger={0.12}>
              {circles.map((item) => (
                <RevealItem
                  key={item.id}
                  className="grid gap-4 border-t border-line py-11 sm:grid-cols-[140px_1fr] sm:gap-10"
                  y={28}
                >
                  <p className="font-display text-sm font-bold tracking-[0.2em] text-tide uppercase">
                    {item.label}
                  </p>
                  <div>
                    <h3 className="type-display text-2xl font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="type-lead mt-4 max-w-3xl text-base text-slate">
                      {item.body}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </Container>
    </section>
  )
}
