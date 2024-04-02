import { useEffect, useState } from 'react';
import { TituloPrincipal } from '../../Components/TituloPrincipal';
import * as Style from './style';
import { ICategoriaProps } from '../../interface/ICategoriaProps';
import http from '../../http';
import { useParams } from 'react-router-dom';
import { Loader } from '../../Components/Loader';

export const PaginaCategoria = () => {
    const [categoria, setCategoria] = useState<ICategoriaProps>();
    const [estaCarregando, setEstaCarregando] = useState(true);

    const params = useParams();

    useEffect(() => {
        setEstaCarregando(true)
        http.get<ICategoriaProps[]>('/categorias', {
            params: {
                slug: params.slug
            }
        })
            .then(resposta => {
                setCategoria(resposta.data[0]);
                setEstaCarregando(false)
            }).catch(erro => {
                console.log(erro)
                setEstaCarregando(false)
            })
    }, [params.slug])

    if (estaCarregando) {
        return (
            <Loader />
        )
    }

    return (
        <Style.ContainerPaginaCategoria>
            <TituloPrincipal
                textoTitulo={categoria?.nome ?? ''}
            />
        </Style.ContainerPaginaCategoria>
    )
}