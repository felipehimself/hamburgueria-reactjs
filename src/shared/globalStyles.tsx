import { createGlobalStyle } from 'styled-components';
import { Styles } from '../constants/styles';

export const GlobalStyles = createGlobalStyle`

    *,
     ::after,
     ::before{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%
    }

    @media screen and (max-width: 860px) {
      html {
        font-size: 58.5%;
      }
    }

    @media screen and (max-width: 620px) {
      html {
        font-size: 56.5%;
      }
    }


    body {
      font-family: 'Source Sans Pro', sans-serif;
      background-color: #f8f9fa;
    }

    input, ::placeholder , button, textarea{
      font-family: inherit;
    }

    .accordion {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      border: none;
    }

    
    .accordion__item {
      border: 2px solid rgba(0,0,0,0.12);
      border-top: none;
      border-radius: 5px;
    }

    .accordion__heading {
      border-top: 4px solid ${Styles.Colors.colorPrimary};
      border-radius: 4px;
    }
    

`;
