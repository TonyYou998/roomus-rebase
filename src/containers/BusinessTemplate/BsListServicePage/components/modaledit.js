import React, { useState, useRef } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import { mainApi } from "../../../../API/api";

var indexStatus = 1;

const ModalEdit = ({setIsOpen, room}) => {
  const {idlist} = useParams();
  const [Name, setName] = useState(room.roomNumber);
  const [Type, setType] = useState(room.roomType);
  const [Price, setPrice] = useState(room.roomPrice);
  const [Des, setDes] = useState(room.roomDescrip);
  const [checkNameValid, setCheckNameValid] = useState(false);
  const [checkTypeValid, setCheckTypeValid] = useState(false);
  const [checkPriceValid, setCheckPriceValid] = useState(false);
  const [checkDesValid, setCheckDesValid] = useState(false);
  const NameInput = useRef();
  const TypeInput = useRef();
  const PriceInput = useRef();
  const DescripInput = useRef();
  const tokenAuth = 'Bearer ' + JSON.stringify(localStorage.getItem('token')).split('"').join('');
  const headers = {
      Authorization: tokenAuth,
  };

  const [statusRooms, setStatusRooms] = useState([
    { id: 1, name: "Đang hoạt động" },
    { id: 2, name: "Đang trống" },
    { id: 3, name: "Đang chờ xác nhận" },
  ]);

  if(room.roomStatus === "Đang hoạt động")
  {
    indexStatus = 1;
  }
  else if(room.roomStatus === "Đang trống")
  {
    indexStatus = 2;
  }
  else if(room.roomStatus === "Đang chờ xác nhận")
  {
    indexStatus = 3;
  }

  const [selectedStatusMethod, setSelectedStatusMethod] = useState(indexStatus);

  const handleStatusMethodChange = (e) => {
    setSelectedStatusMethod(parseInt(e.target.value));
  };

  function EditRoom(e){
    e.preventDefault();

    if (Name === '' || Type === '' || Des === '') {
        Swal.fire({
          title: 'Vui lòng điền đủ thông tin',
          icon: 'error',
          confirmButtonText: 'Đóng',
          width: '25rem',
      });
        e.preventDefault();
        return;
    }
    
    if (Name.length < 3) {
        setCheckNameValid(true);
        setName('');
        NameInput.current.focus();
        e.preventDefault();
        return;
        } else {
        setCheckNameValid(false);
        }

    if (Type.length < 2) {
        setCheckTypeValid(true);
        setType('');
        TypeInput.current.focus();
        e.preventDefault();
        return;
        } else {
        setCheckTypeValid(false);
        }

    if(Price <= 1000)
    {
        setCheckPriceValid(true);
        setPrice('');
        PriceInput.current.focus();
        e.preventDefault();
        return;
    } else{
        setCheckPriceValid(false);
    }

    if(Des.length < 4){
      setCheckDesValid(true);
      setDes('');
      DescripInput.current.focus();
      e.preventDefault();
      return;
   } else{
      setCheckDesValid(false);
   }

   if (!checkNameValid && !checkTypeValid && !checkPriceValid && !checkDesValid) {
      const obj = 
      {
      serviceId: idlist,
      images: "hh",
      price: Price,
      description: Des,
      itemType: 1,  
      serviceItemName: Name
      }

      console.log(obj);
      console.log(headers);

      Swal.fire({
        title: 'Cập nhật thành công',
        icon: 'success',
        confirmButtonText: 'Hoàn tất',
        width: '25rem',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.close();
          // window.location.reload();
        }
      });

      // mainApi.patch(`/service/update-service-item/${room.roomID}`, obj, { headers: headers })
      // .then((result)=>{
      //     console.log(result.data);
      //     Swal.fire({
      //       title: 'Cập nhật thành công',
      //       icon: 'success',
      //       confirmButtonText: 'Hoàn tất',
      //       width: '25rem',
      //     }).then((result) => {
      //       if (result.isConfirmed) {
      //         Swal.close();
      //         window.location.reload();
      //       }
      //     });

      //   setIsOpen(false);

      // })
      // .catch((err)=>{
      //     console.log(err);
      // })
      }
    }

   

  return (
    <div className='modalol__container'>
      <div className='darkBG__ol' onClick={() => setIsOpen(false)} />
      <div className='centered__ol'>
        <form className='modal__ol'>
          <div className='modalHeader__ol'>
            <h5 className='heading__ol'>{Name}</h5>
          </div>
          <button className='closeBtn__ol' onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-6px", marginRight: "7px" }} />
          </button>
          <h3 className="findYard__ol">Thông tin phòng:</h3>
          <div className="pm__infor">
            <div className="name__ctn">
                <h3>Tên phòng:</h3>
                <input className="infor_input" type="text" placeholder="Phòng 101" ref={NameInput} value={Name} onChange={(e) => setName(e.target.value)}/>
                {checkNameValid ? (
                      <div className='error__password'>
                          <i className="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                          Tên không được quá ngắn
                      </div>
                    ) : (
                        ''
                    )}
            </div>
            <div className="name__ctn">
                <h3>Trạng thái</h3>
                <select
                    className="infor_input infor_input_select"
                    value={selectedStatusMethod}
                    onChange={handleStatusMethodChange}
                    >
                    {statusRooms.map((method) => (
                        <option key={method.id} value={method.id}>
                        {method.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="name__ctn">
                <h3>Loại phòng</h3>
                <input className="infor_input" type="text" placeholder="Phòng Vip" ref={TypeInput} value={Type} onChange={(e) => setType(e.target.value)}/>
                <span>
                    {checkTypeValid ? (
                      <div className='error__password'>
                          <i className="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                          Loại phòng quá ngắn
                      </div>
                    ) : (
                        ''
                    )}
                </span>
            </div>
            <div className="name__ctn">
                <h3>Giá phòng</h3>
                <input className="infor_input" type="number" placeholder="300.000 VND" ref={PriceInput} value={Price} onChange={(e) => setPrice(e.target.value)}/>
                {checkPriceValid ? (
                      <div className='error__password'>
                          <i className="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                          Giá không hợp lệ
                      </div>
                    ) : (
                        ''
                    )}
            </div>
            <div className="name__ctn">
                <h3>Mô tả chi tiết:</h3>
                <textarea rows={5} cols={50} className='textarea_rating' ref={DescripInput} value={Des} placeholder='Có đầy đủ tiện nghi' style={{height: "90px"}} onChange={(e) => setDes(e.target.value)}/>
                {checkDesValid ? (
                      <div className='error__password'>
                          <i className="fa fa-exclamation-circle" style={{ paddingRight: '4px' }}></i>
                          Mô tả quá ngắn
                      </div>
                    ) : (
                        ''
                    )}
            </div>
            <div className="name__ctn">
                <div className="accept__payment"> 
                    <div className="modal_edit__ctn">
                    <button className='paymentBtn update-room-btn' onClick={EditRoom} type="submit">
                            Cập nhật
                        </button> 
                        <button className='paymentBtn delete-room-btn' onClick={()=>setIsOpen(false)}>
                            Hủy
                        </button> 
                    </div>
                </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEdit;