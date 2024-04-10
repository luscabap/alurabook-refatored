import styled from "styled-components";

export const ContainerItemCarrinho = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 2rem 0;

    .container__infosLivro{
        display: flex;


        .container__infosLivro__texto{
            margin: 0 0 0 1rem;
            display: flex;
            flex-direction: column;
            width: 400px;

            .container__infosLivro__texto__titulo{
                font-size: 30px;
                color: #002F52;
                font-weight: 700;
                margin: 0;
            }

            .container__infosLivro__texto__descricao{
                font-size: 16px;
                width: 45%;
            }
        }
    }

    .container__precoLivro {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 3rem;

        .container__precoLivro__preco {
            margin: 0;
            font-size: 18px;
        }
    }
`