import clsx from 'clsx'

import styles from './CategoryTag.module.css'

const VARIANT_STYLE = {
  roulette: styles.roulette,
  filter: styles.filter,
}

const SELECTED_STYLE = {
  roulette: styles.rouletteSelected,
  filter: styles.filterSelected,
}

/**
 * 카테고리 선택용 태그형 버튼 컴포넌트
 *
 * @param {Object} props - 컴포넌트 props
 * @param {'filter' | 'roulette'} [props.variant='filter'] - 태그의 스타일 종류
 * @param {string} props.label - 태그에 표시될 텍스트
 * @param {boolean} [props.selected=false] - 태그가 선택된 상태인지 여부
 * @param {() => void} [props.onClick] - 클릭 시 실행할 핸들러 함수
 * @param {boolean} [props.disabled=false] - 비활성화 여부
 * @param {boolean} [props.loading=false] - 로딩 중 여부 (true일 경우 버튼 비활성화)
 * @returns {JSX.Element}
 */

export const CategoryTag = ({
  variant = 'filter',
  label,
  selected = false,
  onClick,
  disabled = false,
  loading = false,
}) => {
  const classNames = clsx([VARIANT_STYLE[variant]], selected && SELECTED_STYLE[variant])

  return (
    <button className={classNames} onClick={onClick} disabled={disabled || loading}>
      <span>{label}</span>
    </button>
  )
}
