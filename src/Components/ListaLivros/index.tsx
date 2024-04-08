import { gql, useQuery } from '@apollo/client';
import { ICategoriaProps } from '../../interface/ICategoriaProps';
import { MiniCard } from '../MiniCard';
import * as Style from './style';
import { ILivroProps } from '../../interface/ILivroProps';
import { AbBotao, AbCampoTexto } from 'ds-alurabooks';
import { useState } from 'react';

interface IListaLivrosProps {
    categoria: ICategoriaProps
}

const OBTER_LIVROS = gql`
    query ObterLivros($categoriaId: Int, $titulo: String) {
        livros (categoriaId: $categoriaId, titulo: $titulo) {
            id,
            slug,
            titulo,
            imagemCapa,
            opcoesCompra {
                id
                preco
            }
        }
    }

`

export const ListaLivros = ({ categoria }: IListaLivrosProps) => {
    const { data, refetch } = useQuery<{ livros: ILivroProps }>(OBTER_LIVROS, {
        variables: {
            categoriaId: categoria.id
        }
    })

    const [textoBusca, setTextoBusca] = useState('')

    const buscarLivros = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        if (textoBusca) {
            refetch({
                categoriaId: categoria.id,
                titulo: textoBusca
            })
        }

        setTextoBusca("");
    }

    return (
        <Style.ContainerPagina>
            <form className='container__busca' onSubmit={buscarLivros}>
                <AbCampoTexto 
                    placeholder='Digite o título do livro'
                    value={textoBusca}
                    onChange={setTextoBusca}
                />
                <AbBotao texto='Buscar'/>
            </form>
            <Style.ContainerListaLivros>    
            {
                data?.livros.map(livro => <MiniCard livro={livro} categoria={categoria} key={livro.id} />)
            }
            </Style.ContainerListaLivros>
        </Style.ContainerPagina>
    )
}