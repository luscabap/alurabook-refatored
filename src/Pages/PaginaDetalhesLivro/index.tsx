import { ILivroProps } from "../../interface/ILivroProps"

interface PaginaDetalhesLivroProps {
    selecionado: ILivroProps
}

export const PaginaDetalhesLivro = ({ selecionado }: PaginaDetalhesLivroProps) => {
    return (
        <h1>{selecionado.titulo}</h1>
    )
}