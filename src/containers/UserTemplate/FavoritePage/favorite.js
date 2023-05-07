import React, { useEffect, useState } from 'react'
import FavoriteBanner from './components/FavoriteBanner'
import { Link } from 'react-router-dom'
import sanbanh from './Img/sanbong.jpg'
import Swal from 'sweetalert2';
import { mainApi } from '../../../API/api';

export default function FavoritePage() {
    const [favoriteArray, setResult] = useState([]);
    const tokenAuth = 'Bearer ' + JSON.stringify(localStorage.getItem('token')).split('"').join('');
    const headers = {
        Authorization: tokenAuth,
    };

    const handleDeleteFvr = (id) => {
        DeleteFavorite(id);
      };

    useEffect(() => {
        mainApi.get(`/favorite/list`, { headers: headers })
        .then((result) => {
            const newFavoriteArray = [];
            for (var i = 0; i < result.data.favorites.length; i++) {
                var serviceId = result.data.favorites[i].serviceId;
                mainApi.get(`service/get-detail-service-by-id/${serviceId}`)
                .then((result) => {
                    console.log(result.data);
                    newFavoriteArray.push(result.data);
                    setResult(newFavoriteArray);
                })
                .catch((err) => {
                    console.log(err);
                });
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
   


    function DeleteFavorite(idservice){
        mainApi.delete(`/favorite/${idservice}`, { headers: headers })
        .then((result)=>{
            console.log(result.data);

            Swal.fire({
                title: 'Đã bỏ thích',
                icon: 'success',
                width: '25rem',
                confirmButtonText: 'Hoàn tất',
            }).then((result) => {
                if (result.isConfirmed) {
                  Swal.close();
                  window.location.reload();
                }
              });
        })
        .catch((err)=>{
            console.log(err);
        }) 

        
    }
  return (
    <div className='container container__service' style={{marginBottom: "140px"}}>
       <FavoriteBanner />
       <h3 className="h4 text-uppercase font-weight-bold mt-4 mb-4">Danh sách yêu thích</h3>
       <div className="row">

       {
        favoriteArray.map((item, idx) => (
            <div className='favorite_container row' key={idx}>
                <div className='product_container-part1'>
                    <div className='product_image'>
                        <img className='productImg favoriteImg' src={sanbanh} />
                    </div>
                    <div className='product_discription'>
                        <h2>{item.serviceName}</h2>
                        <h1 className="product__money">{item.price}</h1>
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
                        <button className="circle-button" onClick={() => handleDeleteFvr(item.id)}><i className="fas fa-heart"></i></button>
                    </div>
                </div>
            </div>
        ))
       }
        </div>
    </div>
    
  )
}
