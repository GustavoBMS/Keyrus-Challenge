import React, { useState, useEffect, useContext } from 'react'
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import Item from './styles';
import api from '../../services/api';
import StockFalse from '../buttons/StockFalse';
import {FiShoppingCart} from 'react-icons/fi';
import MyContext from '../../context';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 400, itemsToShow: 2 },
  { width: 800, itemsToShow: 3 }
]

const Car = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, setAddToCart } = useContext(MyContext);

  const handleAddToCart = () => {
    setAddToCart(addToCart + 1);
  }

  //Fetch products from API
  const handleProduct = async () => {
    try {
      const request = await api.get('/retrieve-product/products');
      const responseProduct = await request.data.products;
      return setProducts(responseProduct);
    } catch(err) {
      console.log(err);
    }
  }
  useEffect(() => {
    handleProduct();
  }, []);

  return (
    <>
      <div>
        <Carousel 
        enableAutoPlay={true} 
        transitionMs={1000} 
        autoPlaySpeed={3000} 
        breakPoints={breakPoints}
        >
          {products.map(productList => (
            <Item key={productList.code}>
              <img src="https://images-na.ssl-images-amazon.com/images/I/61YVqHdFRxL._AC_SX679_.jpg" alt="Smartphone" />
              <h3>{productList.name}</h3>
              <hr />
              <p>{productList.price.formattedValue}</p>
              <div>
                <Link to={`/product/${productList.code}`}>Detail</Link>
                {productList.stock.stockLevel > 0 ? <button onClick={handleAddToCart}>Add to Cart <span><FiShoppingCart /></span></button> : <StockFalse />}
              </div>
            </Item>
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default Car;
