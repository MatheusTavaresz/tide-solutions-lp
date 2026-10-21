import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 48,
  x = 0,
  once = true,
  amount = 0.25,
  as = 'div',
}) {
  const reduce = useReducedMotion()
  const Component = motion[as] ?? motion.div

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y, x, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }}
      viewport={{ once, amount, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.85, delay, ease }}
    >
      {children}
    </Component>
  )
}

export function RevealStagger({ children, className = '', stagger = 0.1, delay = 0 }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -8% 0px' }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className = '', y = 36 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y, filter: 'blur(6px)' },
        show: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.75, ease },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
