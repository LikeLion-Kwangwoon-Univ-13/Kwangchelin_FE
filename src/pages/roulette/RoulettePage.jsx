import { MainLayout } from '@/components/MainLayout/MainLayout'
import { RouletteOptionCard } from '@/features/roulette/ui'

import styles from './RoulettePage.module.css'

export const RoulettePage = () => {
  return (
    <MainLayout title={'랜덤 룰렛'} hasBackgroundColor>
      <div className={styles.container}>
        <p className={styles.label}>돌려봐요! 오늘의 맛집은?</p>

        <div className={styles.content}>
          <RouletteOptionCard
            to={'/roulette/restaurant/category'}
            title={'무슨 메뉴를 먹을까?'}
            description={'종류부터 정하기 어렵다면, 여기서부터!'}
            icon={'roulette-menu'}
          />
          <RouletteOptionCard
            to={'/roulette/card-flip/category'}
            title={'어떤 식당을 갈까?'}
            description={'지도는 잊으세요. 오늘의 길잡이는 룰렛!'}
            icon={'roulette-restaurant'}
          />
        </div>
      </div>
    </MainLayout>
  )
}
