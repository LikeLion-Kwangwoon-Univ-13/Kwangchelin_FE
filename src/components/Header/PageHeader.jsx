import { useNavigate } from 'react-router'

import { cn } from '@/libs/cn'

import { Icon } from '../Icon/Icon'
import styles from './PageHeader.module.css'

export const PageHeader = ({ title, onBack, hasBackgroundColor }) => {
  const navigate = useNavigate()

  const handleBack = () => {
    if (onBack) {
      onBack()
    } else {
      navigate(-1)
    }
  }

  const classNames = cn(styles.container, hasBackgroundColor && styles.backgroundColor)

  return (
    <div className={classNames}>
      <header className={styles.header}>
        <button className={styles.buttonArrow} onClick={handleBack}>
          <Icon name={'shape-back'} size={24} />
        </button>
        <h1 className={styles.title}>{title}</h1>
      </header>
    </div>
  )
}
