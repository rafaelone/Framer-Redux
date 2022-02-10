import { createGlobalStyle, keyframes } from 'styled-components';

const animationHoverListItem = keyframes`
  0%{background-position:10% 0%}
  50%{background-position:91% 100%}
  100%{background-position:10% 0%}
`;

export default createGlobalStyle`
  @font-face {
    font-family: 'Quicksand';
    src: url('/Quicksand-Light.woff2') format('woff2'),
      url('/Quicksand-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  

  body, ul, h1, h2, h3, p, button, a, div {
    margin: 0;
    padding: 0;
    color: white;
    letter-spacing: 2px;
    list-style-type: none;
    text-decoration: none;
  }
  
  body {
    background: radial-gradient(circle, var(--purpleRGB) 0%, var(--darkPurpleRGB) 100%);
    overflow: hidden;
  }

  button {
    color: white;
    padding: 10px 30px;
    font-size: 1em;
    background: transparent;
    border-radius: 50px;
    border: 1px solid white;
    margin: 40px auto 0;
    cursor: pointer;
    opacity: 0.7;

    &:hover {
      background: linear-gradient(130deg, var(--white), var(--purple));
      background-size: 200% 200%;
      animation: ${animationHoverListItem} 5s ease infinite;
    }
  }

  :root {
    --purple: rgb(100,0,123);
    --purpleRGB: rgb(100,0,123,1);
    --darkPurpleRGB: rgba(62,20,86,1) ;
    --white: #fff;
    --gray: rgba(255,255,255,0.2);
  }
`;
