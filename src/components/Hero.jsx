import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Container from './ui/Container'
import Button from './ui/Button'
import Reveal from './ui/Reveal'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 72])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.35])

  return (
    <section
      id="topo"
      ref={ref}
      className="tide-mesh relative overflow-hidden pt-28 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 tide-wave opacity-40" />
      <motion.div style={{ y: contentY, opacity: contentOpacity }}>
        <Container className="relative pb-16 sm:pb-20">
          <Reveal delay={0.05} y={36}>
            <h1 className="type-display max-w-4xl text-4xl font-extrabold text-ink sm:text-5xl lg:text-[3.5rem]">
              <span className="block text-tide">Tide Solutions</span>
              <span className="mt-4 block text-[0.9em] font-bold text-ink">
                Conecte seu WhatsApp, sistemas internos e processos manuais em um
                único ecossistema automatizado.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.15} y={28}>
            <p className="type-lead mt-7 max-w-2xl text-base text-slate sm:text-lg">
              Engenharia sob medida para conectar seu WhatsApp, integrar APIs, migrar
              dados legados (Excel, Word e PDF) e automatizar a coleta em portais e
              documentos sem intervenção manual.
            </p>
          </Reveal>

          <Reveal delay={0.25} y={24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#contato">Mapear Automação da Minha Empresa</Button>
              <Button href="#solucoes" variant="secondary">
                Ver Soluções
              </Button>
            </div>
          </Reveal>
        </Container>
      </motion.div>
    </section>
  )
}
