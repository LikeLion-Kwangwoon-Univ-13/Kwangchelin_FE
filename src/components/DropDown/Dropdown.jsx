import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

import { Icon } from '@/components'

import styles from './Dropdown.module.css'

/**
 * 클릭으로 토글 가능한 단일 선택형 드롭다운 컴포넌트
 *
 * @param {Object} props
 * @param {string[]} props.options - 선택 가능한 옵션 리스트
 * @param {string} props.selected - 현재 선택된 옵션
 * @param {(option: string) => void} props.onSelect - 옵션 선택 시 호출되는 콜백
 * @param {string} [props.className] - 외부에서 전달받은 클래스 이름
 * @returns {JSX.Element}
 */

export const Dropdown = ({ options = [], selected, onSelect, className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev)
  }

  const handleOptionClick = (option) => {
    onSelect(option)
    setIsOpen(false)
  }

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const filteredOptions = options.filter((option) => option !== selected)

  const classNames = clsx(styles.container, isOpen && styles.active, className)

  return (
    <div className={classNames} ref={dropdownRef}>
      <button onClick={toggleDropdown} className={styles.trigger}>
        <span>{selected}</span>
        <Icon name={'shape-sorting'} size={20} className={clsx(isOpen && styles.arrowUp)} />
      </button>

      {isOpen && filteredOptions.length > 0 && (
        <ul className={styles.menu}>
          {filteredOptions.map((option) => (
            <li key={option}>
              <button
                type='button'
                onClick={() => handleOptionClick(option)}
                className={styles.item}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
