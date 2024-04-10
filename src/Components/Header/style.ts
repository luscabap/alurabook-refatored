import styled from "styled-components";

interface IOpcoesCategoriasProps {
  aberto: boolean;
}

export const Header = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .containerInfos {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 4rem;

    .containerInfos__titulo {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      cursor: pointer;

      .containerInfos__titulo__texto {
        font-weight: 400;
        font-size: 30px;
      }
    }

    .lista {
      display: flex;
      gap: 1rem;

      .lista__item {
        list-style-type: none;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }

  .containerBotoes {
    display: flex;
    align-items: center;
    align-items: center;
    margin: 0 4rem 0 0;
    gap: 4rem;

    .containerBotoes__Item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      cursor: pointer;

      .containerBotoes__Item__botao {
        text-decoration: none;
        color: #000;
        font-size: 20px;
      }
    }

    .containerMinhaConta {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      cursor: pointer;

      .containerMinhaConta__texto {
        text-decoration: none;
        color: #000;
        font-size: 20px;
      }
    };

    .containerLogout{
      cursor: pointer;
      transition: 0.4s;

      &:hover{
        color: red;
        transition: 0.7s;
      }
    }
  }
`;

export const OpcoesCategorias = styled.ul<IOpcoesCategoriasProps>`
  background-color: #fff;
  display: ${(props) => (props.aberto ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
  top: 5.3rem;

  .opcoesCategorias__item {
    text-decoration: none;
    text-transform: uppercase;
    padding: 1rem;
    width: 130px;
    font-size: 16px;
    line-height: 24px;
    color: #002f52;
    list-style-type: none;
    cursor: pointer;

    &:hover {
      background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
      color: #fff;
      transition: 0.6s;
    }
  }
`;
