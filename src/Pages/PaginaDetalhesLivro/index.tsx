import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { obterAutor, obterInfosLivro } from "../../http";
import { AbBotao, AbGrupoOpcoes, AbGrupoOpcoesProps, AbInputQuantidade } from "ds-alurabooks";
import * as Style from './style'
import { useState } from "react";
import { SobreProduto } from "../../Components/SobreProduto";
import { ILivroProps } from "../../interface/ILivroProps";
import { formatador } from "../../util/formatadorMoeda";

export const PaginaDetalhesLivro = () => {
    const [quantidade, setQuantidade] = useState(0);
    const [opcao, setOpcao] = useState<AbGrupoOpcoesProps>();

    const params = useParams();

    const { data: livro } = useQuery<ILivroProps>(['obterInfosLivro', params.slugLivro],
        () => obterInfosLivro(params.slugLivro || ''));

    const { data: autor } = useQuery(['obterAutor', livro?.autor], () => obterAutor(livro?.autor))
    console.log(autor);

    const opcoes: AbGrupoOpcoesProps[] = livro?.opcoesCompra ? livro.opcoesCompra.map(opcao => ({
        id: opcao.id,
        corpo: formatador.format(opcao.preco),
        titulo: opcao.titulo,
        rodape: opcao.formatos ? opcao.formatos.join(',') : ''
    })) : []
    return (
        <Style.ContainerPaginaDetalhesLivro>
            <h1 className="tituloPagina">Detalhes do livro</h1>
            <div className="container">
                <img src={livro?.imagemCapa} alt={`Livro ${livro?.titulo} escrito por ${livro?.autor}`} className="container__img" />
                <div className="container__containerInfos">
                    <h2 className="container__containerInfos__titulo">{livro?.titulo}</h2>
                    <p className="container__containerInfos__descricao">{livro?.descricao}</p>
                    <p className="container__containerInfos__autor">Por: {autor?.nome}</p>
                    <h3 className="container__containerInfos__informarLivro">Selecione o formato do seu livro: </h3>
                    <div className="container__containerInfos__opcoes">
                        <AbGrupoOpcoes
                            opcoes={opcoes}
                            onChange={setOpcao}
                            valorPadrao={opcao}
                        />
                    </div>
                    <AbInputQuantidade
                        onChange={setQuantidade}
                        value={quantidade}
                    />
                    <AbBotao
                        texto="Comprar"
                    />
                </div>
            </div>
            <SobreProduto
                titulo="Sobre o Autor"
                informacoes={livro}
            />
            <SobreProduto
                titulo="Sobre o Livro"
                informacoes={autor}
            />
        </Style.ContainerPaginaDetalhesLivro>
    )
}