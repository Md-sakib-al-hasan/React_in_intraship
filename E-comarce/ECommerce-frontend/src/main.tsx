import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Routes/Routes'
import { Provider } from "react-redux";
import store from './app/store'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
  <Provider store={store}>
  <RouterProvider router={Router}>
  </RouterProvider>
  </Provider>
    
  </StrictMode>,
)
