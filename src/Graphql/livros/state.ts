import { makeVar } from "@apollo/client";
import { ILivroProps } from "../../interface/ILivroProps";

export const livrosVar = makeVar<ILivroProps[]>([])