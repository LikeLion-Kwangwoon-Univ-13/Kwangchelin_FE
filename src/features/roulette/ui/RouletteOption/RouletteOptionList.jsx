import { ROULETTE_OPTIONS } from '../../domain/constants'
import { RouletteOptionCard } from './RouletteOptionCard'
import styles from './RouletteOptionList.module.css'

export const RouletteOptionList = () => {
  return (
    <div className={styles.container}>
      {ROULETTE_OPTIONS.map((option) => (
        <RouletteOptionCard key={option.to} {...option} />
      ))}
    </div>
  )
}
