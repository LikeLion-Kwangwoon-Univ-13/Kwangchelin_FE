import { Link } from 'react-router'

import { Icon } from '@/components/Icon/Icon'
import { LINK_CARD_LIST } from '@/features/main/domain/constants'
import { LinkCard } from '@/features/main/ui'

import styles from './LinkCardNavigation.module.css'

export const LinkCardNavigation = () => {
  return (
    <nav className={styles.container}>
      <Link to={'/restaurant'} className={styles.map}>
        <span>맛집 지도</span>
        <Icon className={styles.ping} name={'map-location'} size={20} fill='#ffffff' />
        <Icon name={'shape-arrow-right'} size={20} fill={'#fff'} />
      </Link>

      <ul className={styles.cards}>
        {LINK_CARD_LIST.map(({ title, subtitle, icon, to }) => (
          <LinkCard key={title} title={title} subtitle={subtitle} icon={icon} to={to} />
        ))}
      </ul>
    </nav>
  )
}
