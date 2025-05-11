import { createContext, useContext, useState } from 'react'

const CategoryRouletteContext = createContext()

/**
 * 카테고리 룰렛 상태 관리 Provider
 *
 * - 선택된 카테고리 목록 및 제어 함수 제공
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */

export const CategoryRouletteProvider = ({ children }) => {
  const [selectedCategoryList, setSelectedCategoryList] = useState([])

  const toggleCategory = (category) => {
    setSelectedCategoryList((prev) =>
      prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category],
    )
  }

  const clearCategory = () => {
    setSelectedCategoryList([])
  }

  return (
    <CategoryRouletteContext.Provider
      value={{
        selectedCategoryList,
        toggleCategory,
        clearCategory,
      }}
    >
      {children}
    </CategoryRouletteContext.Provider>
  )
}

/**
 * 카테고리 룰렛 상태 접근용 커스텀 훅
 *
 * - Provider 외부에서 사용 시 에러 throw
 * @returns {{ selectedCategoryList: string[], toggleCategory: Function, clearCategory: Function }}
 */

export const useCategoryRoulette = () => {
  const context = useContext(CategoryRouletteContext)

  if (!context) {
    throw new Error('useCategoryRoulette은 CategoryRouletteProvider 내부에서 사용해야 합니다.')
  }

  return context
}
