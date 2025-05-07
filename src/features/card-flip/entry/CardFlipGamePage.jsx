import { useLocation, useNavigate } from 'react-router'

import { CardFlipGameProvider } from '@/features/card-flip/domain/context/CardFlipGameContext'
import { BombModal, CardFlipGameContent, FinishModal } from '@/features/card-flip/ui'

export const CardFlipGamePage = () => {
  const { state } = useLocation()
  const navigate = useNavigate()

  const peopleCount = state?.peopleCount
  const loserCount = state?.loserCount

  if (!peopleCount || !loserCount) {
    navigate('/card-flip', { replace: true })
    return null
  }

  return (
    <CardFlipGameProvider peopleCount={peopleCount} loserCount={loserCount}>
      <CardFlipGameContent />

      <BombModal />
      <FinishModal />
    </CardFlipGameProvider>
  )
}
