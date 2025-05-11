import { Link } from 'react-router'

import { Icon } from '@/components'

import styles from './SchoolFoodOfficialLink.module.css'

/**
 * 학교 학식 페이지로 이동하는 외부 링크 컴포넌트
 */

export const SchoolFoodOfficialLink = () => {
  return (
    <Link
      to={'https://www.kw.ac.kr/ko/life/facility11.jsp'}
      target='_blank'
      className={styles.container}
    >
      <div className={styles.description}>
        <p className={styles.title}>오늘의 학식</p>
        <p className={styles.subtitle}>클릭 시 학교 홈페이지로 이동합니다.</p>
      </div>
      <Icon name={'point-school-food'} size={22} />
    </Link>
  )
}
