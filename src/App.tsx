import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { PaginaPrincipal } from './Pages/PaginaPrincipal'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<PaginaPrincipal />} />
        </Routes>
       <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
