import styled from 'styled-components';

export const StockFalseButton = styled.button`
  height: 60px;
  width: 50%;
  text-decoration: none;
  text-align: center;
  padding: 20px 0;
  background: #fc0303 !important;
  cursor: unset;

  border-radius: 5px;
  border: none;
  color: #FFF;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background: rgba(55, 136, 219, 0.8);
  }
`