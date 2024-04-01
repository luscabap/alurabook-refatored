import { Outlet } from "react-router-dom"
import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"

export const PaginaBase = () => {
    return (
        <main>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}