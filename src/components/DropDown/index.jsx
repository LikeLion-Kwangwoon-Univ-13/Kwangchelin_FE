import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

import { Icon } from '../Icon/Icon'
import styles from './DropDown.module.css'

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
