import { createContext, useContext, useState } from 'react'

const MAX_PEOPLE_COUNT = 12

const CardFlipSettingContext = createContext()

export const CardFlipSettingProvider = ({ children }) => {
  const [peopleCount, setPeopleCount] = useState(2)
  const [loserCount, setLoserCount] = useState(1)

  const maxLoserCount = Math.floor(peopleCount / 2)

  const handleChangePeopleCount = (count) => {
    setPeopleCount(count)

    const maxLoser = Math.floor(count / 2)
    if (loserCount > maxLoser) {
      setLoserCount(maxLoser)
    }
  }

  const handleChangeLoserCount = (count) => {
    setLoserCount(count)
  }

  return (
    <CardFlipSettingContext.Provider
      value={{
        peopleCount,
        loserCount,
        maxPeopleCount: MAX_PEOPLE_COUNT,
        maxLoserCount,
        handleChangePeopleCount,
        handleChangeLoserCount,
      }}
    >
      {children}
    </CardFlipSettingContext.Provider>
  )
}

export const useCardFlipSetting = () => {
  const context = useContext(CardFlipSettingContext)

  if (!context) {
    throw new Error('useCardFlipSetting은 CardFlipSettingProvider 안에서 사용해야 합니다.')
  }

  return context
}
