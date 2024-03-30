import { Pedido } from '../../Components/Pedido'
import { SecaoDestacada } from '../../Components/SecaoDestacada'
import * as Style from './style';
import { useNavigate } from 'react-router-dom';

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
            <h2 className='tituloLogada'>Minha conta</h2>
            <div className='containerInfos'>
                <ul className='containerInfos__lista'>
                    <li className='containerInfos__lista__item' onClick={() => navigate('/minha-conta/pedidos')}>Pedidos</li>
                    <li className='containerInfos__lista__item'>Trocas</li>
                    <li className='containerInfos__lista__item'>Cupons</li>
                    <li className='containerInfos__lista__item'>Seus dados</li>
                </ul>

                <div className='containerInfos__pedidos'>
                    <h2 className='containerInfos__pedidos__titulo'>Pedidos</h2>
                    <Pedido 
                        nr_pedido='89019041'
                        data_pedido='26/05/2022'
                        valorTotal_pedido='48,00'
                        entregaRealizada_pedido='30/05/2022'
                    />
                    <Pedido 
                        nr_pedido='89019015'
                        data_pedido='24/03/2022'
                        valorTotal_pedido='78,00'
                        entregaRealizada_pedido='30/06/2022'
                    />
                </div>
            </div>
            <SecaoDestacada 
                titulo='CATEGORIAS MAIS BUSCADAS'
                botoes={categorias}
            />
        </Style.ContainerPaginaLogada>
    )
}