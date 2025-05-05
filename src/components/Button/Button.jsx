import { cn } from '@/libs/cn'

import styles from './Button.module.css'

const VARIANT_CLASS_MAP = {
  primary: styles.buttonPrimary,
  secondary: styles.buttonSecondary,
}

const SIZE_CLASS_MAP = {
  md: styles.buttonMd,
  lg: styles.buttonLg,
}

/**
 * @param variant primary: 메인컬러, secondary: 상단바
 * @param size md, lg
 */

export const Button = ({
  variant = 'primary',
  type = 'button',
  size,
  className = '',
  loading = false,
  disabled,
  children,
  ...props
}) => {
  const buttonClass = cn(styles.button, VARIANT_CLASS_MAP[variant], SIZE_CLASS_MAP[size], className)

  return (
    <button type={type} className={buttonClass} disabled={disabled || loading} {...props}>
      {children}
    </button>
  )
}
