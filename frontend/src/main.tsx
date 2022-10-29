import React from 'react'
import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { AuthContext } from './contexts/Auth/AuthContext'
import { AuthProvider } from './contexts/Auth/AuthProvider'



ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>    
  </React.StrictMode>,
  document.getElementById('root')
)