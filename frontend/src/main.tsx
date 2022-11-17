
import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
        <App />
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