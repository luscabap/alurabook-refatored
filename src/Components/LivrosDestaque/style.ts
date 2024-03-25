import styled from "styled-components";

export const ContainerLivrosDestaque = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .titulo {
    font-weight: 700;
    font-size: 32px;
    color: #eb9b00;
    text-transform: uppercase;
  }

  .containerLivros {
    display: flex;
    justify-content: space-between;
    width: 90%;
    padding: 3rem 0;

    .containerImagens {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      flex: 1;

      .containerImagens__livro {
        box-shadow: 1px 1px 8px #000;
      }
    }

    .containerInfos {
      flex: 1;
    }
  }
`;
