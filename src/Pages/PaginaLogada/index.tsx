import { SecaoDestacada } from '../../Components/SecaoDestacada'
import * as Style from './style';
import { Outlet, useNavigate } from 'react-router-dom';

export const PaginaLogada = () => {
    const categorias = [
        'Android',
        'OO',
        'Marketing Digital',
        'Agile',
        'Startups',
        'HTML & CS',
        'Java',
        'Python',
    ]

    const navigate = useNavigate();

    return (
        <Style.ContainerPaginaLogada>
            <h2 className='tituloLogada' onClick={() => navigate('/minha-conta')}>Minha conta</h2>
            <div className='containerInfos'>
                <ul className='containerInfos__lista'>
                    <li className='containerInfos__lista__item' onClick={() => navigate('/minha-conta/pedidos')}>Pedidos</li>
                    <li className='containerInfos__lista__item'>Trocas</li>
                    <li className='containerInfos__lista__item'>Cupons</li>
                    <li className='containerInfos__lista__item'>Seus dados</li>
                </ul>
                <div className='containerInfos__pedidos'>
                    <Outlet />
                </div>
            </div>

            <SecaoDestacada
                titulo='CATEGORIAS MAIS BUSCADAS'
                botoes={categorias}
            />
        </Style.ContainerPaginaLogada>
    )
}