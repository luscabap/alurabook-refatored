import styled from "styled-components";

export const ContainerPaginaLogada = styled.div`
    .tituloLogada {
        background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
        font-size: 36px;
        font-weight: 700;
        color: #fff;
        text-align: center;
    }

    .containerInfos{
        display: flex;
        column-gap: 5rem;
        margin: 5rem 0 5rem 1rem;

        .containerInfos__lista {
            text-align: center;

            .containerInfos__lista__item{
                list-style-type: none;
                border-bottom: 1px solid #C4C4C4;
                padding-bottom: 0.6rem;
                margin: 1rem 0;
                color: #002F52;
                width: 160px;
                cursor: pointer;
            }
        };

        .containerInfos__pedidos{

            .containerInfos__pedidos__titulo{
                font-weight: 700;
                font-size: 24px;
            }
        }
    }
`