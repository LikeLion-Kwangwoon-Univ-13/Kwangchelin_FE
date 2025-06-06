import { Link } from 'react-router'

import { Icon } from '@/components'

import { LINK_CARD_LIST } from '../domain/constants/linkCardList'
import { LinkCard } from './LinkCard'
import styles from './LinkCardNavigation.module.css'

/**
 * 메인 하단의 주요 기능으로 이동할 수 있는 네비게이션 카드 목록
 */

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
