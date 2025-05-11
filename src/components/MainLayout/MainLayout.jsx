import { useNavigate } from 'react-router'

import { Icon, SearchInput } from '@/components'

import styles from './MainLayout.module.css'

/**
 * 공통 헤더와 검색 입력창을 포함한 메인 레이아웃 컴포넌트
 *
 * @param {Object} props
 * @param {string} props.title - 페이지 상단 타이틀
 * @param {string} [props.searchBaseURL] - 검색시 이동할 base 경로
 * @param {boolean} [props.hasSearch=false] - 검색창 렌더링 여부
 * @param {React.ReactNode} props.children - 페이지 본문 콘텐츠
 * @returns {JSX.Element}
 */

export const MainLayout = ({ title, searchBaseURL, hasSearch, children }) => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <button className={styles.buttonArrow} onClick={handleBack}>
            <Icon name={'shape-back'} size={24} />
          </button>
          <h1 className={styles.title}>{title}</h1>
        </header>

        {hasSearch && (
          <div className={styles.inputContainer}>
            <SearchInput baseURL={searchBaseURL} />
          </div>
        )}
      </div>

      <main className={styles.content}>{children}</main>
    </div>
  )
}
