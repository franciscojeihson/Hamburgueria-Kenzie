import { createGlobalStyle } from 'styled-components'

export const colors = {
  main: {
    primary: '#27AE60',
    primary50: '#44d47f',
    secondary: '#EB5757',
  },

  greys: {
    grey100: '#333333',
    grey50: '#828282',
    grey30: '#bdbdbd',
    grey20: '#E0E0E0',
    grey0: '#F5F5F5',
  },
}

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Inter';
    font-size: 1rem;
}
button {
    font-family: 'Inter';
    cursor: pointer;
}
h3 {
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 24px;
}
ul{
  list-style-type: none;
}
`