import styled from "styled-components";

export const ContainerPaginaDetalhesLivro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .tituloPagina{
        font-weight: 700;
        font-size: 36px;
        background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
        text-align: center;
        padding: 20px 0;
        color: #fff;
        width: 100%;
    }

    .container{
        display: flex;
        gap: 1rem;
        width: 1000px;

        .container__img{
            flex: 1;
        }

        .container__containerInfos{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;

            .container__containerInfos__titulo{
                color: #002F52;
                font-weight: 700;
                font-size: 32px;
                margin: 0;
            }

            .container__containerInfos__descricao{
                font-size: 18px;
                margin: 0;
            }

            .container__containerInfos__autor{
                font-size: 14px;
                color: rgba(0, 0, 0, 0.85);
                margin: 0;
            }

            .container__containerInfos__informarLivro{
                font-weight: 700;
                font-size: 16px;
                color: #002F52;
                margin: 1rem 0 0 0;
            }

            .container__containerInfos__opcoes{
                display: flex;
            }
        }
    }
`