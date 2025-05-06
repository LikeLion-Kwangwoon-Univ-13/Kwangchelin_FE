import { CounterControl } from '../CounterControl'
import styles from './Counter.module.css'

const MAX_PEOPLE_COUNT = 12

export const Counter = ({ peopleCount, loserCount, onPeopleChange, onLoserChange }) => {
  const maxLoserCount = Math.floor(peopleCount / 2)

  return (
    <div className={styles.container}>
      <CounterControl
        label='인원 수'
        count={peopleCount}
        min={2}
        max={MAX_PEOPLE_COUNT}
        onChange={onPeopleChange}
      />
      <CounterControl
        label='꽝 개수'
        count={loserCount}
        min={1}
        max={maxLoserCount}
        onChange={onLoserChange}
      />
    </div>
  )
}
