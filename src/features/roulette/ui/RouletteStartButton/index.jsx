import styles from './RouletteStartButton.module.css'

export const RouletteStartButton = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.button}>
      {disabled ? '' : 'START'}
    </button>
  )
}
