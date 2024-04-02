import styled from "styled-components";

export const PedidoContainer = styled.div`
  .pedido {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom: 1px solid #002f52;
    padding-bottom: 1rem;
    margin: 1rem 0;
    width: 1000px;
    height: 160px;

    .pedido__lista {
      padding: 0;

      .pedido__lista__item {
        list-style-type: none;
        margin: 0.4rem 0;
      }
    }

    .containerBotoes{
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;

      .containerBotoes__botao{
        cursor: pointer;
      }
    }
  }
`;
