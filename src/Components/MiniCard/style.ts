import styled from "styled-components";

export const ContainerMiniCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 350px;
    flex-wrap: wrap;

    .tituloLivro{
        color: #002F52;
    }

    .botao{
        width: 100%;
        background-color: #EB9B00;
        color: #fff;
        height: 62px;
        border: none;
        font-size: 24px;
        font-weight: bolder;
    }

    p {
        color: #002F52;
        font-size: 24px;

        strong {
            font-size: 24px;
        }
    }
`