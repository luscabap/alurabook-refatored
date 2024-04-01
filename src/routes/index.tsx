import { Route, Routes } from "react-router-dom"
import { PaginaLogada } from "../Pages/PaginaLogada"
import { PaginaPedidos } from "../Pages/PaginaPedidos"
import { PaginaPrincipal } from "../Pages/PaginaPrincipal"
import { PaginaBase } from "../Pages/PaginaBase"

export const Rotas = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<PaginaBase />}>
                <Route index element={<PaginaPrincipal />} />
                <Route path='/minha-conta' element={<PaginaLogada />}>
                    <Route path='pedidos' element={<PaginaPedidos />} />
                </Route>
                </Route>
            </Routes>
        </>
    )
}

