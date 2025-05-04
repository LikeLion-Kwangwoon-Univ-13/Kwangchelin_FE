import { FloatingButton } from '@/components/Button/FloatingButton'
import { MainLayout } from '@/components/MainLayout/MainLayout'
import { ReviewListSection, SchoolFoodHomeLink } from '@/features/school-food/ui'

import styles from './SchoolFoodPage.module.css'

export const SchoolFoodPage = () => {
  return (
    <MainLayout title='학식 정보' hasBackgroundColor>
      <div className={styles.container}>
        <SchoolFoodHomeLink />
        <p className={styles.label}>학식 리뷰 확인해 보세요!</p>

        <ReviewListSection />
      </div>
      <FloatingButton to={'/school-food/review'} />
    </MainLayout>
  )
}
