import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux';
import { addcart } from '../redux/actions';
import {Link} from 'react-router-dom'
import Footer from './Footer';

export default function Product() {
  const {id} = useParams();
  const [product, setProduct] = useState([])
  const [loadind, setLoading] = useState(false)

  const dispatch = useDispatch()
  const addProduct = (product) => {
    dispatch(addcart(product))
  }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      setProduct(await response.json())
      setLoading(false)
    }
    getProduct()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const Loading = () => {
    return <>
      <div className="col-md-12">
        <p className='text-center'>Loading.....</p>
      </div>
    </>
  }

  const ShowProduct = () => {
    return <>
  <div className="col-md-6">
    <img src={product.image} alt={product.title} height='400px' width='400px'/>
  </div>
  <div className="col-md-6">
    <h4 className='text-uppercase text-black-50'>{product.category}</h4>
    <h1 className='display-5'>{product.title}</h1>
    <p className="lead fw-bolder">Rating: {product.rating && product.rating.rate} 
    <i className="fa fa-star ms-1 text-warning"></i></p>
    <h3 className="display-6 my-4 fw bold">$ {product.price}</h3>
    <p className="lead py-3">{product.description}</p>
    <button className="btn btn-outline-dark me-3" onClick={() => addProduct(product)}>Add to cart</button>
    <Link to = '/cart' className="btn btn-dark">Go to cart</Link>
  </div>
    </>
  }

  return (
    <div className='product'>
      <div className="container">
        <div className="row py-5">
          {loadind ? <Loading /> : <ShowProduct />}
        </div>
      </div>
      <Footer />
    </div>
  )
}
