import { FloatingButton, MainLayout } from '@/components'

import { SchoolFoodOfficialLink } from '../ui/SchoolFoodOfficialLink'
import styles from './SchoolFoodPage.module.css'

export const SchoolFoodPage = () => {
  return (
    <MainLayout title='학식 정보'>
      <div className={styles.container}>
        <SchoolFoodOfficialLink />
        <p className={styles.label}>학식 리뷰 확인해 보세요!</p>

        {/*
          TODO: 학식 리뷰 목록을 보여주는 SchoolFoodReviewList 컴포넌트를 이 위치에 추가해 보세요.
          - import는 상단에 작성해야 해요.
        */}
      </div>
      <FloatingButton to={'/school-food/review'} />
    </MainLayout>
  )
}
