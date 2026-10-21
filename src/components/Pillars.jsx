import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import { RevealStagger, RevealItem } from './ui/Reveal'

const pillars = [
  {
    id: 'whatsapp',
    number: '01',
    title: 'Agentes & Automações via WhatsApp Transacional',
    lead: 'Atendimento, cobrança, emissão de segundas vias e triagem no WhatsApp.',
    body: 'Bots integrados que respondem o cliente e executam ações no seu banco: consultam status de pedidos, emitem e enviam boletos, coletam dados cadastrais e encaminham para o atendente certo com o histórico pronto.',
  },
  {
    id: 'api',
    number: '02',
    title: 'Integrações Customizadas via API & Webhooks',
    lead: 'Sincronização entre ERPs legados, CRMs, plataformas de pagamento e bancos.',
    body: 'Conectamos sistemas que hoje não conversam entre si. O dado sai de onde é gerado (ERP, CRM, pagamento, planilha ou portal) e chega no destino certo, de forma automática e rastreável.',
  },
  {
    id: 'ocr',
    number: '03',
    title: 'Extração Inteligente de Documentos & OCR Híbrido',
    lead: 'Leitura e validação de faturas, boletos, notas fiscais e outros documentos.',
    body: 'Recebemos documentos por e-mail ou WhatsApp, extraímos os dados mesmo quando o arquivo está escaneado ou difícil de ler, e validamos as informações antes de entrar no sistema.',
  },
  {
    id: 'migration',
    number: '04',
    title: 'Migração de Sistemas & Dados',
    lead: 'Tire seus dados do Excel, Word e PDF e leve para o sistema certo.',
    body: 'Se a informação da sua empresa ainda vive em planilhas, documentos Word, PDFs ou arquivos espalhados, nós organizamos esse conteúdo e migramos para o banco de dados ou sistema que você já usa.',
  },
  {
    id: 'web-data',
    number: '05',
    title: 'Coleta Automática de Dados da Web',
    lead: 'Extraímos informações de páginas, portais e documentos grandes.',
    body: 'Montamos rotinas que percorrem sites, portais, listagens e páginas densas, coletam textos, tabelas, anexos e documentos extensos, organizam tudo e entregam no seu Excel, banco ou sistema interno.',
  },
]

export default function Pillars() {
  return (
    <section id="solucoes" className="bg-foam tide-wave py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Pilares de solução"
          title="O que resolvemos na prática"
          description="Automação no WhatsApp, integração entre sistemas, leitura de documentos, migração de Excel, Word e PDF, e coleta de dados em páginas e portais."
        />

        <RevealStagger
          className="mt-16 grid gap-0 border-t border-line md:grid-cols-2"
          stagger={0.1}
          delay={0.05}
        >
          {pillars.map((pillar) => (
            <RevealItem
              key={pillar.id}
              className="border-b border-line px-0 py-11 md:border-r md:px-8 md:py-12 md:odd:pl-0 md:even:border-r-0 md:even:pr-0"
            >
              <span className="font-display text-sm font-bold tracking-[0.18em] text-tide">
                {pillar.number}
              </span>
              <h3 className="type-display mt-4 text-xl font-bold text-ink sm:text-[1.35rem]">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-depth">
                {pillar.lead}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate">{pillar.body}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  )
}
