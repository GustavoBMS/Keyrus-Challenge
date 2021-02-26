import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 10px;
  background: rgba(240, 238, 240, 0.5);
  margin: 0 auto;
  max-width: 800px;
`

export const ProductDetail = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  flex-wrap: wrap;
  
  img {
    height: 400px;
    border-radius: 10px;

    @media only screen and (max-width:599px) {
      padding: 20px;
    }
  }

  div {
    display: flex;
    justify-content: center;
    flex: 1;
    flex-direction: column;
  }

  div > h3 {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 130px;

    @media only screen and (max-width: 800px) {
      margin-bottom: 50px;
    }
  }

  div > div {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    min-width: 380px;

    @media only screen and (max-width:850px) {
      padding: 20px;
    }

    p {
      font-size: 1.4em;
      margin-top: 15px;
      margin-left: 15px;
    }

    button {
      height: 60px;
      width: 50%;
      border: 1px black solid;
      text-decoration: none;
      text-align: center;
      padding: 20px 0;
      margin-right: 5px;

      background: #5D9EE0;
      border-radius: 5px;
      border: none;
      color: #FFF;
      font-weight: bold;
      transition: background-color 0.2s;

      &:hover {
        background: rgba(55, 136, 219, 0.6);
      }
    }
  }
`

export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  
  @media only screen and (max-width:450px) {
    padding: 20px;
  }

  hr {
    display: block;
    margin: 30px 0;
  }

  h2, p {
    margin-left: 5px;
    margin-right: 5px;
  }

  h2 {
    margin-bottom: 30px;
    font-weight: bold;
  }

  /* span {
    display: inline-block;
    max-width: 100%;
    word-break: break-all;
    margin-bottom: 18px;
    line-height: 1.5;
    text-indent: 1.5em;
  } */
`