import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import ModalEdit from "./modaledit";
import Swal from 'sweetalert2';
import { useParams } from "react-router-dom";
import { mainApi } from "../../../../API/api";

const Listroom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const {idlist, category} = useParams();
  const tokenAuth = 'Bearer ' + JSON.stringify(localStorage.getItem('token')).split('"').join('');
  const headers = {
      Authorization: tokenAuth,
  };

  console.log(category);

  useEffect(() => {
    mainApi.get(`/service/get-service-item/${idlist}`, { headers: headers })
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.log(err);
    })
  }, [idlist]);

  const EditRoom = (room) =>{
    setIsOpen(true);
    setSelectedRoom(room);
  }

  function DeleteRoom(e)
  {
    e.preventDefault();
    Swal.fire({
      title: 'Bạn có chắc muốn xóa?',
      text: 'Dữ liệu sẽ không thể khôi phục sau khi xóa!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy'
    }).then((result) => {
      if (result.isConfirmed) {
        // Xử lý xóa dữ liệu
        Swal.fire({
          title: 'Xóa thành công',
          icon: 'success',
          confirmButtonText: 'Hoàn tất',
          width: '25rem',
      });

      setIsOpen(false);
      }
    })
  }

  return (
    <table className="room_table">
      <thead>
        <tr>
          {(category === 'yard') ? <th>Tên sân</th> : <th>Tên phòng</th> }
          <th>Trạng thái</th>
          {(category === 'yard') ? <th>Loại sân</th> : <th>Loại phòng</th> }
          <th>Đánh giá</th>
          {(category === 'yard') ? <th>Giá sân</th> : <th>Giá phòng</th> }
          <th>Mô tả chi tiết</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Phòng 101</td>
          <td style={{color: '#11C619'}}>Đang hoạt động</td>
          <td>Phòng đơn</td>
          <td>4/5 <FontAwesomeIcon icon={faStar} style={{color : "#ffcd1d"}}/> </td>
          <td>200k</td>
          <td>Đầy đủ tiện nghi</td>
          <td>
          <button className="btn btn-room-trash" onClick={DeleteRoom}> <FontAwesomeIcon icon={faTrash} /> </button>
          <button className="btn edit-room-btn" onClick={() => EditRoom({roomNumber: "Phòng 101", roomStatus: "Đang hoạt động", roomType: "Phòng đơn", roomPrice: "200000", roomDescrip: "Đầy đủ tiện nghi"})}><FontAwesomeIcon icon={faEdit} /></button></td>
        </tr>
        <tr>
          <td>Phòng 102</td>
          <td style={{color: 'red'}}>Đang trống</td>
          <td>Phòng đôi</td>
          <td>5/5 <FontAwesomeIcon icon={faStar} style={{color : "#ffcd1d"}}/></td>
          <td>230k</td>
          <td>Đầy đủ tiện nghi</td>
          <td>
          <button className="btn btn-room-trash" onClick={DeleteRoom}> <FontAwesomeIcon icon={faTrash} /> </button>
          <button className="btn edit-room-btn" onClick={() => EditRoom({roomNumber: "Phòng 102", roomStatus: "Đang trống", roomType: "Phòng đôi", roomPrice: "230000", roomDescrip: "Đầy đủ tiện nghi"})}><FontAwesomeIcon icon={faEdit} /></button>
          </td>
        </tr>
        <tr>
          <td>Phòng 103</td>
          <td style={{color: 'blue'}}>Đang chờ xác nhận</td>
          <td>Phòng Vip</td>
          <td>4/5 <FontAwesomeIcon icon={faStar} style={{color : "#ffcd1d"}}/> </td>
          <td>600k</td>
          <td>Đầy đủ tiện nghi</td>
          <td>
          <button className="btn btn-room-trash" onClick={DeleteRoom}> <FontAwesomeIcon icon={faTrash} /> </button>
          <button className="btn edit-room-btn" onClick={() => EditRoom({roomNumber: "Phòng 103", roomStatus: "Đang chờ xác nhận", roomType: "Phòng Vip", roomPrice: "600000", roomDescrip: "Đầy đủ tiện nghi"})}><FontAwesomeIcon icon={faEdit} /></button></td>
          {isOpen && <ModalEdit onClose={() => setIsOpen(false)} setIsOpen={setIsOpen} room={selectedRoom}/>}
        </tr>
        <tr>
          <td>Phòng 104</td>
          <td style={{color: 'red'}}>Đang trống</td>
          <td>Phòng đơn</td>
          <td>2/5 <FontAwesomeIcon icon={faStar} style={{color : "#ffcd1d"}}/></td>
          <td>200k</td>
          <td>Đầy đủ tiện nghi</td>
          <td>
          <button className="btn btn-room-trash" onClick={DeleteRoom}> <FontAwesomeIcon icon={faTrash} /> </button>
          <button className="btn edit-room-btn" onClick={() => EditRoom({roomNumber: "Phòng 104", roomStatus: "Đang trống", roomType: "Phòng đơn", roomPrice: "200000", roomDescrip: "Đầy đủ tiện nghi"})}><FontAwesomeIcon icon={faEdit} /></button>
          </td>
        </tr>
        <tr>
          <td>Phòng 105</td>
          <td style={{color: '#11C619'}}>Đang hoạt động</td>
          <td>Phòng đôi</td>
          <td>3/5 <FontAwesomeIcon icon={faStar} style={{color : "#ffcd1d"}}/></td>
          <td>230k</td>
          <td>Đầy đủ tiện nghi</td>
          <td>
          <button className="btn btn-room-trash" onClick={DeleteRoom}> <FontAwesomeIcon icon={faTrash} /> </button>
          <button className="btn edit-room-btn" onClick={() => EditRoom({roomNumber: "Phòng 105", roomStatus: "Đang hoạt động", roomType: "Phòng đôi", roomPrice: "230000", roomDescrip: "Đầy đủ tiện nghi"})}><FontAwesomeIcon icon={faEdit} /></button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Listroom;
