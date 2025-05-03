import { CategorySection } from './components/CategorySection/CategorySection'
import { Header } from './components/Header/Header'
import { LinkCardSection } from './components/LinkCardSection/LinkCardSection'
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
