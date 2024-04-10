import styled from "styled-components";

export const ContainerCardFlutuante = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1rem 0;
    border: 1px solid #000;

  .imagem {
    width: 190.5px;
  }

  .containerInfos {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    .containerInfos__titulo {
      font-size: 24px;
      font-weight: 700;
      color: #002F52;
    }

    .containerInfos__autor {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.85);
    }

    .containerInfos__quantidade {
        font-size: 16px;
        color: #EB9B00;
    }

    .containerInfos__valor {
        font-size: 24px;
        font-weight: 700;
        color: #002F52;
    }
  }
`;
