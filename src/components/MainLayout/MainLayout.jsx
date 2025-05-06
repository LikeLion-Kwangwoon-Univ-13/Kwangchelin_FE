import { PageHeader } from '../Header/PageHeader'
import styles from './MainLayout.module.css'

export const MainLayout = ({ title, hasBackgroundColor, hasSearch, onSearch, children }) => {
  return (
    <div className={styles.container}>
      <PageHeader title={title} hasBackgroundColor={hasBackgroundColor} />
      {hasSearch && (
        <button
          onClick={onSearch}
          style={{ height: '35px', boxShadow: 'inset 0 0 20px blue', flexShrink: 0 }}
        ></button>
      )}
      <main className={styles.content}>{children}</main>
    </div>
  )
}
