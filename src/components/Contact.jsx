import { useState } from 'react'
import Container from './ui/Container'
import Button from './ui/Button'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const bottlenecks = [
  'Atendimento no WhatsApp',
  'Integração de Sistemas/API',
  'Digitação/Documentos',
  'Migração de Dados (Excel, Word, PDF)',
  'Coleta de Dados (sites, portais, documentos)',
  'Outro',
]

const initialForm = {
  name: '',
  email: '',
  whatsapp: '',
  company: '',
  bottleneck: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  function updateField(field) {
    return (event) => {
      setForm((current) => ({ ...current, [field]: event.target.value }))
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="contato" className="tide-mesh border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Prova de conceito"
          title="Qual é o gargalo que mais consome o tempo da sua equipe hoje?"
          description="Descreva o gargalo. Retornamos com uma proposta objetiva para o seu caso."
        />

        <Reveal className="mt-14" delay={0.08}>
          <form onSubmit={handleSubmit} className="grid max-w-3xl gap-6">
            <Field
              label="Nome Completo"
              id="name"
              value={form.name}
              onChange={updateField('name')}
              required
            />
            <div className="grid gap-6 sm:grid-cols-2">
              <Field
                label="E-mail Corporativo"
                id="email"
                type="email"
                value={form.email}
                onChange={updateField('email')}
                required
              />
              <Field
                label="WhatsApp"
                id="whatsapp"
                value={form.whatsapp}
                onChange={updateField('whatsapp')}
                required
              />
            </div>
            <Field
              label="Empresa / Ramo"
              id="company"
              value={form.company}
              onChange={updateField('company')}
              required
            />

            <fieldset>
              <legend className="mb-3 text-sm font-medium text-ink">
                Onde está o gargalo?
              </legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {bottlenecks.map((option) => {
                  const selected = form.bottleneck === option
                  return (
                    <label
                      key={option}
                      className={`flex cursor-pointer items-center gap-3 border px-4 py-3 text-sm transition-colors ${
                        selected
                          ? 'border-tide bg-white text-ink'
                          : 'border-line bg-white/60 text-slate hover:border-tide/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="bottleneck"
                        value={option}
                        checked={selected}
                        onChange={updateField('bottleneck')}
                        className="accent-tide"
                        required
                      />
                      {option}
                    </label>
                  )
                })}
              </div>
            </fieldset>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit">Solicitar Proposta de Automação</Button>
                {sent ? (
                  <p className="text-sm text-tide" role="status">
                    Recebido. Em breve entraremos em contato.
                  </p>
                ) : null}
              </div>
              <p className="text-sm text-slate">
                🔒 Seus dados e informações operacionais são confidenciais e protegidos
                sob termo de sigilo.
              </p>
            </div>
          </form>
        </Reveal>
      </Container>
    </section>
  )
}

function Field({ label, id, type = 'text', value, onChange, required }) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-sm font-medium text-ink">{label}</span>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-line bg-white/80 px-4 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-slate/60 focus:border-tide"
      />
    </label>
  )
}
