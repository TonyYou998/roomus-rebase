import React, { useState } from 'react'
import Listbill from './components/listbill';

export default function PaymentHistory() {

  return (
    <header className='header bg-white container container__header mt-16'> 
        <div className='bs_type_service_ctn' style={{marginTop: "40px"}}>
          <div className='listroom_ctn mb-4'>
              <h1 className="h4 text-uppercase font-weight-bold">Lịch sử đơn hàng</h1>
              <button className="btn book-now-btn mb-1" style={{fontWeight: "600"}}>Đã Chi: 135.000VNĐ</button>
          </div>
          <div className="row mt-2">
            <Listbill />
        </div>
        </div>
    </header>
  )
}
