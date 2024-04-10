import { AbBotao, AbGrupoOpcao, AbGrupoOpcoes, AbInputQuantidade, AbTag } from "ds-alurabooks";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../Components/Loader";
import { SobreProduto } from "../../Components/SobreProduto";
import { useLivroEspecifico } from "../../Graphql/LivroEspecifico/hooks";
import { formatador } from "../../util/formatadorMoeda";
import * as Style from './style';
import { useCarrinhoContext } from "../../hooks";
import { TituloPrincipal } from "../../Components/TituloPrincipal";

export const PaginaDetalhesLivro = () => {
    const [quantidade, setQuantidade] = useState(1);
    const [opcao, setOpcao] = useState<AbGrupoOpcao>();

    const { adicionarItemCarrinho } = useCarrinhoContext()

    const params = useParams();

    const { data, loading, error } = useLivroEspecifico(params.slugLivro || '');

    if (error) {
        console.log(error)
        return <h1>OPS! Algum erro inesperado aconteceu</h1>
    }

    if (loading) {
        return <Loader />
    }

    const opcoes: AbGrupoOpcao[] = data?.livro.opcoesCompra ? data?.livro.opcoesCompra.map(opcao => ({
        id: opcao.id,
        corpo: formatador.format(opcao.preco),
        titulo: opcao.titulo,
        rodape: opcao.formatos ? opcao.formatos.join(',') : ''
    })) : []

    const aoAdicionarItemAoCarrinho = () => {
        if (!data?.livro) {
            return 
        }
        
        const opcaoCompra = data.livro.opcoesCompra.find(op => op.id === opcao?.id)

        if (!opcaoCompra) {
            alert("Por favor selecione uma opção de compra!")
            return
        }

        adicionarItemCarrinho({
            livro: data.livro,
            quantidade,
            opcaoCompra
        })
    }

    return (
        <Style.ContainerPaginaDetalhesLivro>
            <TituloPrincipal textoTitulo="Detalhes do livro" />
            <div className="container">
                <img src={data?.livro.imagemCapa} alt={`Livro ${data?.livro.titulo} escrito por ${data?.livro.autor}`} className="container__img" />
                <div className="container__containerInfos">
                    <h2 className="container__containerInfos__titulo">{data?.livro.titulo}</h2>
                    <p className="container__containerInfos__descricao">{data?.livro.descricao}</p>
                    <p className="container__containerInfos__autor">Por: {data?.livro.autor.nome}</p>
                    <h3 className="container__containerInfos__informarLivro">Selecione o formato do seu livro: </h3>
                    <div className="container__containerInfos__opcoes">
                        <AbGrupoOpcoes
                            opcoes={opcoes}
                            onChange={setOpcao}
                            valorPadrao={opcao}
                        />
                    </div>
                    <p><strong>*Você terá acesso à futuras atualizações do livro.*</strong></p>
                    <AbInputQuantidade
                        onChange={setQuantidade}
                        value={quantidade}
                    />
                    <AbBotao
                        texto="Comprar"
                        onClick={aoAdicionarItemAoCarrinho}
                    />
                </div>
            </div>
            <div>
                <SobreProduto
                    titulo="Sobre o Autor"
                    informacoes={data?.livro.autor.sobre || ''}
                    />
                <SobreProduto
                    titulo="Sobre o Livro"
                    informacoes={data?.livro.sobre || ''}
                />
            </div>
            <div className="container__tags">
                {data?.livro.tags?.map(tag => <AbTag contexto="secundario" texto={tag.nome} key={tag.nome}/>)}
            </div>
        </Style.ContainerPaginaDetalhesLivro>
    )
}