import { useEffect } from 'react'
import { useLocation } from 'react-router'

import styles from './App.module.css'
import { AppRouter } from './components/AppRouter'

export const RouteTracker = () => {
  const location = useLocation()

  useEffect(() => {
    console.log('📍 페이지 이동:', location.pathname)
    // 여기에 히스토리 배열로 저장하거나 서버 전송 가능
  }, [location])

  return null
}

function App() {
  return (
    <div className={styles.app}>
      <RouteTracker />
      <div className={styles.container}>
        <AppRouter />
      </div>
    </div>
  )
}

export default App
