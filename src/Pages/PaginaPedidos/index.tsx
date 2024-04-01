import { Pedido } from '../../Components/Pedido';
import * as Style from './style';

export const PaginaPedidos = () => {
    return (
        <Style.ContainerPaginaPedidos>
            <div className='containerPedidos__pedidos'>
                <h2 className='containerPedidos__pedidos__titulo'>Pedidos</h2>
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
        </Style.ContainerPaginaPedidos>
    )
}