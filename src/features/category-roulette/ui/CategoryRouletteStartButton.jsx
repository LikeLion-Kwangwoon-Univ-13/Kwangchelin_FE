import styles from './CategoryRouletteStartButton.module.css'

/**
 * 룰렛 시작 버튼 UI 컴포넌트
 *
 * @param {Object} props
 * @param {() => void} props.onClick - 클릭 핸들러
 * @param {boolean} props.disabled - 비활성화 여부
 */

export const CategoryRouletteStartButton = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.button}>
      {disabled ? '' : 'START'}
    </button>
  )
}
