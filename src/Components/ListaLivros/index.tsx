import { useReactiveVar } from '@apollo/client';
import { AbCampoTexto } from 'ds-alurabooks';
import { useEffect, useState } from 'react';
import { useLivros } from '../../Graphql/Livros/hooks';
import { filtroLivrosVar, livrosVar } from '../../Graphql/Livros/state';
import { ICategoriaProps } from '../../interface/ICategoriaProps';
import { MiniCard } from '../MiniCard';
import * as Style from './style';

interface IListaLivrosProps {
    categoria: ICategoriaProps
}

export const ListaLivros = ({ categoria }: IListaLivrosProps) => {
    const [textoBusca, setTextoBusca] = useState('');

    useEffect(() => {
        filtroLivrosVar({
            ...filtroLivrosVar(),
            titulo: textoBusca.length >= 3 ? textoBusca : ''
        })
    }, [textoBusca])

    filtroLivrosVar({
        ...filtroLivrosVar(),
        categoria
    })

    const livros = useReactiveVar(livrosVar);

    useLivros();

    return (
        <Style.ContainerPagina>
            <form className='container__busca'>
                <AbCampoTexto 
                    placeholder='Digite o título do livro'
                    value={textoBusca}
                    onChange={setTextoBusca}
                />
            </form>
            <Style.ContainerListaLivros>    
            {
                livros.map(livro => <MiniCard livro={livro} key={livro.id} />)
            }
            </Style.ContainerListaLivros>
        </Style.ContainerPagina>
    )
}