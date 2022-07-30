import styled from 'styled-components'
import { colors } from '../../Styles/GlobalStyle'

export const StyledHeader = styled.header`
  width: 100vw;
  height: 102px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.greys.grey0};
  form {
    display: flex;
    justify-content: space-around;
    position: relative;
    button {
      position: absolute;
      top: 7px;
      left: 193px;
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`