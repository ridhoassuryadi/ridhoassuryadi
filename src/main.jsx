import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SoundProvider } from './SoundContext.jsx'
import './css/fonts.css'
import './index.css'

// Google Analytics initialization
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID
if (GA_MEASUREMENT_ID) {
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <SoundProvider>
    <App />
  </SoundProvider>
  // </React.StrictMode>,
)
