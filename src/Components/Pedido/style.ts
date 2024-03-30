import styled from "styled-components";

export const PedidoContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 1000px;
    border-bottom: 1px solid #002F52;
    padding-bottom: 1rem;
    margin: 1rem 0;
    
    .pedido__lista{
        padding: 0;

        .pedido__lista__item{
            list-style-type: none;
            margin: 0.4rem 0;
        }
    }
`