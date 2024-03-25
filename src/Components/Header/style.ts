import styled from "styled-components";

export const Header = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .containerInfos{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0 0 4rem;

            .containerInfos__titulo{
                display: flex;
                align-items: center;
                justify-content: center;

                .containerInfos__titulo__texto{
                    font-weight: 400;
                    font-size: 30px;
                }
            }
        
            .lista{
                display: flex;
                gap: 1rem;
        
                .lista__item{
                    list-style-type: none;
                    font-size: 16px;
                }
            }
    }


    .containerBotoes{
        display: flex;
        align-items: center;
        align-items: center;
        margin: 0 4rem 0 0;
        gap: 4rem;

        .containerBotoes__botao{
            text-decoration: none;
            color: #000;
            font-size: 20px;
        }
    }
`

