import { House } from '@phosphor-icons/react';
import * as Style from './style';
import { useNavigate } from 'react-router-dom';

export const PaginaNaoEncontrada = () => {
    const navigate = useNavigate();

    return (
        <Style.ContainerPaginaNaoEncontrada>
            <h1 className='tituloNaoEncontrada'>PÁGINA NÃO ENCONTRADA</h1>
            <div className='containerBotoesNaoEncontrada' onClick={() => navigate('/')}>
                <h3>Voltar a página prinicipal</h3>
                <House size={60} color='#002F52'/>
            </div>
        </Style.ContainerPaginaNaoEncontrada>
    )
}