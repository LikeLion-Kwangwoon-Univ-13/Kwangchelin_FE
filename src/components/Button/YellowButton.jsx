import { cn } from '@/libs/cn'

import styles from './YellowButton.module.css'

export const YellowButton = ({ loading = false, disabled, className = '', children, ...props }) => {
  const buttonClass = cn(styles.button, className)

  return (
    <button className={buttonClass} disabled={disabled || loading} {...props}>
      {children}
    </button>
  )
}
