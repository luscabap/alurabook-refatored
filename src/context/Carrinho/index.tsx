import { ReactElement, createContext } from "react";
import { useAdicionarItem, useCarrinho, useRemoverItem } from "../../Graphql/Carrinho/hooks";
import { ICarrinhoProps, IItemCarrinho } from "../../interface/ICarrinhoProps";

export interface ICarrinhoContextProps {
    carrinho?: ICarrinhoProps,
    adicionarItemCarrinho: (item: IItemCarrinho) => void
    removerItemCarrinho: (item: IItemCarrinho) => void
    carregando: boolean
}

interface ICarrinhoProviderProps {
    children: ReactElement
}

export const CarrinhoContext = createContext<ICarrinhoContextProps>({
    adicionarItemCarrinho: () => null,
    removerItemCarrinho: () => null,
    carregando: false
})

const CarrinhoProvider = ({ children }: ICarrinhoProviderProps) => {
    const { data, loading: loadingCarrinho } = useCarrinho();
    const [adicionaItem, { loading: loadingAdiciona }] = useAdicionarItem()
    const [removeItem] = useRemoverItem();

    const adicionarItemCarrinho = (item: IItemCarrinho) => {
        adicionaItem({
            variables: {
                item: {
                    livroId: item.livro.id ,
                    opcaoCompraId: item.opcaoCompra.id,
                    quantidade: item.quantidade
                  }
            }
        })
    }

    const removerItemCarrinho = (item: IItemCarrinho) => {
        removeItem({
            variables: {
                item: {
                    livroId: item.livro.id,
                    opcaoCompraId: item.opcaoCompra.id,
                    quantidade: item.quantidade
                }
            }
        })
    }



    return (
        <CarrinhoContext.Provider 
            value={{ 
                carrinho: data?.carrinho, 
                adicionarItemCarrinho,
                removerItemCarrinho,
                carregando: loadingCarrinho || loadingAdiciona
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    )
}

export default CarrinhoProvider