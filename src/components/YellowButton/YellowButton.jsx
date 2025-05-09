import clsx from 'clsx'

import styles from './YellowButton.module.css'

/**
 * 노란색 배경의 버튼 컴포넌트
 *
 * @param {Object} props - 버튼 속성
 * @param {boolean} [props.loading=false] - 로딩 중 여부 (true이면 버튼 비활성화됨)
 * @param {boolean} [props.disabled] - 비활성화 여부
 * @param {string} [props.className] - 추가로 적용할 클래스 이름
 * @param {React.ReactNode} props.children - 버튼 내부에 렌더링될 요소
 * @param {any} [props.props] - button 태그에 전달할 나머지 속성들
 * @returns {JSX.Element}
 */

export const YellowButton = ({ loading = false, disabled, className = '', children, ...props }) => {
  const buttonClass = clsx(styles.button, className)

  return (
    <button className={buttonClass} disabled={disabled || loading} {...props}>
      {children}
    </button>
  )
}
