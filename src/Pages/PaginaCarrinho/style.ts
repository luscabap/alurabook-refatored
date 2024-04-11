import styled from "styled-components";

export const ContainerPaginaCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .container__infosCarrinho{
        h3 {
            font-size: 24px;
        }
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 70%;

        footer {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            border-top: 1px solid #000;
            width: 100%;
            gap: 2rem;
            padding: 3rem 0;
        }
    }
`;

export const ContainerLoading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 700px;
`