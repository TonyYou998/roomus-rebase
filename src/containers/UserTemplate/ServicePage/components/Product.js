import React from 'react';
import { Link } from 'react-router-dom';
import sanbanh from '../Img/sanbong.jpg'

function Products(props) {
    return (
        <div className="row">
        {
            props.products.map((item, idx) => (
                <div className='product_container row' key={idx}>
                <div className='product_container-part1'>
                    <div className='product_image'>
                        <img className='productImg' src={sanbanh} />
                    </div>
                    <div className='product_discription'>
                        <h2>{item.serviceName}</h2>
                        <h1 className="product__money">200.000 VNĐ</h1>
                        <p><strong className="product__detail">Địa chỉ:</strong> {item.address}</p>
                        <p><strong className="product__detail">Số điện thoại:</strong> 0123456790</p>
                        <p><strong className="product__detail">Xếp hạng: &nbsp;</strong> <strong className="rate-star">{item.rating} <i className="bi bi-star-fill"></i></strong></p>
                    </div>
                </div>
                <div className='product_container-part2'>
                    <div className='part2_upper'>
                        <div className="product-distance">500m</div>
                        <div className="product-status">NEW</div>
                    </div>
                    <div className='part2_bottom'>
                        <Link className="nav-link" to={`/detail/${item.id}`}>
                             <button className="part2-btn">Chi tiết</button>
                        </Link>
                    </div>
                </div>
            </div>
            ))
        }
            
        </div>
    );
}

export default Products;