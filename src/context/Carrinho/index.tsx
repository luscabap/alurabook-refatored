import { ReactElement, createContext } from "react";
import { useAdicionarItem, useCarrinho } from "../../Graphql/Carrinho/hooks";
import { ICarrinhoProps, IItemCarrinho } from "../../interface/ICarrinhoProps";

export interface ICarrinhoContextProps {
    carrinho?: ICarrinhoProps,
    adicionarItemCarrinho: (item: IItemCarrinho) => void
}

interface ICarrinhoProviderProps {
    children: ReactElement
}

export const CarrinhoContext = createContext<ICarrinhoContextProps>({
    adicionarItemCarrinho: () => null
})

const CarrinhoProvider = ({ children }: ICarrinhoProviderProps) => {
    const { data } = useCarrinho();
    const [adicionaItem] = useAdicionarItem()

    const adicionarItemCarrinho = (item: IItemCarrinho) => {
        adicionaItem({
            variables: {
                item: {
                    livroId: item.livro.id ,
                    opcaoCompraId: item.opcaoCompraId,
                    quantidade: item.quantidade
                  }
            }
        })
    }

    return (
        <CarrinhoContext.Provider 
            value={{ carrinho: data?.carrinho, adicionarItemCarrinho }}
        >
            {children}
        </CarrinhoContext.Provider>
    )
}

export default CarrinhoProvider