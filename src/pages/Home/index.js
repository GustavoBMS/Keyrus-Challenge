import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Car from '../../components/carousel';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Container, Banner } from './styles';
import api from '../../services/api';

const Home = () => {
  const [lowPrice, setLowPrice] = useState([]);
  const [productNameByLowPrice, setProductNameByLowPrice] = useState([]);
  const [productCode, setProductCode] = useState([]);

  //Fetch lowest price from API
  const handleLowPrice = async () => {
    try {
      const request = await api.get(`/retrieve-product/products`);
      const responseLowPrice = await request.data.products.map(product => product.price.value);
      const lowPrice = Math.min(...responseLowPrice);
      return setLowPrice(lowPrice);
    } catch(err) {
      console.log(err);
    }
  }
  useEffect(() => {
    handleLowPrice();
  }, []);

  //Fetch product name by low price from API
  const handleProductNameByLowPrice = async () => {
    try {
      const request = await api.get(`/retrieve-product/products`);

      //get the lowest price product
      const responseLowestPriceProduct = await request.data.products.map(product => product.price.value);
      const lowPrice = Math.min(...responseLowestPriceProduct);

      //get index of lowest price product
      const getIndexProduct = i => i === lowPrice;
      const setIndexProduct = responseLowestPriceProduct.findIndex(getIndexProduct);

      //get product name by lowest price index
      const responseProduct = request.data.products[setIndexProduct].name;

      return setProductNameByLowPrice(responseProduct);
    } catch(err) {
      console.log(err);
    }
  }
  useEffect(() => {
    handleProductNameByLowPrice();
  }, []);

  //Fetch product code from API
  const handleProduct = async () => {
    try {
      const request = await api.get(`/retrieve-product/products`);

      //get the lowest price product
      const responseLowestPriceProduct = await request.data.products.map(product => product.price.value);
      const lowPrice = Math.min(...responseLowestPriceProduct);

      //get index of lowest price product
      const getIndexProduct = i => i === lowPrice;
      const setIndexProduct = responseLowestPriceProduct.findIndex(getIndexProduct);

      //get product name by lowest price index
      const responseProduct = request.data.products[setIndexProduct].code;

      return setProductCode(responseProduct);
    } catch(err) {
      console.log(err);
    }
  }
  useEffect(() => {
    handleProduct();
  }, []);

  return (
    <>
      <Header />
      <Container>
      <Banner>
        <img src={"https://images-na.ssl-images-amazon.com/images/I/61YVqHdFRxL._AC_SX679_.jpg"} alt={"Smartphone"} />
        <div>
          <h3>{productNameByLowPrice}</h3>
          <div>
            <p>{lowPrice}</p>
            <Link to={`/product/${productCode}`}>Detail</Link>
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
