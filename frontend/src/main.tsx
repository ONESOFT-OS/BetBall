import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './contexts/Auth/AuthProvider'
import { ChakraProvider } from '@chakra-ui/react';


import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>  
  </React.StrictMode>
)


// ReactDOM.render(
//   <React.StrictMode>
//       <BrowserRouter>
//         <AuthProvider>
//           <App />
//         </AuthProvider>
//       </BrowserRouter>    
//   </React.StrictMode>,
//   document.getElementById('root')
// )