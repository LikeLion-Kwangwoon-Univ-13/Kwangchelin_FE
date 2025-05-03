import { PageHeader } from '../Header/PageHeader'
import styles from './MainLayout.module.css'

export const MainLayout = ({ title, hasBackgroundColor, children }) => {
  return (
    <div className={styles.container}>
      <PageHeader title={title} hasBackgroundColor={hasBackgroundColor} />
      <main className={styles.content}>{children}</main>
    </div>
  )
}
