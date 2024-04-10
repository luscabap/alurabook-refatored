import { AbInputQuantidade } from 'ds-alurabooks'
import { IITemCarrinhoProps } from '../../interface/IITemCarrinhoProps'
import * as Style from './style'
import { useState } from 'react'
import { Trash } from '@phosphor-icons/react'
import { formatador } from '../../util/formatadorMoeda'

export const ItemCarrinho = ({ imagem, titulo, descricao, nomeAutor, precoLivro, quantidade }: IITemCarrinhoProps) => {
    const [quantidadeItem, setQuantidadeItem] = useState(quantidade);

    const valor = formatador.format(precoLivro) 

    return (
        <Style.ContainerItemCarrinho>
            <div className='container__infosLivro'>
                <img src={imagem} alt={`Imagem do livro ${titulo} escrito por ${nomeAutor}`} />
                <div className='container__infosLivro__texto'>
                    <h2 className='container__infosLivro__texto__titulo'>{titulo}</h2>
                    <p className='container__infosLivro__texto__descricao'>{descricao}</p>
                    <p className='container__infosLivro__texto__autor'>Por: {nomeAutor}</p>
                </div>
            </div>
            <div className='container__precoLivro'>
                <p className='container__precoLivro__preco'><strong>Preço:</strong><br></br>{valor}</p>
                <AbInputQuantidade 
                    onChange={setQuantidadeItem}
                    value={quantidadeItem}
                />
                <Trash size={40} color="#002F52"/>
            </div>
        </Style.ContainerItemCarrinho>
    )
}