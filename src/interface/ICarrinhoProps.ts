import { ILivroProps } from "./ILivroProps"

export interface ICarrinhoProps {
    total: number,
    itens: IItemCarrinho[]
}

export interface IItemCarrinho {
    quantidade: number,
    livroId: number,
    opcaoCompraId: number,
    opcaoCompra: IOpcaoCompraProps,
    livro: ILivroProps
}

interface IOpcaoCompraProps {
    id: number,
    titulo: string,
    formatos: string[],
    preco: number
}