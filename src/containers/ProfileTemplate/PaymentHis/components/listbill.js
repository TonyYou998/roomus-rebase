import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faEdit, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import ModalRating from "./modalrating";
import Swal from 'sweetalert2';

const Listbill = () => {
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
          <th>Tên dịch vụ</th>
          <th>Trạng thái</th>
          <th>Loại phòng</th>
          <th>Giá</th>
          <th>Phương thức thanh toán</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sân banh Thủ Đức</td>
          <td style={{color: '#11C619'}}>Đã thanh toán</td>
          <td>Thường</td>
          <td>200k</td>
          <td>Trực tiếp</td>
          <td>
          <button className="btn btn-room-trash" onClick={DeleteRoom}> <FontAwesomeIcon icon={faTrash} /> </button>
          <button className="btn edit-room-btn" onClick={() => EditRoom({roomNumber: "Sân banh Thủ Đức"})}><FontAwesomeIcon icon={faCommentAlt} /></button></td>
        </tr>
        <tr>
          <td>Phòng nhảy Bình Minh</td>
          <td style={{color: 'red'}}>Đã xong</td>
          <td>Thường</td>
          <td>230k</td>
          <td>Ví điện tử Momo</td>
          <td>
          <button className="btn btn-room-trash" onClick={DeleteRoom}> <FontAwesomeIcon icon={faTrash} /> </button>
          <button className="btn edit-room-btn" onClick={() => EditRoom({roomNumber: "Phòng nhảy Bình Minh"})}><FontAwesomeIcon icon={faCommentAlt} /></button>
          </td>
        </tr>
        <tr>
          <td>Phòng họp Jisa</td>
          <td style={{color: 'blue'}}>Đã đặt cọc</td>
          <td>Vip</td>
          <td>600k</td>
          <td>Thẻ ghi nợ, ngân hàng</td>
          <td>
          <button className="btn btn-room-trash" onClick={DeleteRoom}> <FontAwesomeIcon icon={faTrash} /> </button>
          <button className="btn edit-room-btn" onClick={() => EditRoom({roomNumber: "Phòng họp Jisa"})}><FontAwesomeIcon icon={faCommentAlt} /></button></td>
          {isOpen && <ModalRating onClose={() => setIsOpen(false)} setIsOpen={setIsOpen} room={selectedRoom}/>}
        </tr>
        <tr>
          <td>Aru Dance Room</td>
          <td style={{color: 'red'}}>Đã xong</td>
          <td>Thường</td>
          <td>200k</td>
          <td>Trực tiếp</td>
          <td>
          <button className="btn btn-room-trash" onClick={DeleteRoom}> <FontAwesomeIcon icon={faTrash} /> </button>
          <button className="btn edit-room-btn" onClick={() => EditRoom({roomNumber: "Aru Dance Room"})}><FontAwesomeIcon icon={faCommentAlt} /></button>
          </td>
        </tr>
        <tr>
          <td>Music Studio</td>
          <td style={{color: '#11C619'}}>Đã thanh toán</td>
          <td>Vip</td>
          <td>230k</td>
          <td>Ví điện tử Momo</td>
          <td>
          <button className="btn btn-room-trash" onClick={DeleteRoom}> <FontAwesomeIcon icon={faTrash} /> </button>
          <button className="btn edit-room-btn" onClick={() => EditRoom({roomNumber: "Music Studio"})}><FontAwesomeIcon icon={faCommentAlt} /></button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Listbill;
