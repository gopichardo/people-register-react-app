import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PeopleRegisterApp } from './PeopleRegisterApp/PeopleRegisterApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PeopleRegisterApp />
    </BrowserRouter>
  </StrictMode>,
)
