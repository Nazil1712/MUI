import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CustomizedComponent from './Components/CustomizedComponent.tsx'
import ResponsiveNess from './Components/ResponsiveNess'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <CustomizedComponent /> */}
    <ResponsiveNess/>
  </StrictMode>,
)
