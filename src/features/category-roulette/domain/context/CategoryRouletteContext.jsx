import { createContext, useContext, useState } from 'react'

const CategoryRouletteContext = createContext()

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

export const useCategoryRoulette = () => {
  const context = useContext(CategoryRouletteContext)

  if (!context) {
    throw new Error('useCategoryRoulette은 CategoryRouletteProvider 내부에서 사용해야 합니다.')
  }

  return context
}
