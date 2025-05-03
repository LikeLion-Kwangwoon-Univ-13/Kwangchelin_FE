import { TextRotator } from '../TextRotator/TextRotator'
import styles from './Header.module.css'

/**
 * @todo 검색창 구현 및 적용
 */

export const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.header}>
        <span>광운대</span>
        <p>주변 식당을 찾아보세요!</p>
        <div className={styles.dot}>
          <div />
          <div />
        </div>
      </h1>
      <h2 className={styles.subTitle}>학교 주변 식당 리뷰를 피드에서 모아볼 수 있어요</h2>
      <TextRotator />

      {/* 검색창 */}

      <div style={{ height: '35px' }}>검색창</div>
    </header>
  )
}
