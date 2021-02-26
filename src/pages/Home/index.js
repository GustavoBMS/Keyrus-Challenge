import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

import Car from '../../components/carousel';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Container, Banner } from './styles';
import api from '../../services/api';

const Home = () => {
  const [lowPrice, setLowPrice] = useState([]);

  //Fetch product code from API
  const handleLowPrice = async () => {
    try {
      const request = await api.get(`/retrieve-product/products`);
      const responseProduct = await request.data.products.map(product => product.price.value);
      console.log(responseProduct);
      // return setLowPrice();
    } catch(err) {
      console.log("Deu ruim");
    }
  }
  useEffect(() => {
    handleLowPrice();
  }, []);

  return (
    <>
      <Header />
      <Container>
      <Banner>
        <img src={"https://images-na.ssl-images-amazon.com/images/I/61YVqHdFRxL._AC_SX679_.jpg"} alt={"Smartphone"} />
        <div>
          <h3>Product</h3>
          <div>
            <p>$ 59</p>
            <Link to={`/product/`}>Detail</Link>
          </div>
        </div>
      </Banner>
        <Car />
      </Container>
      <Footer />
    </>
  )
}

export default Home
