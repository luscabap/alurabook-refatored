import { Trash } from '@phosphor-icons/react'
import { AbInputQuantidade } from 'ds-alurabooks'
import { useCarrinhoContext } from '../../hooks'
import { IITemCarrinhoProps } from '../../interface/IITemCarrinhoProps'
import { formatador } from '../../util/formatadorMoeda'
import * as Style from './style'

export const ItemCarrinho = ({ livro }: IITemCarrinhoProps) => {
    const { adicionarItemCarrinho } = useCarrinhoContext();

    const valor = formatador.format(livro.opcaoCompra.preco);

    const alterarQuantidadeDoItem = (quantidade: number) => {
        adicionarItemCarrinho({
            livro: livro.livro,
            opcaoCompra: livro.opcaoCompra,
            quantidade
        })
    }

    return (
        <Style.ContainerItemCarrinho>
            <div className='container__infosLivro'>
                <div className='container__infosLivro__img'>
                    <img src={livro.livro.imagemCapa} alt={`Imagem do livro ${livro.livro.titulo} escrito por ${livro.livro.autor.nome}`} />
                </div>
                <div className='container__infosLivro__texto'>
                    <h2 className='container__infosLivro__texto__titulo'>{livro.livro.titulo}</h2>
                    <p className='container__infosLivro__texto__descricao'>{livro.livro.descricao}</p>
                    <p className='container__infosLivro__texto__autor'>Por: {livro.livro.autor.nome}</p>
                </div>
            </div>
            <div className='container__precoLivro'>
                <p className='container__precoLivro__preco'><strong>Preço:</strong><br></br>{valor}</p>
                <AbInputQuantidade 
                    value={livro.quantidade}
                    onChange={alterarQuantidadeDoItem}
                />
                <Trash size={40} color="#002F52"/>
            </div>
        </Style.ContainerItemCarrinho>
    )
}