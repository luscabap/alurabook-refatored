import { AbBotao } from 'ds-alurabooks';
import { TituloPrincipal } from '../../Components/TituloPrincipal';
import { useCarrinho } from '../../Graphql/Carrinho/hooks';
import * as Style from './style';
import { ItemCarrinho } from '../../Components/ItemCarrinho';
import { formatador } from '../../util/formatadorMoeda';

export const PaginaCarrinho = () => {
    const { data } = useCarrinho();
    const livros = data?.carrinho.itens
    const valor = formatador.format(Number(data?.carrinho.total))

    return (
        <>

            <TituloPrincipal textoTitulo='Meu Carrinho' />
            <Style.ContainerPaginaCarrinho>
                <div className='container__infosCarrinho'>
                    <h3>Itens selecionados</h3>
                    {
                        livros?.map(item => (
                            <ItemCarrinho
                                imagem={item.livro.imagemCapa}
                                descricao={item.livro.descricao}
                                nomeAutor={item.livro.autor.nome}
                                precoLivro={item.opcaoCompra.preco}
                                quantidade={item.quantidade}
                                titulo={item.livro.titulo}
                                key={item.livroId}
                            />
                        ))
                    }
                    <footer>
                        Total da compra <strong>{valor}</strong>
                        <AbBotao texto='Finalizar compra' />
                    </footer>
                </div>
            </Style.ContainerPaginaCarrinho>
        </>
    )
}
