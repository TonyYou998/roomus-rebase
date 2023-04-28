import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import ModalEdit from "./modaledit";
import Swal from 'sweetalert2';

const Listroom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

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
          <th>Tên phòng</th>
          <th>Trạng thái</th>
          <th>Loại phòng</th>
          <th>Đánh giá</th>
          <th>Giá phòng</th>
          <th>Phương thức thanh toán</th>
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
          <td>Trực tiếp</td>
          <td>
          <button className="btn btn-room-trash" onClick={DeleteRoom}> <FontAwesomeIcon icon={faTrash} /> </button>
          <button className="btn edit-room-btn" onClick={() => EditRoom({roomNumber: "Phòng 101", roomStatus: "Đang hoạt động", roomType: "Phòng đơn", roomPrice: "200000", roomPayment: "Trực tiếp"})}><FontAwesomeIcon icon={faEdit} /></button></td>
        </tr>
        <tr>
          <td>Phòng 102</td>
          <td style={{color: 'red'}}>Đang trống</td>
          <td>Phòng đôi</td>
          <td>5/5 <FontAwesomeIcon icon={faStar} style={{color : "#ffcd1d"}}/></td>
          <td>230k</td>
          <td>Ví điện tử Momo</td>
          <td>
          <button className="btn btn-room-trash" onClick={DeleteRoom}> <FontAwesomeIcon icon={faTrash} /> </button>
          <button className="btn edit-room-btn" onClick={() => EditRoom({roomNumber: "Phòng 102", roomStatus: "Đang trống", roomType: "Phòng đôi", roomPrice: "230000", roomPayment: "Ví điện tử Momo"})}><FontAwesomeIcon icon={faEdit} /></button>
          </td>
        </tr>
        <tr>
          <td>Phòng 103</td>
          <td style={{color: 'blue'}}>Đang chờ xác nhận</td>
          <td>Phòng Vip</td>
          <td>4/5 <FontAwesomeIcon icon={faStar} style={{color : "#ffcd1d"}}/> </td>
          <td>600k</td>
          <td>Thẻ ghi nợ, ngân hàng</td>
          <td>
          <button className="btn btn-room-trash" onClick={DeleteRoom}> <FontAwesomeIcon icon={faTrash} /> </button>
          <button className="btn edit-room-btn" onClick={() => EditRoom({roomNumber: "Phòng 103", roomStatus: "Đang chờ xác nhận", roomType: "Phòng Vip", roomPrice: "600000", roomPayment: "Thẻ ghi nợ, ngân hàng"})}><FontAwesomeIcon icon={faEdit} /></button></td>
          {isOpen && <ModalEdit onClose={() => setIsOpen(false)} setIsOpen={setIsOpen} room={selectedRoom}/>}
        </tr>
        <tr>
          <td>Phòng 104</td>
          <td style={{color: 'red'}}>Đang trống</td>
          <td>Phòng đơn</td>
          <td>2/5 <FontAwesomeIcon icon={faStar} style={{color : "#ffcd1d"}}/></td>
          <td>200k</td>
          <td>Trực tiếp</td>
          <td>
          <button className="btn btn-room-trash" onClick={DeleteRoom}> <FontAwesomeIcon icon={faTrash} /> </button>
          <button className="btn edit-room-btn" onClick={() => EditRoom({roomNumber: "Phòng 104", roomStatus: "Đang trống", roomType: "Phòng đơn", roomPrice: "200000", roomPayment: "Trực tiếp"})}><FontAwesomeIcon icon={faEdit} /></button>
          </td>
        </tr>
        <tr>
          <td>Phòng 105</td>
          <td style={{color: '#11C619'}}>Đang hoạt động</td>
          <td>Phòng đôi</td>
          <td>3/5 <FontAwesomeIcon icon={faStar} style={{color : "#ffcd1d"}}/></td>
          <td>230k</td>
          <td>Ví điện tử Momo</td>
          <td>
          <button className="btn btn-room-trash" onClick={DeleteRoom}> <FontAwesomeIcon icon={faTrash} /> </button>
          <button className="btn edit-room-btn" onClick={() => EditRoom({roomNumber: "Phòng 105", roomStatus: "Đang hoạt động", roomType: "Phòng đôi", roomPrice: "230000", roomPayment: "Ví điện tử Momo"})}><FontAwesomeIcon icon={faEdit} /></button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Listroom;
