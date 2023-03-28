import React from 'react'
import { faUser, faPhone, faNoteSticky, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function RightPar1() {
    
  return (
    <div className='information__container'>
        <ul className='payment__right-information'>
            <li className='pm__right-heading'>
                <div className='pm__right-hd'>
                    <p>THÔNG TIN THANH TOÁN</p>
                </div>
            </li>
            <li className='pm__right-item'>
                <div className='pm__right-input'>
                    <FontAwesomeIcon icon={faUser} className="pm__right-icon" style={{marginRight: "14px"}}></FontAwesomeIcon>
                    <input type="text" className='txt-input' placeholder='Tên: Nguyễn Khoa Đăng'/>
                </div>
            </li>
            <li className='pm__right-item'>
                <div className='pm__right-input'>
                    <FontAwesomeIcon icon={faPhone} className="pm__right-icon"></FontAwesomeIcon>
                    <input type="phone" className='txt-input' placeholder='SDT: 0342321456'/>
                </div>
            </li>
            <li className='pm__right-item'>
                <div className='pm__right-input'>
                    <FontAwesomeIcon icon={faLocationDot} className="pm__right-icon" style={{marginRight: "11px"}}></FontAwesomeIcon>
                    <input type="text" className='txt-input' placeholder='KTX Đại học Quốc Gia, TP. Hồ Chí Minh'/>
                </div>
            </li>
            <li className='pm__right-item'>
                <div className='pm__right-input'>
                    <FontAwesomeIcon icon={faNoteSticky} className="pm__right-icon"></FontAwesomeIcon>
                    <textarea rows={13} cols={50} className='txt-input' placeholder='Ghi chú: ' style={{paddingBottom: "4px"}}/>
                </div>
            </li>
        </ul>
    </div>   
  )
}
