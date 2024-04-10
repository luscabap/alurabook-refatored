import { ILivroProps } from "./ILivroProps"

export interface ICarrinhoProps {
    total: number,
    itens: IItemCarrinho[]
}

export interface IItemCarrinho {
    livro: ILivroProps,
    opcaoCompra: IOpcaoCompraProps,
    quantidade: number
}

interface IOpcaoCompraProps {
    id: number,
    titulo: string,
    formatos?: string[],
    preco: number
}