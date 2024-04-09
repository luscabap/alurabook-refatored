import styled from "styled-components";

export const ContainerMiniCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 350px;
    flex-wrap: wrap;
    box-shadow: 1px 1px 5px #000;
    border-radius: 0 0 1rem 1rem;

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
        transition: 0.5s;
        cursor: pointer;
        border-radius: 0 0 1rem 1rem;

        &:hover{
            background-color: #8a4908;
            transition: 0.3s;
        }
    }

    p {
        color: #002F52;
        font-size: 24px;

        strong {
            font-size: 24px;
        }
    }
`