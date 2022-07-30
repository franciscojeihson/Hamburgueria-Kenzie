import styled from 'styled-components'
import { colors } from '../../Styles/GlobalStyle'

export const StyledButton = styled.button`
  width: ${({ width }) => (width ? width : '100px')};
  height: ${({ height }) => (height ? height : '35px')};
  background-color: ${({ green }) =>
    green ? colors.main.primary : colors.greys.grey20};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '15px')};
  border: 2px solid ${colors.main.primary};
  box-sizing: border-box;
  border-radius: 8px;
  color: #ffffff;
  border-style: none;
  :hover {
    background-color: ${({ green }) =>
      green ? colors.main.primary50 : colors.greys.grey50};
  }
`