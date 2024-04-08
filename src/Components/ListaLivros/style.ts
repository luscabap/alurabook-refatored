import styled from "styled-components";

export const ContainerPagina = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-around;
    justify-content: center;

        .container__busca{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        
        input {
            width: 800px;
            text-align: center;
            border-radius: 20px;
            padding: 1rem;
            border: 1px solid #0F0F0F
        }
    }
`

export const ContainerListaLivros = styled.div`
    display: flex;
    align-items: space-around;
    gap: 2rem;
    flex-wrap: wrap;
    margin: 24px auto;
    max-width: 80%;
`