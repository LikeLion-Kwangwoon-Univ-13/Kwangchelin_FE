import { Icon } from '@/components/Icon/Icon'

import styles from './CounterControl.module.css'

export const CounterControl = ({ label, count, min, max, onChange }) => {
  const handleDecrease = () => {
    if (count > min) {
      onChange(count - 1)
    }
  }
  console.log(count)

  const handleIncrease = () => {
    if (max !== undefined && count >= max) return
    onChange(count + 1)
  }

  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>

      <div className={styles.counter}>
        <button type='button' onClick={handleDecrease}>
          <Icon name={'card-flip-minus'} />
        </button>

        <p className={styles.count}>{count}</p>

        <button type='button' onClick={handleIncrease}>
          <Icon name={'card-flip-plus'} />
        </button>
      </div>
    </div>
  )
}
