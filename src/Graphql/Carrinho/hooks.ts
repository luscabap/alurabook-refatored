import { useMutation, useQuery } from "@apollo/client"
import { ADICIONAR_ITEM, OBTER_CARRINHO, REMOVER_ITEM } from "./queries"
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

export const useRemoverItem = () => {
    return useMutation(REMOVER_ITEM, {
        refetchQueries: [
            'ObterCarrinho'
        ]
    })
}