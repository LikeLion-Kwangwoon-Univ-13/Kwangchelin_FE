import { CategorySection, Header, LinkCardSection } from '@/features/main/ui'

import styles from './MainPage.module.css'

export const MainPage = () => {
  return (
    <div className={styles.backgroundGradient}>
      <Header />

      <main className={styles.mainSection}>
        <CategorySection />
        <LinkCardSection />
      </main>
    </div>
  )
}
