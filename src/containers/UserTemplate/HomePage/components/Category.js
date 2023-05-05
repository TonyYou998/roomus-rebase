import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { setActiveShop } from '../../../../redux/reduxcshop/shopSlice';

export default function Category() {
    const dispatch = useDispatch();
  
    const handlerActive = (value) => {
      dispatch(setActiveShop(value));
    }
    
  return (
    <section className="pt-5 category-ctn ">
        <header className="text-center">
            <p className="small text-uppercase mb-1">Carefully created services</p>
            <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
        </header>
        <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
                <Link className="category-item" to={'/shop'} onClick={() => handlerActive('football-yard')}>
                    <img className="img-fluid" src="./static/cat-img-1.jpg" alt="cat1" />
                    <strong className="category-item-title">Football yards</strong>
                </Link>
            </div>
            <div className="col-md-4 mb-4 mb-md-0" >
                <Link className="category-item mb-4" to={'/shop'} onClick={() => handlerActive('meeting-rooms')}>
                    <img className="img-fluid" src="./static/cat-img-2.jpg" alt="cat2" />
                    <strong className="category-item-title">Meeting rooms</strong>
                </Link>
                <Link className="category-item" to={'/shop'} onClick={() => handlerActive('dancing-rooms')}>
                    <img className="img-fluid" src="./static/cat-img-3.jpg" alt="cat3" />
                    <strong className="category-item-title">Dancing rooms</strong>
                </Link>
            </div>
            <div className="col-md-4">
                <Link className="category-item" to={'/shop'} onClick={() => handlerActive('studios')}>
                    <img className="img-fluid" src="./static/cat-img-4.jpg" alt="cat4" />
                    <strong className="category-item-title">Studio</strong>
                </Link>
            </div>
        </div>
    </section>
  )
}
