import { Icon } from '@/components'

import styles from './ReviewItem.module.css'

/**
 * 하나의 리뷰 정보를 보여주는 컴포넌트
 *
 * @param {Object} props
 * @param {string} props.date - 작성일s (예: '23.10.09. 12:00')
 * @param {string} props.content - 리뷰 본문
 * @param {number} props.rating - 리뷰 평점 (1~5 사이의 정수)
 * @returns {JSX.Element}
 */

export const ReviewItem = ({ date, content, rating }) => {
  return (
    <div className={styles.container}>
      {
        /* 
        TODO: 닉네임과 작성일을 보여주는 상단 영역을 만들어 보세요.
        - 닉네임과 날짜를 나란히 배치하고,
        - 스타일링을 위해 별도 wrapper div에 감싸는 것이 좋습니다.
      */
        <div className={styles.header}>
          <p className={styles.nickname}>멋쟁이사자처럼123</p>
          <span className={styles.date}>{date}</span>
        </div>
      }

      <div className={styles.rating}>
        {[...Array(rating)].map((_, index) => (
          <Icon key={index} name={'review-fill'} size={20} />
        ))}
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  )
}
