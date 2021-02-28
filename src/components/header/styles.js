import styled from 'styled-components';

export const MainHeader = styled.header`
  background: #deddde;
  margin-bottom: 70px;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100px;
    max-width: 800px;
    margin: 0 auto;

    @media only screen and (max-width:599px) {
      margin: 0 10px 0 10px;
      height: 80px;
    }

    h1 {
      margin: 0 auto;
    }

    a img {
      padding-left: 20px;
      padding-right: 20px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row-reverse;
      color: black;
      text-decoration: none;
      height: 70px;
      margin-right: 20px;
      margin-left: 20px;

      @media only screen and (max-width:599px) {
        margin-right: 10px;
        margin-left: 10px;
      }

      span {
        display: flex;
        align-items: center;

        svg {
          margin-right: 4px;
        }
      }
    }
  }
`