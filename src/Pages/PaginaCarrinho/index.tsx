import { AbBotao } from 'ds-alurabooks';
import { TituloPrincipal } from '../../Components/TituloPrincipal';
import { useCarrinho } from '../../Graphql/Carrinho/hooks';
import * as Style from './style';

export const PaginaCarrinho = () => {
    const { data } = useCarrinho();
    const livros = data?.carrinho.itens
    console.log(livros)

    return (
        <Style.ContainerPaginaCarrinho>
            <TituloPrincipal textoTitulo='Meu Carrinho'/>
            <h3>Itens selecionados</h3>
            {
                livros?.map(item => <li key={item.livroId}>{item.livro.titulo}</li>)
            }
            <footer>
                Total da compra: R$ {data?.carrinho.total}
                <AbBotao texto='Finalizar compra'/>
            </footer>
        </Style.ContainerPaginaCarrinho>
    )
}
