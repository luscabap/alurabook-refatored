import { AbBotao, AbCampoTexto } from 'ds-alurabooks';
import { useState } from 'react';
import { ICategoriaProps } from '../../interface/ICategoriaProps';
import { MiniCard } from '../MiniCard';
import * as Style from './style';
import { useLivros } from '../../Graphql/livros/hooks';

interface IListaLivrosProps {
    categoria: ICategoriaProps
}

export const ListaLivros = ({ categoria }: IListaLivrosProps) => {
    const { data, refetch } = useLivros(categoria);
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