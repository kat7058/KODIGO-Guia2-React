import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider 
  domain="dev-x1v6uroc6ezvija0.us.auth0.com"
  clientId="KG7hF4MLQag0lEefIDPwjGlSdF5YSmFk"
  redirectUri={window.location.origin}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Auth0Provider>
  
)