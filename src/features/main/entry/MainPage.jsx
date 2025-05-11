import { SearchInput } from '@/components'
import { BannerRotator, CategorySection, LinkCardNavigation } from '@/features/main/ui'

import styles from './MainPage.module.css'

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <span>광운대</span>
          <p>주변 식당을 찾아보세요!</p>
          <div className={styles.dot}>
            <div />
            <div />
          </div>
        </h1>
        <h2 className={styles.subTitle}>학교 주변 식당 리뷰를 피드에서 모아볼 수 있어요</h2>
        <BannerRotator />
        <SearchInput primary searchBaseURL={'/restaurant'} />
      </header>

      <main className={styles.main}>
        <CategorySection />
        <LinkCardNavigation />
      </main>
    </div>
  )
}
