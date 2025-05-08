import styles from './CategoryRouletteStartButton.module.css'

export const CategoryRouletteStartButton = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.button}>
      {disabled ? '' : 'START'}
    </button>
  )
}
