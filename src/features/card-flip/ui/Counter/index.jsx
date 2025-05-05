import { useState } from 'react'

import { CounterControl } from '../CounterControl'
import styles from './Counter.module.css'

const MAX_PEOPLE_COUNT = 12

export const Counter = () => {
  const [peopleCount, setPeopleCount] = useState(2)
  const [loserCount, setLoserCount] = useState(1)

  const handlePeopleChange = (count) => {
    setPeopleCount(count)

    // 인원수 줄었을 때 꽝 개수 자동 조정
    const maxLoser = Math.floor(count / 2)
    if (loserCount > maxLoser) {
      setLoserCount(maxLoser)
    }
  }

  const handleLoserChange = (count) => {
    setLoserCount(count)
  }

  const maxLoserCount = Math.floor(peopleCount / 2)

  return (
    <div className={styles.container}>
      <CounterControl
        label='인원 수'
        count={peopleCount}
        min={2}
        max={MAX_PEOPLE_COUNT}
        onChange={handlePeopleChange}
      />
      <CounterControl
        label='꽝 개수'
        count={loserCount}
        min={1}
        max={maxLoserCount}
        onChange={handleLoserChange}
      />
    </div>
  )
}
