import { useState } from 'react'
import { useNavigate } from 'react-router'

import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { MainLayout } from '@/components/MainLayout/MainLayout'
import { Counter } from '@/features/card-flip/ui'

import styles from './CardFlipPage.module.css'

export const CardFlipPage = () => {
  const navigate = useNavigate()

  const [peopleCount, setPeopleCount] = useState(2)
  const [loserCount, setLoserCount] = useState(1)

  const handlePeopleChange = (count) => {
    setPeopleCount(count)

    const maxLoser = Math.floor(count / 2)
    if (loserCount > maxLoser) {
      setLoserCount(maxLoser)
    }
  }

  const handleLoserChange = (count) => {
    setLoserCount(count)
  }

  const handleGoGame = () => {
    navigate('/card-flip/game', { state: { peopleCount, loserCount } })
  }

  return (
    <MainLayout title={'카드 뒤집기'}>
      <div className={styles.container}>
        <h3 className={styles.title}>오늘의 벌칙자, 카드로 정해보세요!</h3>
        <p className={styles.description}>카드를 뒤집으면 꽝 여부가 공개됩니다.</p>

        <div className={styles.main}>
          <Counter
            peopleCount={peopleCount}
            loserCount={loserCount}
            onPeopleChange={handlePeopleChange}
            onLoserChange={handleLoserChange}
          />

          <div className={styles.notice}>
            <Icon name={'error-warning'} size={16} />
            <div className={styles.noticeText}>
              <p>꽝 개수는 인원 수의 절반 이하로만 설정할 수 있어요!</p>
              <p>예: 7명 → 최대 3개, 10명 → 최대 5개</p>
            </div>
          </div>
        </div>

        <Button variant='secondary' size={'lg'} className={styles.button} onClick={handleGoGame}>
          시작하기
        </Button>
      </div>
    </MainLayout>
  )
}
