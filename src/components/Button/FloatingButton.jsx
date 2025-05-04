import { Link } from 'react-router'

import { Icon } from '../Icon/Icon'
import styles from './FloatingButton.module.css'

export const FloatingButton = ({ to, ...props }) => {
  return (
    <Link to={to} className={styles.link}>
      <Icon name={'review-pencil'} size={24} {...props} />
    </Link>
  )
}
