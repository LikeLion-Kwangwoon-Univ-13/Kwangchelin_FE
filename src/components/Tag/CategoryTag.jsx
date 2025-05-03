import { cn } from '@/libs/cn'

import styles from './CategoryTag.module.css'

const VARIANT_STYLE = {
  roulette: styles.roulette,
  filter: styles.filter,
}

const SELECTED_STYLE = {
  roulette: styles.rouletteSelected,
  filter: styles.filterSelected,
}

export const CategoryTag = ({
  variant = 'filter',
  label,
  selected = false,
  onClick,
  disabled = false,
  loading = false,
}) => {
  const classNames = cn([VARIANT_STYLE[variant]], selected && SELECTED_STYLE[variant])

  return (
    <button className={classNames} onClick={onClick} disabled={disabled || loading}>
      <span>{label}</span>
    </button>
  )
}
