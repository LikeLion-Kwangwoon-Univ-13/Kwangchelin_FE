// eslint-disable-next-line simple-import-sort/imports
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import './styles/global.css'
import App from './App.jsx'
import { RestaurantRouletteProvider } from './features/restaurant-roulette/domain/context'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RestaurantRouletteProvider>
      <App />
    </RestaurantRouletteProvider>
  </BrowserRouter>,
)
