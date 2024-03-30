import { AbBotao } from "ds-alurabooks";
import { IPedidosProps } from "../../interface";
import * as Style from './style'

export const Pedido = ({ data_pedido, entregaRealizada_pedido, nr_pedido, valorTotal_pedido }: IPedidosProps) => {
    
    return (
        <Style.PedidoContainer>
            <ul className="pedido__lista">
                <li className="pedido__lista__item">Pedido: <strong>{nr_pedido}</strong></li>
                <li className="pedido__lista__item">Data do pedido: <strong>{data_pedido}</strong></li>
                <li className="pedido__lista__item">Valor total: <strong>R${valorTotal_pedido}</strong></li>
                <li className="pedido__lista__item">Entrega realizada em: <strong>{entregaRealizada_pedido}</strong></li>
            </ul>
            <AbBotao 
                texto="Detalhes"
            />
        </Style.PedidoContainer>
    )
}