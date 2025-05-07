import { useCardFlipSetting } from '@/features/card-flip/domain/context'
import { CounterControl } from '@/features/card-flip/ui'

import styles from './CardFlipSetting.module.css'

export const CardFlipSetting = () => {
  const {
    peopleCount,
    loserCount,
    handleChangePeopleCount,
    handleChangeLoserCount,
    maxPeopleCount,
    maxLoserCount,
  } = useCardFlipSetting()

  return (
    <div className={styles.container}>
      <CounterControl
        label='인원 수'
        count={peopleCount}
        min={2}
        max={maxPeopleCount}
        onChange={handleChangePeopleCount}
      />
      <CounterControl
        label='꽝 개수'
        count={loserCount}
        min={1}
        max={maxLoserCount}
        onChange={handleChangeLoserCount}
      />
    </div>
  )
}
