import { Link } from 'react-router'

import { Icon } from '@/components/Icon/Icon'

import styles from './RouletteOptionCard.module.css'

export const RouletteOptionCard = ({ title, description, icon, to }) => {
  return (
    <Link to={to} className={styles.container}>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <Icon name={icon} size={70} />
    </Link>
  )
}
