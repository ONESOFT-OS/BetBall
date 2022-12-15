
import { createStandaloneToast } from '@chakra-ui/react';
import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'

const { ToastContainer, toast } = createStandaloneToast();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
        <App />
        <ToastContainer />
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
