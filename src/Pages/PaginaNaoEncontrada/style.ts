import styled from "styled-components";

export const ContainerPaginaNaoEncontrada = styled.div`
    text-align: center;
    
    .tituloNaoEncontrada{
        font-style: italic;
        background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
        color: #fff;
        padding: 2rem 0;
    }

    .containerBotoesNaoEncontrada{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 3rem 0;
        cursor: pointer;

        h3 {
            font-weight: 400
        }
    }
`