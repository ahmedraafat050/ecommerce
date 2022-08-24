import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import {Link} from 'react-router-dom'

export default function Products() {

  const [data, setData] = useState([])
  const [filtter, setFiltter] = useState(data)
  const [loading, setLoading] = useState(false)

  let componentMounted = true;

  useEffect(() => {
    
    const getProdacts = async () => {
      setLoading(true)
      const response = await fetch("https://fakestoreapi.com/products")
      if (componentMounted) {
        setData(await response.clone().json())
        setFiltter(await response.json())
        setLoading(false)
        console.log(filtter)
      }
      
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      componentMounted = false;
    };
    }
    getProdacts()
  }, [])
  function Loading() {
    return (
      <>
      <div className='col-md-3'>
        <Skeleton height={350}/>
      </div>
      <div className='col-md-3'>
        <Skeleton height={350}/>
      </div>
      <div className='col-md-3'>
        <Skeleton height={350}/>
      </div>
      <div className='col-md-3'>
        <Skeleton height={350}/>
      </div>
      </>
      
    )
  }

const filtterProduct = (cat) => {
  const updatedList = data.filter(x => x.category === cat);
  setFiltter(updatedList);
}

  function ShowProduct() {
    return (
      <>
        <div className='buttons d-flex justify-content-center mb-5 pb-5'>
          <button className="btn btn-outline-dark me-2" onClick={() => setFiltter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filtterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filtterProduct("women's clothing")}>Women's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filtterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark" onClick={() => filtterProduct("electronics")}>Electronic</button>
        </div>
        {filtter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center" key={product.id}>
                  <img src={product.image} classNameName="card-img-top" alt={product.title} height="250px"/>
                  <div className="card-body">
                    <h5 className="card-title mb-5">{product.title.substring(0,12)}...</h5>
                    <p className="card-text lead fw-bold">$ {product.price}</p>
                    <Link to = {`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</Link>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </>
    )
  }


  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 fw-bolder text-center'>Lasted Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {
            loading ? <Loading /> : <ShowProduct />
          }
        </div>
      </div>
    </div>
  )
}
