import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { RoutesMain } from './routes/RoutesMain.jsx'
import { UserProvider } from './providers/userContext.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactProvider } from './providers/contactContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer  />
    <BrowserRouter>
      {/* <UserProvider> */}
        <ContactProvider>
          <RoutesMain>
            <App />
          </RoutesMain>
        </ContactProvider> 
      {/* </UserProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
)
