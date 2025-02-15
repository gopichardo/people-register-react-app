import "reflect-metadata";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PeopleRegisterApp } from './presentation/PeopleRegisterApp/PeopleRegisterApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PeopleRegisterApp />
    </BrowserRouter>
  </StrictMode>,
)
