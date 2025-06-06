import { MainLayout } from '@/components'

import { RouletteOptionList } from '../ui/RouletteOptionList'
import styles from './RoulettePage.module.css'

export const RoulettePage = () => {
  return (
    <MainLayout title={'랜덤 룰렛'}>
      <div className={styles.container}>
        <p className={styles.label}>돌려봐요! 오늘의 맛집은?</p>
        <RouletteOptionList />
      </div>
    </MainLayout>
  )
}
