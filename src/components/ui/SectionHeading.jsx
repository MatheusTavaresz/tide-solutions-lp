import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <Reveal className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-4 font-display text-[0.72rem] font-semibold tracking-[0.22em] text-tide uppercase">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 className="type-display text-3xl font-bold text-ink sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className={`type-lead text-base text-slate sm:text-lg ${title ? 'mt-5' : ''}`}>
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
