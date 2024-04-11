import { AbBotao } from 'ds-alurabooks';
import { ItemCarrinho } from '../../Components/ItemCarrinho';
import { TituloPrincipal } from '../../Components/TituloPrincipal';
import { formatador } from '../../util/formatadorMoeda';
import * as Style from './style';
import { useCarrinhoContext } from '../../hooks';

export const PaginaCarrinho = () => {
    const { carrinho } = useCarrinhoContext();

    const livros = carrinho?.itens;
    
    const valor = formatador.format(Number(carrinho?.total || 0));

    return (
        <>
            <TituloPrincipal textoTitulo='Meu Carrinho' />
            <Style.ContainerPaginaCarrinho>
                <div className='container__infosCarrinho'>
                    <h3>Itens selecionados</h3>
                    {
                        livros?.map((item, index) => (
                            <ItemCarrinho
                                livro={item}
                                key={index}
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
