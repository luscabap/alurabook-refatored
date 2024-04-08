import { useQuery } from "@apollo/client";
import { ICategoriaProps } from "../../interface/ICategoriaProps";
import { ILivroProps } from "../../interface/ILivroProps";
import { OBTER_LIVROS } from "./queries";
import { livrosVar } from "./state";

export const useLivros = (categoria: ICategoriaProps) => {
  return useQuery<{ livros: ILivroProps[] }>(OBTER_LIVROS, {
    variables: {
      categoriaId: categoria.id,
    },
    onCompleted(data) {
        if (data.livros) {
            livrosVar(data.livros)
        }
    }
  });
};