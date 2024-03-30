import styled from "styled-components";

export const ContainerSecaoDestacada = styled.section`
  background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 1rem;
  height: 420px;

  .tituloCategorias {
    font-weight: 300;
    font-size: 32px;
    text-transform: uppercase;
    color: #fff;
  }

  .containerTags {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    width: 50%;

    button{
        background-color: #EB9B00;
        color: #fff;
        height: 85px;
        width: 165px;
        border: none;
        font-size: 24px;
        font-weight: 700;
      }
  }
`;
