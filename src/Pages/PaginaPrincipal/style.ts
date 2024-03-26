import styled from "styled-components";

export const ContainerComeco = styled.div`
  background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 375px;

  .containerSection__titulo {
    font-weight: 700;
    font-size: 36px;
    color: #fff;
    font-family: "Poppins", sans-serif;
    margin: 1rem 0;
  }

  .containerSection__texto {
    font-weight: 500;
    font-size: 16px;
    color: #fff;
  }

  .containerSection__containerInput{
    width: 586px;
      height: 56px;
      border-radius: 24px;
      border: 1px solid #fff;
      padding: 10px 24px 10px 24px;
      gap: 10px;
      background-color: transparent;
      text-align: center;
      color: #fff;
      margin: 2rem 0 0 0;
      display: flex;
      align-items: center;
      justify-content: center;

    .containerSection__icone{
      flex: 1;
      cursor: pointer;
      height: 100%;
    }
  
    .containerSection__containerInput__input {
      flex: 25;
      height: 100%;
      background-color: transparent;
      border: none;
      outline: none;

      &:focus{
        border: none;
        outline: none;
      }

      &::placeholder{
        color: #fff;
        font-size: 16px;
      }
    }
  }

`;

export const ContainerCategorias = styled.div`
  background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 420px;

  .tituloCategorias{
    font-weight: 300;
    font-size: 32px;
    text-transform: uppercase;
    color: #fff;
  }

  .containerTags{
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

export const ContainerNovidades = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  height: 200px;

  .tituloNovidades{
    color: #002F52;
    font-weight: 500;
    font-size: 24px;
  }

  .descricaoNovidades{
    color: #002F52;
    font-weight: 300;
    font-size: 16px;
  }

  .inputNovidades{
    border: 1px solid #002F52;
    width: 400px;
    height: 30px;
    padding: 10px 24px 10px 24px;
    gap: 10px;
    border-radius: 24px;

    &::placeholder {
      color: #002F52;
      font-size: 16px;
    }
  }
`
