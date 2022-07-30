import styled from 'styled-components'
import { colors } from '../../Styles/GlobalStyle'

export const StyledCart = styled.div`
  width: 90%;
  max-width: 380px;
  max-height: 450px;
  border-radius: 5px 5px 0px 0px;
  margin: 5px auto;
  background-color: ${colors.greys.grey0};
  border-radius: 5px 5px 5px 5px;
  ul {
    overflow-y: auto;
    max-height: 320px;
    height: 250px;
  }
  #emptyCartBox {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  #emptyCartInfo {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    h3 {
      font-size: 16px;
    }
    p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 24px;
      color: #828282;
    }
  }
  #titleCart {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background: ${colors.main.primary};
    height: 65px;
    border-radius: 5px 5px 0px 0px;
  }
  @media screen and (min-width: 1024px) {
    margin-left: 27px;
  }
  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 90%;
  }
  @media screen and (min-width: 1500px) {
    width: 85%;
    #emptyCartInfo {
      margin-top: 100px;
    }
  }
`