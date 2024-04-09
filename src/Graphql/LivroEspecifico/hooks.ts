import { useQuery } from "@apollo/client"
import { ILivroProps } from "../../interface/ILivroProps"
import { OBTER_LIVRO_ESPECIFICO } from "./queries"


export const useLivroEspecifico = (slugLivro: string) => {
    return useQuery<{ livro: ILivroProps }>(OBTER_LIVRO_ESPECIFICO, {
        variables: {
            slug: slugLivro
        }
    })
}