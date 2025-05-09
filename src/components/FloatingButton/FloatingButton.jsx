import { Link } from 'react-router'

import { Icon } from '../Icon/Icon'
import styles from './FloatingButton.module.css'

/**
 * 우측 하단 고정 위치에 표시되는 리뷰 작성 플로팅 버튼 컴포넌트
 * @param {Object} props - 컴포넌트에 전달되는 추가 props
 * @param {string} props.to - 이동할 링크 경로
 * @returns {JSX.Element}
 */

export const FloatingButton = ({ to, ...props }) => {
  return (
    <Link to={to} className={styles.link}>
      <Icon name={'review-pencil'} size={24} {...props} />
    </Link>
  )
}
