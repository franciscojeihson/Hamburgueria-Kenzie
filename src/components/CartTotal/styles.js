import styled from 'styled-components'
import { colors } from '../../Styles/GlobalStyle'

export const StyledCartTotal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  height: 135px;
  gap: 20px;
  div {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${colors.greys.grey20};
    padding-top: 15px;
    height: 32px;
  }
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: ${colors.greys.grey100};
  }
  span {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: ${colors.greys.grey50};
  }
  button {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.greys.grey50};
    margin: 5px auto;
    width: 98%;
    height: 60px;
    background: ${colors.greys.grey20};
    border: 2px solid ${colors.greys.grey20};
    box-sizing: border-box;
    border-radius: 8px;
  }
  button:hover {
    color: ${colors.greys.grey0};
    background-color: ${colors.greys.grey50};
  }
`