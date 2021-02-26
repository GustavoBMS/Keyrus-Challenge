import React from 'react'
import Header from '../../components/header'

import { Container } from './styles';

const Error = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <h1>ERROR 404 - PAGE NOT FOUND </h1>
          <h3>An error have been ocurred</h3>
        </div>
      </Container>
    </>
  )
}

export default Error
