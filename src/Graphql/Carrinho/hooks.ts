import { useMutation, useQuery } from "@apollo/client"
import { ADICIONAR_ITEM, OBTER_CARRINHO } from "./queries"
import { ICarrinhoProps } from "../../interface/ICarrinhoProps";

export const useCarrinho = () => {
    return useQuery<{ carrinho: ICarrinhoProps }>(OBTER_CARRINHO);
}

export const useAdicionarItem = () => {
    return useMutation(ADICIONAR_ITEM, {
        refetchQueries: [
            'ObterCarrinho'
        ]
    })
}