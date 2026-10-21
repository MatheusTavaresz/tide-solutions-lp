import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Container from './ui/Container'
import Button from './ui/Button'

const links = [
  { href: '#solucoes', label: 'Soluções' },
  { href: '#integracoes', label: 'Integrações & WhatsApp' },
  { href: '#seguranca', label: 'Segurança' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-line/70 bg-foam/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <Container className="flex items-center justify-between gap-4 py-4">
        <a href="#topo" className="group min-w-0 shrink">
          <span className="type-display block text-lg font-extrabold text-ink sm:text-xl">
            Tide Solutions
          </span>
          <span className="block truncate text-[0.65rem] tracking-wide text-slate sm:text-xs">
            Automação Corporativa & Engenharia de Integração
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-depth/80 transition-colors hover:text-tide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href="#contato"
            className="hidden px-4 py-2.5 text-xs sm:inline-flex md:text-sm"
          >
            Diagnóstico de Gargalos Gratuito
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className={`h-px w-4 bg-ink transition ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
              <span className={`h-px w-4 bg-ink transition ${open ? 'opacity-0' : ''}`} />
              <span className={`h-px w-4 bg-ink transition ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </Container>

      {open ? (
        <div id="menu-mobile" className="border-t border-line/70 bg-foam lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-3 text-sm text-depth hover:bg-mist/60"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href="#contato" className="mt-2" onClick={() => setOpen(false)}>
              Diagnóstico de Gargalos Gratuito
            </Button>
          </Container>
        </div>
      ) : null}
    </motion.header>
  )
}
