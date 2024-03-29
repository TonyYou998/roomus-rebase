import React, { useState } from 'react'
import mommo from '../Img/momo.png';
import paypal from '../Img/paypal.png';
import visa from '../Img/visa.png';
import mastercard from '../Img/mastercard.png'
import ModalOnline from '../Modal/modalonline';

export default function RightPar2() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const modalContents = {
    'type1': 'Ví Momo',
    'type2': 'Paypal',
    'type3': 'Thẻ tín dụng',
    'type4': 'Mastercard',
  };

  const handleButtonClick = (type) => {
    setIsOpen(true);
    setModalType(type);
  }

  return (
    <div className='information__container'>
                    <ul className='payment__right-information'>
                        <li className='pm__right-heading'>
                            <div className='pm__right-hd'>
                                <p>HÌNH THỨC THANH TOÁN</p>
                            </div>
                        </li>
                        <li className='pm__right-item'>
                            <button className='pm__right-choose' style={{backgroundColor: "#AD006C"}} onClick={() => handleButtonClick("type1")}>
                                <div className='pm__right-left'>
                                    <img src={mommo} className='pm__right-img'/>
                                </div>
                                <div className='pm__right-right'>
                                    <p>Thanh toán qua Momo E-Wallet</p>
                                </div>
                            </button>
                        </li>
                        <li className='pm__right-item'>
                            <button className='pm__right-choose' style={{backgroundColor: "#C9CCD1"}} onClick={() => handleButtonClick("type2")}>
                                <div className='pm__right-left'>
                                    <img src={paypal} className='pm__right-img'/>
                                </div>
                                <div className='pm__right-right'>
                                    <p>Thanh toán bằng PayPal</p>
                                </div>
                            </button>
                        </li>
                        <li className='pm__right-item'>
                            <button className='pm__right-choose' style={{backgroundColor: "#CED9ED"}} onClick={() => handleButtonClick("type3")}>
                                <div className='pm__right-left'>
                                    <img src={visa} className='pm__right-img'/>
                                </div>
                                <div className='pm__right-right'>
                                    <p>Thanh toán bằng thẻ tín dụng</p>
                                </div>
                            </button>
                        </li>
                        <li className='pm__right-item'>
                            <button className='pm__right-choose' style={{backgroundColor: "#A07D3B"}} onClick={() => handleButtonClick("type4")}>
                                <div className='pm__right-left'>
                                    <img src={mastercard} className='pm__right-img'/>
                                </div>
                                <div className='pm__right-right'>
                                    <p>Thanh toán bằng thẻ ghi nợ</p>
                                </div>
                            </button>
                        </li>
                    </ul>
                    {isOpen && <ModalOnline onClose={() => setIsOpen(false)} setIsOpen={setIsOpen} keyType={modalContents[modalType]}/>}
                </div>       
  )
}
