import clsx from 'clsx'
import { useState } from 'react'
import { useNavigate } from 'react-router'

import { Icon } from '@/components'

import styles from './SearchInput.module.css'

/**
 * 검색어를 입력받아 지정된 URL로 이동하는 검색 입력창 컴포넌트
 *
 * @param {Object} props
 * @param {string} props.searchBaseURL - 검색 결과로 이동할 base URL (e.g., '/restaurant')
 * @param {boolean} [props.primary=false] - 스타일
 * @returns {JSX.Element}
 */

export const SearchInput = ({ searchBaseURL, primary = false }) => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')

  const handleSearch = () => {
    navigate({
      pathname: searchBaseURL,
      search: keyword.length ? `?keyword=${keyword}` : '',
    })
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className={clsx(styles.container, primary && styles.containerPrimary)}>
      <button onClick={handleSearch} className={styles.button}>
        <Icon name={'shape-search'} size={21} fill={primary ? '#FDF2F2' : '#A31D20'} />
      </button>

      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='두근두근 맛집탐방~ 팡팡'
        className={clsx(styles.input, primary && styles.inputPrimary)}
      />
    </div>
  )
}
