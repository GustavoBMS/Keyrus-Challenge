import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 15px;
`

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  background: rgba(240, 238, 240, 0.8);
  border-radius: 10px;
  padding: 20px;

  img {
    height: 300px;
    border-radius: 10px;
    margin: 0 auto;
    width: 300px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      margin: 30px 0;
      text-align: center;
    }

    div {
      display: flex;
      width: 80%;
      flex-direction: row;
      justify-content: space-around;

      p {
        text-align: center;
        font-size: 1.2em;
      }

    a {
      height: 60px;
      width: 40%;
      justify-content: center;
      border: 1px black solid;
      text-decoration: none;
      text-align: center;
      padding: 20px 0;

      background: #000;
      border-radius: 5px;
      border: none;
      color: #FFF;
      font-weight: bold;
      transition: background-color 0.2s;

        &:hover {
          background: rgba(33, 36, 49, 0.8);
        }
      }
    }
  }

`