import { Link } from 'react-router'

import { Icon } from '@/components'

import styles from './RouletteOptionCard.module.css'

/**
 * 하나의 룰렛 옵션(카드)을 나타내는 컴포넌트
 *
 * @param {Object} props
 * @param {string} props.title - 옵션 제목
 * @param {string} props.description - 옵션 설명
 * @param {string} props.iconName - 아이콘 이름
 * @param {string} props.to - 이동할 경로
 */

export const RouletteOptionCard = ({ title, description, iconName, to }) => {
  return (
    <Link to={to} className={styles.container}>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <Icon name={iconName} size={70} />
    </Link>
  )
}
