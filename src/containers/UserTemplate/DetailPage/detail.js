import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal/modalbook';
import sanbanh from './Img/sanbong.jpg'
import sanbanh1 from './Img/sanbong2.jpg'
import sanbanh2 from './Img/sanbong3.jpg'
import Swal from 'sweetalert2';
import MapModal from './Modal/alertwithmap';
import { faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';


const Thumbnail = ({ arr, image, index }) => {
    return (
        <div className='thumbnail'>
            {arr.map((imgscr, i) => (
                <img
                    key={i}
                    height="50"
                    src={imgscr}
                    onClick={() => image(i)}
                    className={index === i ? 'active' : ''}
                />
            ))}
        </div>
    )
}

const Slideshow = ({ imgs }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(0)
    }, [])

    const next = () => {
        if (index === imgs.length - 1) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    const prev = () => {
        if (index === 0) {
            setIndex(imgs.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    return <div className='slideshow'>
        <img className='mainImg' src={imgs[index]} />
        <div className='actions'>
            <button onClick={prev}> <FontAwesomeIcon icon={faCaretLeft} size="2x" /> </button>
            <button onClick={next}> <FontAwesomeIcon icon={faCaretRight} size="2x" /> </button>
        </div>
        <Thumbnail arr={imgs} image={setIndex} index={index} />
    </div>
}

function DetailPage(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [viewMap, setViewMap] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const storedModal = localStorage.getItem('modal');
        if(storedModal) setIsOpen(storedModal);
    }, []);

    function AddToFavorite(){
        setIsFavorite(!isFavorite);
        if(isFavorite == false)
        {
            Swal.fire({
                title: 'Đã thêm vào yêu thích',
                icon: 'success',
                width: '25rem',
                showConfirmButton: false,
                timer: 1200
    
            });
        }
        else{
            Swal.fire({
                title: 'Đã bỏ thích',
                icon: 'success',
                width: '25rem',
                showConfirmButton: false,
                timer: 1200
    
            });
        }
        
    }

    return (
        <div className="card">
            <div className="detail">
                <div className="detail__photo">
                    <Slideshow
                        imgs={[
                            sanbanh,
                            sanbanh1,
                            sanbanh2,
                        ]}
                    />
                </div>
                <div className="detail__description">
                    <h2>Sân banh Thủ Đức</h2>
                    <h1 className="detail__money">200.000 VNĐ</h1>
                    <p><strong className="detail__title">Thông tin chi tiết:</strong></p>
                    <p><strong className="detail__title">Địa chỉ:</strong> KTX khu B, ĐHQG, Dĩ An, Bình Dương</p>
                    <p><strong className="detail__title">Số điện thoại:</strong> 0123456790</p>
                    <p><strong className="detail__title">Xếp hạng: &nbsp;</strong> <strong className="rate-star">4.7 <i className="bi bi-star-fill"></i></strong></p>
                    <p><strong className="detail__title">Mô tả: </strong></p>
                    <ul className="list__contact">
                        <li className="list__contact-item">Sân thoáng mát sạch sẽ</li>
                        <li className="list__contact-item">Có nhà vệ sinh</li>
                        <li className="list__contact-item">Cho thuê đồ, có wifi</li>
                    </ul>
                    <button className='btn__map' onClick={() => setViewMap(true)}>
                        <div className="detail__view-map">Xem trên bản đồ &nbsp;<i className="bi bi-geo-alt-fill"></i></div>
                    </button>
                    <p className="detail__yard-numb"><strong>Còn 2 sân ở chỗ chúng tôi</strong></p>
                    <button className="detail__book-btn" onClick={() => setIsOpen(true)}>Đặt ngay</button>
                    {!isFavorite ?
                     <button className="detail__favorite-btn" onClick={AddToFavorite}>Yêu thích</button>
                     :
                     <button className="detail__favorite-btn" onClick={AddToFavorite}>Bỏ thích</button>
                     }
                </div>
                <div className="detail__note">
                    <div className="detail__note-distance">500m</div>
                    <div className="detail__note-status">NEW</div>
                </div>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
            <MapModal show={viewMap} onHide={() => setViewMap(false)} address={'Quan 1, Thanh pho Ho Chi Minh, Viet Nam'}/>
        </div>
    );
}

export default DetailPage;

