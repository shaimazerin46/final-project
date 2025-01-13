
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <HelmetProvider>
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='/menu' element={<Menu></Menu>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
  </HelmetProvider>
)
