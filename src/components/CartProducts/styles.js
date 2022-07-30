import styled from 'styled-components'
import { colors } from '../../Styles/GlobalStyle'

export const StyledCartProduct = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 10px auto 5px auto;
  #cartInfoBox {
    display: flex;
    flex-direction: column;
    width: 45%;
  }
  #cartImgBox {
    width: 70px;
    height: 70px;
    background: ${colors.greys.grey20};
    border-radius: 5px;
    img {
      width: 100%;
    }
  }
  h3 {
    color: ${colors.greys.grey100};
    margin-bottom: 8px;
    margin-top: 5px;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: ${colors.greys.grey50};
  }
  span {
    align-self: flex-start;
    margin-top: 5px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: ${colors.greys.grey30};
    cursor: pointer;
    :hover {
      color: ${colors.greys.grey50};
    }
  }
`