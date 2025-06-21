import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import './styles/reset.css'
import './styles/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
