import styled from "styled-components";

export const ContainerSobreProduto = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .tituloProduto{
        color: #002F52;
        font-size: 24px;
        font-weight: 700;
        border-bottom: 2px solid #EB9B00;
        padding-bottom: 1rem;
    }

    .descricaoProduto{
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: #000000D9;
    }
`