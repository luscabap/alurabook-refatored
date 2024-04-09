import { useQuery, useReactiveVar } from "@apollo/client";
import { ILivroProps } from "../../interface/ILivroProps";
import { OBTER_LIVROS } from "./queries";
import { filtroLivrosVar, livrosVar } from "./state";

export const useLivros = () => {
  const filtro = useReactiveVar(filtroLivrosVar)

  return useQuery<{ livros: ILivroProps[] }>(OBTER_LIVROS, {
    variables: {
      categoriaId: filtro.categoria?.id,
      titulo: filtro.titulo
    },
    onCompleted(data) {
        if (data.livros) {
            livrosVar(data.livros)
        }
    }
  });
};