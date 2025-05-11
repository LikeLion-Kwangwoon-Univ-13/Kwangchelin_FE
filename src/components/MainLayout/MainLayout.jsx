import { useNavigate } from 'react-router'

import { Icon, SearchInput } from '@/components'

import styles from './MainLayout.module.css'

export const MainLayout = ({ title, searchBaseURL, hasSearch, children }) => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <button className={styles.buttonArrow} onClick={handleBack}>
            <Icon name={'shape-back'} size={24} />
          </button>
          <h1 className={styles.title}>{title}</h1>
        </header>

        {hasSearch && (
          <div className={styles.inputContainer}>
            <SearchInput baseURL={searchBaseURL} />
          </div>
        )}
      </div>

      <main className={styles.content}>{children}</main>
    </div>
  )
}
