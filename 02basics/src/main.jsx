import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'; // ✅ This line is required

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
