import { useNavigate } from 'react-router'

import { Icon } from '../Icon/Icon'
import styles from './PageHeader.module.css'

export const PageHeader = ({ title, onBack }) => {
  const navigate = useNavigate()

  const handleBack = () => {
    if (onBack) {
      onBack()
    } else {
      navigate(-1)
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.buttonArrow} onClick={handleBack}>
          <Icon name={'shape-back'} size={24} />
        </button>
        <h1 className={styles.title}>{title}</h1>
      </header>
    </div>
  )
}
