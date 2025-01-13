
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
)
