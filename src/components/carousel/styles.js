import styled from 'styled-components';

export default styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 340px;
  border-radius: 10px;
  margin: 30px 15px;
  background: rgba(240, 238, 240, 0.5);

  img {
    max-height: 175px;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 5px;
  }

  hr {
    border: 1px thin black;
    width: 80%;
  }

  p {
    font-size: 1.2em;
    margin: 5px 0 10px 0;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 80%;

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

    button {
      display: flex;
      height: 60px;
      width: 50%;
      justify-content: center;
      text-decoration: none;
      align-items: center;
      text-align: center;
      background: #3788db;
      padding-right: 3px;

      border-radius: 5px;
      border: none;
      color: #FFF;
      font-weight: bold;
      transition: background-color 0.2s;

      &:hover {
        background: rgba(55, 136, 219, 0.8);
      }
    }
  }
`