// eslint-disable-next-line simple-import-sort/imports
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import './styles/global.css'
import App from './App.jsx'
import { RestaurantRouletteProvider } from './features/restaurant-roulette/domain/context/RestaurantRouletteContext'
import { CategoryRouletteProvider } from './features/category-roulette/domain/context/CategoryRouletteContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RestaurantRouletteProvider>
      <CategoryRouletteProvider>
        <App />
      </CategoryRouletteProvider>
    </RestaurantRouletteProvider>
  </BrowserRouter>,
)
