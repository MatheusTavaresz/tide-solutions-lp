import Container from './ui/Container'
import logo from '../assets/logo-tide.jpg'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-foam">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <a href="#topo" className="inline-flex rounded-2xl bg-white px-5 py-4">
              <img src={logo} alt="Tide Solutions" className="h-16 w-auto sm:h-20" />
            </a>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-mist/80">
              Engenharia de Software, Integrações de APIs & Automações
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <p className="font-display text-xs font-semibold tracking-[0.18em] text-tide-soft uppercase">
              Liderança Técnica & Fundador
            </p>
            <p className="text-base text-white">
              Matheus Patrick Tavares Soares
            </p>
            <p className="text-sm text-mist/80">
              Engenheiro de Software & Fundador
            </p>
            <a
              href="https://linkedin.com/in/matheus-patrickz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-tide-soft underline-offset-4 hover:underline"
            >
              linkedin.com/in/matheus-patrickz
            </a>
            <p className="text-mist/75">Florianópolis - SC | Brasil</p>
            <a
              href="mailto:contato@tidesolutions.com.br"
              className="block text-mist/90 hover:text-white"
            >
              contato@tidesolutions.com.br
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-mist/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Tide Solutions. Todos os direitos reservados.</p>
          <p className="flex flex-wrap gap-x-3 gap-y-1">
            <span>Privacidade</span>
            <span aria-hidden="true">•</span>
            <span>Termos de Serviço</span>
            <span aria-hidden="true">•</span>
            <span>Governança de Integrações</span>
          </p>
        </div>
      </Container>
    </footer>
  )
}
