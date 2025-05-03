import { Link } from 'react-router'

import { Icon } from '@/components/Icon/Icon'

import styles from './SchoolFoodHomeLink.module.css'

export const SchoolFoodHomeLink = () => {
  return (
    <Link
      to={'https://www.kw.ac.kr/ko/life/facility11.jsp'}
      target='_blank'
      className={styles.container}
    >
      <div className={styles.textContent}>
        <p className={styles.title}>오늘의 학식</p>
        <p className={styles.subTitle}>클릭 시 학교 홈페이지로 이동합니다.</p>
      </div>
      <Icon name={'point-school-food'} size={22} />
    </Link>
  )
}
