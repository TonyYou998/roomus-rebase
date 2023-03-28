import React, { useEffect, useState } from 'react';
import sanbanh from './Img/sanbong.jpg'
import RightPar1 from './components/RightPart1';
import RightPar2 from './components/RightPart2';

function PaymentPage() {
    const [isCast, setIsCast] = useState(true);

    function CastPayment(){
        setIsCast(true);
    }

    function OnlinePayment(){
        setIsCast(false);
    }

    return (
        <div className='payment__detail'>
            <div className='payment__left'>
                {isCast ? 
                <div className='payment__tabs'>
                    <button className='payment__tabs-1 btn-active' onClick={CastPayment}>TIỀN MẶT</button>
                    <button className='payment__tabs-2' onClick={OnlinePayment}>VÍ ĐIỆN TỬ</button>
                </div> :
                <div className='payment__tabs'>
                    <button className='payment__tabs-1' onClick={CastPayment}>TIỀN MẶT</button>
                    <button className='payment__tabs-2 btn-active' onClick={OnlinePayment}>VÍ ĐIỆN TỬ</button>
                </div>
                }
                
                <div className="payment__card">
                <h2 className="payment__heading">Thanh Toán</h2>
                <div className="payment">
                    <div className="payment__photo">
                        <img className='pmImg' src={sanbanh} />
                    </div>
                    <div className="payment__description">
                        <h2>Sân banh Thủ Đức</h2>
                        <p><strong className="payment__title">Thông tin chi tiết:</strong></p>
                        <p><strong className="payment__title">Địa chỉ:</strong> KTX khu A, làng ĐHQG TPHCM</p>
                        <p><strong className="payment__title">Số điện thoại:</strong> 0123456790</p>
                        <p><strong className="payment__title">Thời gian:</strong> 14h00 - 29/02/2023</p>
                        <h1 className="payment__money">200.000 VNĐ</h1>
                    </div>
                </div>
                <div className="line_border"></div>
                <div className='payment__note'>
                    <p><strong className="payment__note-item">Ghi chú:</strong></p>
                    <p><strong className="payment__title">Sân sẽ bị hủy nếu như khách hàng trễ lịch đặt quá 15 phút</strong></p>
                </div>
                <div className='payment__btns'>
                    {isCast && <button className="payment__book-btn">Thanh toán</button>}
                    <button className="payment__favorite-btn">Chỉnh sửa</button>
                </div>
                </div>
            </div>
            <div className='payment__right'>
               {isCast ? <RightPar1 /> : <RightPar2 />}      
            </div>
        </div>
        
    );
}

export default PaymentPage;

