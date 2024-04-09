import { useQuery } from "@apollo/client"
import { OBTER_CARRINHO } from "./queries"
import { ICarrinhoProps } from "../../interface/ICarrinhoProps";

export const useCarrinho = () => {
    return useQuery<{ carrinho: ICarrinhoProps }>(OBTER_CARRINHO);
}