import clsx from 'clsx'
import { useState } from 'react'
import { useNavigate } from 'react-router'

import { Icon } from '../Icon/Icon'
import styles from './SearchInput.module.css'

export const SearchInput = ({ searchBaseURL, primary = false }) => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')

  console.log(keyword)

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
