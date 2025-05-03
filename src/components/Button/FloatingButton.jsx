import { Icon } from '../Icon/Icon'
import styles from './FloatingButton.module.css'

export const FloatingButton = ({ ...props }) => {
  return (
    <button className={styles.button}>
      <Icon name={'review-pencil'} size={24} {...props} />
    </button>
  )
}
