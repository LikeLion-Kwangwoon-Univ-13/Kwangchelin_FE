import { Wheel } from 'react-custom-roulette'

import styles from './CategoryRouletteBoard.module.css'

export const CategoryRouletteBoard = ({ categories, prizeNumber, mustSpin, onStopSpinning }) => {
  const rouletteData = categories.map((category) => ({ option: category }))

  return (
    <div className={styles.container}>
      <Wheel
        mustStartSpinning={mustSpin}
        data={rouletteData}
        prizeNumber={prizeNumber}
        outerBorderColor={'#80110F'}
        outerBorderWidth={1}
        innerBorderWidth={1}
        innerBorderColor={'#80110F'}
        radiusLineWidth={1}
        innerRadius={10}
        onStopSpinning={onStopSpinning}
        spinDuration={0.5}
        backgroundColors={['#FFF9EF']}
        textColors={['#80110F']}
        fontSize={18}
        fontFamily={'paperlogy'}
        textDistance={70}
        pointerProps={{ style: { display: 'none' } }}
      />
    </div>
  )
}
