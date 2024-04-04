import styled from "styled-components";

export const ContainerLivrosDestaque = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;

  .titulo {
    font-weight: 700;
    font-size: 32px;
    color: #eb9b00;
    text-transform: uppercase;
  }

  .containerLivros {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 3rem 0;

    .containerImagens {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style-type: none;
      margin: 0;
      padding: 0;
      flex: 1;

      .imagem {
        transform: scale(0.7);
        padding: 0;
        transition: 0.5s;
        cursor: pointer;
      }

      .selecionado{
        box-shadow: 1px 1px 8px #000;
        transition: 0.9s;
      }
    }
  }
`;

interface HeaderProps {
  favorito: boolean;
}

export const HeaderContainer = styled.header<HeaderProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .headerContainer__icone__tituloContainer{
        color: #EB9B00;
        font-weight: 700;
        font-size: 32px;
        margin: 0;
    }

    .headerContainer__iconeFav{
        margin-left: 2rem;
        cursor: pointer;
    }

    .headerContainer__iconeShop{
        margin-left: 2rem;
        cursor: pointer;
    }
`;

export const ContainerInfosLivro = styled.div`
    border-radius: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 48px 32px 70px 48px;
    height: 300px;
    width: 750px;
    margin: 0 0 0 1rem;

    .tituloLivro{
        color: #002F52;
        font-weight: 700;
        font-size: 18px;
        margin: 1rem 0;
    }

    .descricao{
        font-size: 14px;
        line-height: 21px;
    }

    .autor{
        margin: -1rem 0 0 0;
        font-size: 14px;
    }
`;

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .infosPreco{
        color: rgba(0, 0, 0, 0.5);
        font-size: 14px;

        .infosPreco__valor{
            color: #002F52;
            font-weight: 700;
            font-size: 36px;
        }
    }

    .botao{
        background-color: #EB9B00;
        color: #fff;
        text-align: center;
        width: 189px;
        height: 82px;
        gap: 10px;
        font-size: 20px;
        border: none;
        font-weight: bolder;
    }
`

