import { AbBotao, AbGrupoOpcoes, AbGrupoOpcoesProps, AbInputQuantidade } from "ds-alurabooks";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { SobreProduto } from "../../Components/SobreProduto";
import { useLivroEspecifico } from "../../Graphql/LivroEspecifico/hooks";
import { formatador } from "../../util/formatadorMoeda";
import * as Style from './style';
import { Loader } from "../../Components/Loader";

export const PaginaDetalhesLivro = () => {
    const [quantidade, setQuantidade] = useState(0);
    const [opcao, setOpcao] = useState<AbGrupoOpcoesProps>();

    const params = useParams();

    const { data, loading, error } = useLivroEspecifico(params.slugLivro || '');

    // const { data: autor } = useQuery(['obterAutor', livro?.autor], () => obterAutor(livro?.autor))

    if (loading) {
        return <Loader />
    }

    if (error) {
        console.log(error)
        return <h1>OPS! Algum erro inesperado aconteceu</h1>
    }

    const opcoes: AbGrupoOpcoesProps[] = data?.livro.opcoesCompra ? data?.livro.opcoesCompra.map(opcao => ({
        id: opcao.id,
        corpo: formatador.format(opcao.preco),
        titulo: opcao.titulo,
        rodape: opcao.formatos ? opcao.formatos.join(',') : ''
    })) : []
    return (
        <Style.ContainerPaginaDetalhesLivro>
            <h1 className="tituloPagina">Detalhes do livro</h1>
            <div className="container">
                <img src={data?.livro.imagemCapa} alt={`Livro ${data?.livro.titulo} escrito por ${data?.livro.autor}`} className="container__img" />
                <div className="container__containerInfos">
                    <h2 className="container__containerInfos__titulo">{data?.livro.titulo}</h2>
                    <p className="container__containerInfos__descricao">{data?.livro.descricao}</p>
                    {/* <p className="container__containerInfos__autor">Por: {data?.autor.nome}</p> */}
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
            {/* <SobreProduto
                titulo="Sobre o Autor"
                informacoes={data.livro}
            /> */}
            {/* <SobreProduto
                titulo="Sobre o Livro"
                informacoes={autor}
            /> */}
        </Style.ContainerPaginaDetalhesLivro>
    )
}