import { IAutorProps } from "./IAutorProps"
import { IOpcaoCompraProps } from "./IOpcaoCompraProps"
import { ITag } from "./ITag"

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
    autor: IAutorProps
    opcoesCompra: IOpcaoCompraProps[]
    sobre: string
    tags: ITag[]
}