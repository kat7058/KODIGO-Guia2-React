import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider 
  domain="dev-07vtgbrdofdaq2z8.us.auth0.com"
  clientId="myxwjMXXgYcR3u7ELhsJyCKbPdz1ZCLK"
  redirectUri={window.location.origin}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Auth0Provider>
  
)