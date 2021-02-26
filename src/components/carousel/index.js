import React, { useState, useEffect } from 'react'
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import Item from './styles';
import api from '../../services/api';
import StockFalse from '../buttons/StockFalse';
import {FiShoppingCart} from 'react-icons/fi';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 }
]

const Car = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(0);

  //Fetch products from API
  const handleProduct = async () => {
    try {
      const request = await api.get('/retrieve-product/products');
      const responseProduct = await request.data.products;
      return setProducts(responseProduct);
    } catch(err) {
      console.log("Deu ruim");
    }
  }
  useEffect(() => {
    handleProduct();
  }, []);

  const handleCart = () => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
    const cartLength = JSON.parse(sessionStorage.getItem('cart'));
    setCart(cartLength + 1);
    console.log(cartLength);
  }

  return (
    <>
      <div>
        <Carousel breakPoints={breakPoints}>
          {products.map(productList => (
            <Item key={productList.code}>
              <img src="https://images-na.ssl-images-amazon.com/images/I/61YVqHdFRxL._AC_SX679_.jpg" alt="Smartphone" />
              <h3>{productList.manufacturer}</h3>
              <hr />
              <p>{productList.price.formattedValue}</p>
              <div>
                <Link to={`/product/${productList.code}`}>Detail</Link>
                {productList.stock.stockLevel > 0 ? <button onClick={handleCart}>Add to Cart <span><FiShoppingCart /></span></button> : <StockFalse />}
              </div>
            </Item>
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default Car;
