import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PaginaPrincipal } from './Pages/PaginaPrincipal'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { PaginaLogada } from './Pages/PaginaLogada'
import { PaginaPedidos } from './Pages/PaginaPedidos'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<PaginaPrincipal />} />
          <Route path='/minha-conta' element={<PaginaLogada />}>
            <Route path='pedidos' element={<PaginaPedidos />}/> 
          </Route>
        </Routes>
       <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
