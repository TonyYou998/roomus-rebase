import React, { useRef, useState, useEffect} from 'react'
import { faUser, faPhone, faNoteSticky, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

var cntChanged = 0;

export default function RightPar1({isSubmit}) {
    const history = useHistory();
    const [Name, setName] = useState('');
    const [Phone, setPhone] = useState('');
    const [checkNameValid, setCheckNameValid] = useState(false);
    const [checkPhoneValid, setCheckPhoneValid] = useState(false);
    const NameInput = useRef();
    const PhoneInput = useRef();
    
    useEffect(() => {
        cntChanged++;

        if(cntChanged > 1)
        {
            SubmitForm();
        }
      }, [isSubmit]);

    //Kiểm tra điều kiện:
    function PhoneNumberValid(number) {
        return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
    }

    function SubmitForm()
    {
        if (Name === '' || Phone === '') {
            Swal.fire({
              title: 'Vui lòng điền đủ thông tin',
              icon: 'error',
              confirmButtonText: 'Đóng',
              width: '25rem',
          });
            return;
        }

        if (Name.length < 3) {
            setCheckNameValid(true);
            setName('');
            NameInput.current.focus();
            return;
            } else {
            setCheckNameValid(false);
        }

        if (!PhoneNumberValid(Phone)) {
            setCheckPhoneValid(true);
            setPhone('');
            PhoneInput.current.focus();
            return;
          } else {
            setCheckPhoneValid(false);
          }

        cntChanged = 0;
        Swal.fire({
            title: 'Thanh toán thành công',
            icon: 'success',
            confirmButtonText: 'Hoàn tất',
            width: '25rem',
        });
          history.push('/detail/:id');
    }

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
                    <input type="text" 
                    className='txt-input' 
                    placeholder='Tên: Nguyễn Khoa Đăng'
                    ref={NameInput}
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </li>
            <li className='pm__right-item'>
                <div className='pm__right-input'>
                    <FontAwesomeIcon icon={faPhone} className="pm__right-icon"></FontAwesomeIcon>
                    <input type="phone"
                    className='txt-input' 
                    placeholder='SĐT: 0342321456'
                    ref={PhoneInput}
                    value={Phone}
                    onChange={(e) => setPhone(e.target.value)}
                    />
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
