import clsx from 'clsx'

import styles from './Button.module.css'

const VARIANT_CLASS_MAP = {
  primary: styles.buttonPrimary,
  secondary: styles.buttonSecondary,
}

const SIZE_CLASS_MAP = {
  md: styles.buttonMd,
  lg: styles.buttonLg,
}

/**
 * 다양한 스타일과 크기를 지원하는 공통 버튼 컴포넌트
 *
 * @param {Object} props - 버튼 속성
 * @param {'primary' | 'secondary'} [props.variant='primary'] - primary: 메인 색상 배경, secondary: 상단바 색상 배경
 * @param {'md' | 'lg'} [props.size] - 버튼 크기
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - 버튼 타입
 * @param {string} [props.className] - 추가 클래스 이름
 * @param {boolean} [props.loading=false] - 로딩 상태 여부 (true면 비활성화됨)
 * @param {boolean} [props.disabled] - 버튼 비활성화 여부
 * @param {React.ReactNode} props.children - 버튼 내부 콘텐츠
 * @param {any} [props.props] - 기타 button 속성들
 * @returns {JSX.Element}
 */

export const Button = ({
  variant = 'primary',
  type = 'button',
  size,
  className = '',
  loading = false,
  disabled,
  children,
  ...props
}) => {
  const buttonClass = clsx(
    styles.button,
    VARIANT_CLASS_MAP[variant],
    SIZE_CLASS_MAP[size],
    className,
  )

  return (
    <button type={type} className={buttonClass} disabled={disabled || loading} {...props}>
      {children}
    </button>
  )
}
