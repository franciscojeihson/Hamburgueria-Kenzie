import styled from 'styled-components'

export const StyledApp = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 10px;
  flex-direction: column;
  section {
    display: flex;
    scroll-snap-type: x mandatory;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    section {
      width: 61%;
      flex-wrap: wrap;
      overflow-y: none;
    }
    aside {
      width: 35%;
      display: flex;
      justify-content: flex-end;
    }
  }
  @media screen and (max-width: 768px) {
    section {
      overflow-x: scroll;
    }
  }
  @media screen and (min-width: 1440px) {
    aside {
      width: 30%;
      display: flex;
      justify-content: flex-end;
    }
    section {
      width: 65%;
      flex-wrap: wrap;
      overflow-y: none;
    }
  }
  @media screen and (min-width: 1500px) {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 10px;
    flex-direction: row;
    aside {
      width: 25%;
      display: flex;
      flex-wrap: wrap;
    }
    section {
      width: 49%;
      flex-wrap: wrap;
      overflow-y: none;
    }
  }
`