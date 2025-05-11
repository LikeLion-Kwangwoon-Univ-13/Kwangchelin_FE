import { Wheel } from 'react-custom-roulette'

import styles from './CategoryRouletteBoard.module.css'

/**
 * 카테고리 데이터를 바탕으로 룰렛 애니메이션 출력
 *
 * - react-custom-roulette 라이브러리 사용
 *
 * @param {Object} props
 * @param {string[]} props.categories - 룰렛 항목들
 * @param {number} props.prizeNumber - 당첨 인덱스
 * @param {boolean} props.mustSpin - 회전 트리거
 * @param {() => void} props.onStopSpinning - 회전 종료 시 콜백
 */

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
