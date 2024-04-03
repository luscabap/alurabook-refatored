import { useEffect, useState } from 'react'
import { ILivroProps } from '../../interface/ILivroProps'
import { formatador } from '../../util/formatadorMoeda'
import * as Style from './style'
import { Heart, ShoppingBagOpen } from '@phosphor-icons/react'

interface ILivrosDestaqueProps {
    livros: ILivroProps[],
    titulo: string
}

export const LivrosDestaque = ({ livros, titulo }: ILivrosDestaqueProps) => {
    const [selecionado, setSelecionado] = useState<ILivroProps>()

    useEffect(() => {
        if (livros?.length) {
            setSelecionado(livros[0])
        }
    }, [livros])

    const valorMinimo = selecionado ? Math.min(...selecionado.opcoesCompra.map(op => op.preco)) : 0;

    return (
        <Style.ContainerLivrosDestaque>
            <h2 className='titulo'>{titulo}</h2>
            <div className="containerLivros">
                <ul className="containerImagens">
                    {
                        livros.map(livro => (
                            <li
                                key={livro.id}
                                onClick={() => setSelecionado(livro)}
                                className={selecionado?.titulo === livro.titulo ? 'selecionado' : 'imagem'}
                            >
                                <img src={livro.imagemCapa} alt={`Capa do livro ${livro.titulo} escrito por ${livro.autor}`} />

                            </li>
                        ))
                    }
                </ul>

                {selecionado &&
                    <Style.ContainerInfosLivro>
                        <Style.HeaderContainer>
                            <h2 className='headerContainer__icone__tituloContainer'>Sobre o livro:</h2>
                            <div>
                                <ShoppingBagOpen size={38} color='#002F52' className='headerContainer__icone' />
                                <Heart size={38} color='#002F52' className='headerContainer__icone' />
                            </div>
                        </Style.HeaderContainer>
                        <h3 className='tituloLivro'>{selecionado?.titulo}</h3>
                        <p className='descricao'>{selecionado?.descricao}</p>
                        <p className='numero_paginas'>{selecionado?.numeroPaginas} páginas</p>
                        <p className='autor'>{selecionado?.autor}</p>
                        <Style.FooterContainer>
                            <p className='infosPreco'>A partir de: <br></br><strong className='infosPreco__valor'>R$ {formatador.format(valorMinimo)}</strong></p>
                            <button className='botao'>Comprar</button>
                        </Style.FooterContainer>
                    </Style.ContainerInfosLivro>}
            </div>
        </Style.ContainerLivrosDestaque>
    )
}