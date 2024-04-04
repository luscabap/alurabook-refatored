import { useQuery } from '@tanstack/react-query';
import { ICategoriaProps } from '../../interface/ICategoriaProps';
import * as Style from './style';
import { obterLivrosDaCategoria } from '../../http';
import { MiniCard } from '../MiniCard';

interface IListaLivrosProps {
    categoria: ICategoriaProps
}

export const ListaLivros = ({ categoria }: IListaLivrosProps) => {
    const { data: produtos } = useQuery(['buscaLivrosPorCategoria', categoria], () => obterLivrosDaCategoria(categoria))

    return (
        <Style.ContainerListaLivros>
            {
                produtos?.map(livro => <MiniCard livro={livro} key={livro.id}/>)
            }
        </Style.ContainerListaLivros>
    )
}