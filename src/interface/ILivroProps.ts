import { IOpcaoCompraProps } from "./IOpcaoCompraProps"

export interface ILivroProps {
    id: number
    categoria: number
    titulo: string
    slug: string
    descricao: string
    isbn: string
    numeroPaginas: number
    publicacao: string
    imagemCapa: string
    autor: number
    opcoesCompra: IOpcaoCompraProps[]
    sobre: string
}