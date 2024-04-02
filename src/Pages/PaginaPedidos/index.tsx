import { Pedido } from '../../Components/Pedido';
import * as Style from './style';

export const PaginaPedidos = () => {
    return (
        <Style.ContainerPaginaPedidos>
            <div className='containerPedidos__pedidos'>
                <h2 className='containerPedidos__pedidos__titulo'>Pedidos</h2>
                <Pedido />
            </div>
        </Style.ContainerPaginaPedidos>
    )
}