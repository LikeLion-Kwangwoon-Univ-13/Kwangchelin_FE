import { cn } from '@/libs/cn'

import styles from './Button.module.css'

/**
 * @param variant primary: 메인컬러, secondary: 상단바
 * @param size md, lg
 */

export const Button = ({
  variant = 'primary',
  size,
  className = '',
  loading = false,
  disabled,
  children,
  ...props
}) => {
  const buttonClass = cn(
    styles.button,
    styles[`button-${variant}`],
    styles[`button-${size}`],
    className,
  )

  return (
    <button className={buttonClass} disabled={disabled || loading} {...props}>
      {children}
    </button>
  )
}
