import { Link } from 'react-router'

import { Icon } from '@/components'

import styles from './LinkCard.module.css'

export const LinkCard = ({ title, subtitle, icon, to }) => {
  return (
    <Link key={title} to={to} className={styles.container}>
      <li className={styles.title}>
        <span>{title}</span>
        <Icon name={icon} size={20} />
      </li>
      <p className={styles.subtitle}>{subtitle}</p>
    </Link>
  )
}
