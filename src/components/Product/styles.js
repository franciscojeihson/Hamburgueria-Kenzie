import styled from 'styled-components'
import { colors } from '../../Styles/GlobalStyle'

export const StyledProducts = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 265px;
  height: 315px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 10px;
  scroll-snap-align: center;
  border: 2px solid ${colors.greys.grey20};
  box-sizing: border-box;
  border-radius: 5px;
  #productImgBox {
    width: 100%;
    height: 150px;
    background: ${colors.greys.grey0};
    display: flex;
    justify-content: center;
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
  #productInfoBox {
    display: flex;
    flex-direction: column;
    height: 48%;
    justify-content: space-around;
    margin-top: 7px;
    margin-left: 15px;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: ${colors.greys.grey50};
  }
  span {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: ${colors.main.primary};
  }
  @media screen and (min-width: 1024px) {
    min-width: 290px;
  }
  @media screen and (min-width: 1024px) {
    min-width: 300px;
  }
`