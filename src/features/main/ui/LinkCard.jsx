import { Link } from 'react-router'

import { Icon } from '@/components'

import styles from './LinkCard.module.css'

/**
 * 기능 이동용 카드 UI 컴포넌트
 *
 * @param {Object} props
 * @param {string} props.title - 제목 텍스트
 * @param {string} props.subtitle - 부제목 텍스트
 * @param {string} props.icon - 아이콘 이름
 * @param {string} props.to - 이동할 경로
 */

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
