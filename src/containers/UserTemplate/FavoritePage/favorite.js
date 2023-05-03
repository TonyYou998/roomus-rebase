import React from 'react'
import FavoriteBanner from './components/FavoriteBanner'
import { Link } from 'react-router-dom'
import sanbanh from './Img/sanbong.jpg'
import Swal from 'sweetalert2';

export default function FavoritePage() {
    function DeleteFavorite(){
        Swal.fire({
            title: 'Đã bỏ thích',
            icon: 'success',
            width: '25rem',
            showConfirmButton: false,
            timer: 1200

        });
    }
  return (
    <div className='container container__service'>
       <FavoriteBanner />
       <h3 className="h4 text-uppercase font-weight-bold mt-4 mb-4">Danh sách yêu thích</h3>
       <div className="row">
            <div className='favorite_container row'>
                <div className='product_container-part1'>
                    <div className='product_image'>
                        <img className='productImg favoriteImg' src={sanbanh} />
                    </div>
                    <div className='product_discription'>
                        <h2>Sân banh Thủ Đức</h2>
                        <h1 className="product__money">200.000 VNĐ</h1>
                        <p><strong className="product__detail">Địa chỉ:</strong> KTX khu B, ĐHQG, Dĩ An, Bình Dương</p>
                        <p><strong className="product__detail">Số điện thoại:</strong> 0123456790</p>
                        <p><strong className="product__detail">Xếp hạng: &nbsp;</strong> <strong className="rate-star">4.7 <i className="bi bi-star-fill"></i></strong></p>
                    </div>
                </div>
                <div className='product_container-part2'>
                    <div className='part2_upper'>
                        <div className="product-distance">500m</div>
                        <div className="product-status">NEW</div>
                    </div>
                    <div className='part2_bottom'>
                        <Link className="nav-link" to={`/detail/:id`}>
                             <button className="part2-btn">Chi tiết</button>
                        </Link>
                        <button className="circle-button" onClick={DeleteFavorite}><i className="fas fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}
