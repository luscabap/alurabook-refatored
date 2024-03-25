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

  .containerSection__input {
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
  }
`;
