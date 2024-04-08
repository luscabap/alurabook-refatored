import { useQuery } from "@apollo/client";
import { ICategoriaProps } from "../../interface/ICategoriaProps";
import { ILivroProps } from "../../interface/ILivroProps";
import { OBTER_LIVROS } from "./queries";

export const useLivros = (categoria: ICategoriaProps) => {
  return useQuery<{ livros: ILivroProps[] }>(OBTER_LIVROS, {
    variables: {
      categoriaId: categoria.id,
    },
  });
};