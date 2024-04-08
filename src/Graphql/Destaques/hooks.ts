import { useQuery } from "@apollo/client"
import { ILivroProps } from "../../interface/ILivroProps"
import { OBTER_DESTAQUES } from "./queries"

export const useDestaques = () => {
    return useQuery<{ destaques: { lancamentos: ILivroProps[], maisVendidos: ILivroProps[] } }>(OBTER_DESTAQUES)
}