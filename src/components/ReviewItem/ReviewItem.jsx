import { Icon } from '@/components'

import styles from './ReviewItem.module.css'

/**
 * 하나의 리뷰 정보를 보여주는 컴포넌트
 *
 * @param {Object} props
 * @param {string} props.nickname - 리뷰 작성자 닉네임
 * @param {string} props.date - 작성일s (예: '23.10.09. 12:00')
 * @param {string} props.content - 리뷰 본문
 * @param {number} props.rating - 리뷰 평점 (1~5 사이의 정수)
 * @returns {JSX.Element}
 */

export const ReviewItem = ({ nickname, date, content, rating }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.nickname}>{nickname}</p>
        <p className={styles.date}>{date}</p>
      </div>
      <div className={styles.rating}>
        {[...Array(rating)].map((_, index) => (
          <Icon key={index} name={'review-fill'} size={20} />
        ))}
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  )
}
