import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Pages/redux/store/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} ></Route>
    </Routes>
    </BrowserRouter>
    </Provider>
   
  </StrictMode>,
)
