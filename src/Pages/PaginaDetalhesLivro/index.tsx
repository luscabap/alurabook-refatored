import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { obterInfosLivro } from "../../http";
import { AbBotao, AbGrupoOpcoes, AbInputQuantidade } from "ds-alurabooks";

export const PaginaDetalhesLivro = () => {
    const params = useParams();

    const { data: livro } = useQuery(['obterInfosLivro'], () => obterInfosLivro(params.id))

    return (
        <>
            <h1>Detalhes do livro</h1>
            <div>
                <img src={livro?.imagemCapa} alt="" />
                <h2>{livro?.titulo}</h2>
                <p>{livro?.descricao}</p>
                <p>Por: {livro?.autor}</p>
                <p>Selecione o formato do seu livro: </p>
                
                <p>Quantidade</p>
                <AbInputQuantidade />
                <AbBotao />
            </div>
            <h3>SObre o Autor</h3>
            <p>{livro?.sobre}</p>
        </>
    )
}