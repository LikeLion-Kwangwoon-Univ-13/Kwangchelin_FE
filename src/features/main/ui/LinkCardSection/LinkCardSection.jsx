import { Link } from 'react-router'

import { Icon } from '@/components/Icon/Icon'

import { LINK_CARD_LIST } from '../../constants/linkCardList'
import styles from './LinkCardSection.module.css'

export const LinkCardSection = () => {
  return (
    <nav className={styles.container}>
      <Link to={'/restaurant'} className={styles.bannerMap}>
        <span>맛집 지도</span>
        <Icon className={styles.pingIcon} name={'map-location'} size={20} fill='#ffffff' />
        <Icon name={'shape-arrow-right'} size={20} fill={'#fff'} />
      </Link>

      <ul className={styles.bannerContainer}>
        {LINK_CARD_LIST.map(({ label, description, icon, to }) => (
          <Link key={label} to={to} className={styles.banner}>
            <li className={styles.header}>
              <span>{label}</span>
              <Icon name={icon} size={20} />
            </li>
            <p className={styles.description}>{description}</p>
          </Link>
        ))}
      </ul>
    </nav>
  )
}
