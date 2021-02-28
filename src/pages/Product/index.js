import React, { useState, useEffect, useContext } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header';
import { Container, ProductDetail, Description } from './styles';
import api from '../../services/api';
import { FiShoppingCart } from 'react-icons/fi';
import StockFalse from '../../components/buttons/StockFalse';
import ReactHtmlParser from 'react-html-parser';
import MyContext from '../../context';

const Product = () => {
  const [productCode, setProductCode] = useState([]);
  const [productValue, setProductValue] = useState([]);
  const [productStock, setProductStock] = useState([]);
  const { addToCart, setAddToCart } = useContext(MyContext);

  const handleAddToCart = () => {
    setAddToCart(addToCart + 1);
  }

  //Fetch product code from API
  const handleProductCode = async () => {
    try {
      const url = window.location.href;
      const newUrl = url.slice(30);
      const request = await api.get(`/retrieve-product/${newUrl}`);
      const responseProduct = await request.data;
      return setProductCode(responseProduct);
    } catch(err) {
      console.log("Deu ruim");
    }
  }
  useEffect(() => {
    handleProductCode();
  }, []);

    //Fetch product value from API
    const handleProductValue = async () => {
      try {
        const url = window.location.href;
        const newUrl = url.slice(30);
        const request = await api.get(`/retrieve-product/${newUrl}`);
        const responseProduct = await request.data.price.formattedValue;
        return setProductValue(responseProduct);
      } catch(err) {
        console.log("Deu ruim");
      }
    }
    useEffect(() => {
      handleProductValue();
    }, []);

    //Fetch product stock from API
    const handleStockValue = async () => {
      try {
        const url = window.location.href;
        const newUrl = url.slice(30);
        const request = await api.get(`/retrieve-product/${newUrl}`);
        const responseProduct = await request.data.stock.stockLevel;
        return setProductStock(responseProduct);
      } catch(err) {
        console.log("Deu ruim");
      }
    }
    useEffect(() => {
      handleStockValue();
    }, []);

  return (
    <>
    <Header />
    <Container>
      <ProductDetail>
        <img src="https://images-na.ssl-images-amazon.com/images/I/61YVqHdFRxL._AC_SX679_.jpg" alt="Smartphone" />
        <div>
          <h3>{productCode.name}</h3>
          <div>
            <p>{productValue}</p>
            {productStock > 0 ? <button onClick={handleAddToCart}>Add to Cart <span><FiShoppingCart /></span></button> : <StockFalse />}
          </div>
        </div>
      </ProductDetail>
      <Description>
          <hr />
          <h2>SUMMARY</h2>
          <div>{productCode.summary}</div>
          <h2>DESCRIPTION</h2>
          <div>{ReactHtmlParser(productCode.description)}</div>
        </Description>
    </Container>
    <Footer />
    </>
  )
}

export default Product
