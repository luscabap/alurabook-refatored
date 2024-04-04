import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Loader } from '../../Components/Loader';
import { TituloPrincipal } from '../../Components/TituloPrincipal';
import { obterCategoriaPorSlug } from '../../http';
import * as Style from './style';
import { ListaLivros } from '../../Components/ListaLivros';

export const PaginaCategoria = () => {
    const params = useParams();

    const { data: categoria, isLoading } = useQuery(['categoriaPorSlug', params.slug], () => obterCategoriaPorSlug(params.slug || ''));

    if (isLoading) {
        return (
            <Loader />
        )
    }

    return (
        <Style.ContainerPaginaCategoria>
            <TituloPrincipal
                textoTitulo={categoria?.nome ?? ''}
            />
            <ListaLivros 
                categoria={categoria!}
            />
        </Style.ContainerPaginaCategoria>
    )
}