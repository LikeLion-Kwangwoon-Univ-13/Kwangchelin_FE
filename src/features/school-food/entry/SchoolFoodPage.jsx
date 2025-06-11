import { FloatingButton, MainLayout } from '@/components'

import { SchoolFoodOfficialLink } from '../ui/SchoolFoodOfficialLink'
import { SchoolFoodReviewList } from '../ui/SchoolFoodReviewList'
import styles from './SchoolFoodPage.module.css'

export const SchoolFoodPage = () => {
  return (
    <MainLayout title='학식 정보'>
      <div className={styles.container}>
        <SchoolFoodOfficialLink />

        <p className={styles.label}>학식 리뷰 확인해 보세요!</p>
        <SchoolFoodReviewList />
      </div>
      <FloatingButton to={'/school-food/review'} />
    </MainLayout>
  )
}
