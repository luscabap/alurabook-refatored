import styled from "styled-components";

export const ContainerFooter = styled.footer`
   display: flex;
   justify-content: center;
   align-items: flex-start;
   gap: 10rem;
   margin: 0 0 3rem 0;
   border-top: 1px solid #858585;
   padding: 3rem 0 0 0;

   .tituloContainerFooter{
    font-size: 24px;
    font-weight: 400;
   }

   .containerInfosFooter{
    padding: 0 0 0 1rem;
       border-left: 1px solid #858585;
       height: 400px;
       
       .containerInfosFooter__titulo {
           color: #858585;
           font-size: 14px;
           font-weight: 400;
        }
        
        .containerInfosFooter__containersLista{
         margin: 0 0 0 -2rem;
        }
   }
`