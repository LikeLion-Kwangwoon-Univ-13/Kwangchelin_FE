import { useState } from 'react'

/**
 * 모달의 열림/닫힘 상태를 관리하는 커스텀 훅
 * @returns {{
 *   isOpen: boolean,
 *   openModal: () => void,
 *   closeModal: () => void
 * }}
 */

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return {
    isOpen,
    openModal,
    closeModal,
  }
}
