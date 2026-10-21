const variants = {
  primary:
    'bg-tide text-white hover:bg-tide-soft focus-visible:outline-tide',
  secondary:
    'bg-transparent text-ink border border-ink/20 hover:border-tide hover:text-tide focus-visible:outline-tide',
  ghost:
    'bg-white/70 text-ink border border-line backdrop-blur-sm hover:border-tide hover:text-tide focus-visible:outline-tide',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  type = 'button',
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium tracking-tight transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
