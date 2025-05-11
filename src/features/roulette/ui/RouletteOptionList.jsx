import { ROULETTE_OPTIONS } from '../domain/constants/rouletteOptions'
import { RouletteOptionCard } from './RouletteOptionCard'
import styles from './RouletteOptionList.module.css'

/**
 * 여러 개의 룰렛 옵션 카드 목록을 보여주는 컴포넌트
 */

export const RouletteOptionList = () => {
  return (
    <div className={styles.container}>
      {ROULETTE_OPTIONS.map((option) => (
        <RouletteOptionCard key={option.to} {...option} />
      ))}
    </div>
  )
}
