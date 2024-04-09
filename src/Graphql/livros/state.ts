import { makeVar } from "@apollo/client";
import { ILivroProps } from "../../interface/ILivroProps";
import { ICategoriaProps } from "../../interface/ICategoriaProps";

interface IFiltroLivroProps {
    categoria?: ICategoriaProps,
    titulo?: string
}

export const filtroLivrosVar = makeVar<IFiltroLivroProps>({})

export const livrosVar = makeVar<ILivroProps[]>([]);