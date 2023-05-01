import React, { useRef, useState } from 'react'
import moment from 'moment/moment';
import Swal from 'sweetalert2';

function PhoneNumberValid(number) {
  return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
}

function AlertError(context){
  Swal.fire({
    title: context,
    icon: 'error',
    confirmButtonText: 'Đóng',
    width: '25rem',
  });
}

export default function ProfilePage() {
  const [Name, setName] = useState('');
  const [Nickname, setNickName] = useState(Name);
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [Gender, setGender] = useState('');
  const [Address, setAddress] = useState('');
  const [Birthday, setBirthday] = useState(moment().format('YYYY-DD-MM'));
  const [checkNameValid, setCheckNameValid] = useState(false);
  const [checkPhoneValid, setCheckPhoneValid] = useState(false);
  const [checkAddressValid, setCheckAddressValid] = useState(false);
  const [imgURL, setimgURL] = useState('https://media.vov.vn/sites/default/files/styles/large/public/2021-05/juneissue-korea-elle-rose-blackpink.jpeg');
  const [selectedImage, setSelectedImage] = useState(null);
  const NameInput = useRef();
  const PhoneInput = useRef();
  const EmailInput = useRef();
  const AddressInput = useRef();

  function handleSubmit1(e) {
      e.preventDefault();

      if (Name === '' || Phone === '' ||Address === '') 
      {
          AlertError('Vui lòng điền đủ thông tin');
          e.preventDefault();
          return;
      }

      if (Name.length < 3) {
          setCheckNameValid(true);
          setName('');
          NameInput.current.focus();
          AlertError('Tên quá ngắn');
          e.preventDefault();
          return;
      } else {
          setCheckNameValid(false);
      }

      if (!PhoneNumberValid(Phone)) {
          setCheckPhoneValid(true);
          setPhone('');
          PhoneInput.current.focus();
          AlertError('SĐT không hợp lệ');
          e.preventDefault();
          return;
      } else {
          setCheckPhoneValid(false);
      }

      if (Address.length < 2) {
          setCheckAddressValid(true);
          setAddress('');
          AddressInput.current.focus();
          AlertError('Địa chỉ không hợp lệ');
          e.preventDefault();
          return;
      } else {
          setCheckAddressValid(false);
      }

      Swal.fire({
        title: 'Cập nhật thành công',
        icon: 'success',
        confirmButtonText: 'Hoàn tất',
        width: '25rem',
    });
  }

  return (
    <div className='contain__main'>
      <div className='content'>
          <div className='background__contain'>
              <img src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80" alt="Background Image" className="content__background" />
          </div>
          <div className='content__information'>
              <form className='content__form'>
                  <div className='content__form-text'>
                      <div className='content__form-start'>
                          <label htmlFor="ipname"></label>
                          <p>Họ và tên</p>
                          <p style={{ color: 'red' }}>*</p>
                      </div>
                      <input
                          id="ipname"
                          className='content__form-input'
                          placeholder="Nhập họ và tên"
                          ref={NameInput}
                          value={Name}
                          onChange={(e) => setName(e.target.value)}
                      ></input>
                  </div>
                  <div className='content__form-text'>
                      <div className='content__form-start'>
                          <label htmlFor="iddate"></label>
                          <p>Ngày sinh</p>
                      </div>
                      <input
                          id="iddate"
                          type="date"
                          className='content__form-input'
                          placeholder="Nhập ngày sinh"
                          value={Birthday}
                          format="YYYY-MM-DD"
                          onChange={(e) => (setBirthday(moment(e.target.value).format('YYYY-MM-DD')))}
                      ></input>
                  </div>
                  <div className='content__form-text'>
                      <div className='content__form-start'>
                          <label htmlFor="idphone"></label>
                          <p>Số điện thoại</p>
                          <p style={{ color: 'red' }}>*</p>
                      </div>
                      <input
                          id="idphone"
                          className='content__form-input'
                          placeholder="Nhập số điện thoại"
                          ref={PhoneInput}
                          value={Phone}
                          onChange={(e) => setPhone(e.target.value)}
                      ></input>
                  </div>
                  <div className='content__form-text'>
                      <div className='content__form-start'>
                          <label htmlFor="idemail"></label>
                          <p>Email</p>
                      </div>
                      <input
                          id="idemail"
                          type="email"
                          className='content__form-input'
                          placeholder="Nhập email"
                          ref={EmailInput}
                          value={Email}
                          readOnly
                          onChange={(e) => setEmail(e.target.value)}
                      ></input>
                  </div>
                  <div className='content__form-text'>
                      <div className='content__form-start'>
                          <label htmlFor="idgender"></label>
                          <p>Giới tính</p>
                          <p style={{ color: 'red' }}>*</p>
                      </div>
                      <select 
                          id="idgender"
                          className='content__form-input'
                          placeholder="Nam/Nữ"value={Gender} 
                          onChange={(e) => setGender(e.target.value)}>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                      </select>
                  </div>
                  <div className='content__form-text'>
                      <div className='content__form-start'>
                          <label htmlFor="idaddress"></label>
                          <p>Địa chỉ mặc định</p>
                          <p style={{ color: 'red' }}>*</p>
                      </div>
                      <input
                          id="idaddress"
                          className='content__form-input'
                          placeholder="Nhập địa chỉ"
                          ref={AddressInput}
                          value={Address}
                          onChange={(e) => setAddress(e.target.value)}
                      ></input>
                  </div>
                  <button onClick={handleSubmit1} type="submit" className='save__btn'>
                      LƯU THAY ĐỔI
                  </button>
              </form>
          </div>

          <div className='content__avt'>
              <div>
                  <img
                      src={selectedImage !== null ? URL.createObjectURL(selectedImage) : imgURL}
                      alt="Ảnh nền"
                      className='background'
                  ></img>
              </div>
          </div>

          <span className='nickname'>Rosé</span>

          <div className='choose__avt'>
              <svg width="20" height="18" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M18.05 17H0.95C0.425125 17 0 16.5774 0 16.0556V2.83333C0 2.31153 0.425125 1.88889 0.95 1.88889H4.75V0.944444C4.75 0.422639 5.17513 0 5.7 0H13.3C13.8249 0 14.25 0.422639 14.25 0.944444V1.88889H18.05C18.5749 1.88889 19 2.31153 19 2.83333V16.0556C19 16.5774 18.5749 17 18.05 17ZM1.9 15.1111H17.1V3.77778H13.3C12.7751 3.77778 12.35 3.35514 12.35 2.83333V1.88889H6.65V2.83333C6.65 3.35514 6.22487 3.77778 5.7 3.77778H1.9V15.1111Z"
                      fill="#969695"
                  ></path>
                  <path
                      d="M9.5 14.1666C6.88038 14.1666 4.75 12.0487 4.75 9.44439C4.75 6.84008 6.88038 4.72217 9.5 4.72217C12.1196 4.72217 14.25 6.84008 14.25 9.44439C14.25 12.0487 12.1196 14.1666 9.5 14.1666ZM9.5 6.61106C7.92775 6.61106 6.65 7.88133 6.65 9.44439C6.65 11.0074 7.92775 12.2777 9.5 12.2777C11.0722 12.2777 12.35 11.0074 12.35 9.44439C12.35 7.88133 11.0722 6.61106 9.5 6.61106Z"
                      fill="#969695"
                  ></path>
              </svg>

              <input
                  name="myImage"
                  onChange={(event) => {
                      setSelectedImage(event.target.files[0]);
                  }}
                  id="upload-button"
                  type="file"
                  className='avt__change'
                  accept="image/*"
              />

              <label onClick={() => setSelectedImage(null)} htmlFor="upload-button"></label>
          </div>
      </div>
    </div>
  );
}
