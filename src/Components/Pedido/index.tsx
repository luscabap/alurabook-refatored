import { AbBotao } from "ds-alurabooks";
import { useEffect, useState } from "react";
import { IPedidoReqProps } from "../../interface/IPedido";
import { XCircle } from "@phosphor-icons/react";
import http from "../../http";
import * as Style from './style';

export const Pedido = () => {
    const [pedidos, setPedidos] = useState<IPedidoReqProps[]>([]);
    const formatador = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' });

    useEffect(() => {
        http.get<IPedidoReqProps[]>('/pedidos')
        .then(resposta => setPedidos(resposta.data))
            .catch(erro => console.log(erro))
    }, [])

    const excluirPedido = (pedido: IPedidoReqProps) => {
        const token = sessionStorage.getItem('token')
        http.delete(`/pedidos/` + pedido.id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(() => {
            setPedidos(pedidos.filter(p => p.id !== pedido.id))
        })
        .catch(erro => console.log(erro))
    }

    return (
        <Style.PedidoContainer>
            {
                pedidos.map(pedido => (
                    <div className="pedido" key={pedido.id}>
                        <ul className="pedido__lista">
                            <li className="pedido__lista__item">Pedido: <strong>{pedido.id}</strong></li>
                            <li className="pedido__lista__item">Data do pedido: <strong>{new Date(pedido.data).toLocaleDateString()}</strong></li>
                            <li className="pedido__lista__item">Valor total: <strong>{formatador.format(pedido.total)}</strong></li>
                            <li className="pedido__lista__item">Entrega realizada em: <strong>{new Date(pedido.entrega).toLocaleDateString()}</strong></li>
                        </ul>
                        <div className="containerBotoes">
                            <XCircle 
                                size={32}
                                className="containerBotoes__botao"
                                onClick={() => excluirPedido(pedido)}
                            />
                            <AbBotao
                                texto="Detalhes"
                            />
                        </div>
                    </div>
                ))
            }
        </Style.PedidoContainer>
    )
}