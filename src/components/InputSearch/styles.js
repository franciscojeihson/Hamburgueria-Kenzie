import styled from 'styled-components'
import { colors } from '../../Styles/GlobalStyle'

export const StyledInput = styled.input`
  width: 300px;
  height: 50px;
  padding: 5px;
  background: #ffffff;
  padding-left: 15px;
  border: 2px solid ${colors.greys.grey20};
  border-radius: 8px;
  margin-bottom: 10px;
  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: ${colors.greys.grey20};
  }
  @media screen and (min-width: 1024px) {
    margin-bottom: 1px;
  }
`