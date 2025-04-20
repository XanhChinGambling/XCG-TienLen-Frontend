import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='h-full w-full bg-blue-500'>

    </div>
  </StrictMode>,
)
