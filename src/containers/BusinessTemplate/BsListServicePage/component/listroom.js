import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ModalEdit from "./modaledit";

const Listroom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const EditRoom = (room) =>{
    setIsOpen(true);
    setSelectedRoom(room);
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
          <td><button className="btn edit-room-btn" onClick={() => EditRoom({roomNumber: "Phòng 101", roomStatus: "Đang hoạt động", roomType: "Phòng đơn", roomPrice: "200000", roomPayment: "Trực tiếp"})}>Sửa</button></td>
        </tr>
        <tr>
          <td>Phòng 102</td>
          <td style={{color: 'red'}}>Đang trống</td>
          <td>Phòng đôi</td>
          <td>5/5 <FontAwesomeIcon icon={faStar} style={{color : "#ffcd1d"}}/></td>
          <td>230k</td>
          <td>Ví điện tử Momo</td>
          <td><button className="btn edit-room-btn" onClick={() => EditRoom({roomNumber: "Phòng 102", roomStatus: "Đang trống", roomType: "Phòng đôi", roomPrice: "230000", roomPayment: "Ví điện tử Momo"})}>Sửa</button></td>
        </tr>
        <tr>
          <td>Phòng 103</td>
          <td style={{color: 'blue'}}>Đang chờ xác nhận</td>
          <td>Phòng Vip</td>
          <td>4/5 <FontAwesomeIcon icon={faStar} style={{color : "#ffcd1d"}}/> </td>
          <td>600k</td>
          <td>Thẻ ghi nợ, ngân hàng</td>
          <td><button className="btn edit-room-btn" onClick={() => EditRoom({roomNumber: "Phòng 103", roomStatus: "Đang chờ xác nhận", roomType: "Phòng Vip", roomPrice: "600000", roomPayment: "Thẻ ghi nợ, ngân hàng"})}>Sửa</button></td>
          {isOpen && <ModalEdit onClose={() => setIsOpen(false)} setIsOpen={setIsOpen} room={selectedRoom}/>}
        </tr>
        <tr>
          <td>Phòng 104</td>
          <td style={{color: 'red'}}>Đang trống</td>
          <td>Phòng đơn</td>
          <td>2/5 <FontAwesomeIcon icon={faStar} style={{color : "#ffcd1d"}}/></td>
          <td>200k</td>
          <td>Trực tiếp</td>
          <td><button className="btn edit-room-btn" onClick={() => EditRoom({roomNumber: "Phòng 104", roomStatus: "Đang trống", roomType: "Phòng đơn", roomPrice: "200000", roomPayment: "Trực tiếp"})}>Sửa</button></td>
        </tr>
        <tr>
          <td>Phòng 105</td>
          <td style={{color: '#11C619'}}>Đang hoạt động</td>
          <td>Phòng đôi</td>
          <td>3/5 <FontAwesomeIcon icon={faStar} style={{color : "#ffcd1d"}}/></td>
          <td>230k</td>
          <td>Ví điện tử Momo</td>
          <td><button className="btn edit-room-btn" onClick={() => EditRoom({roomNumber: "Phòng 105", roomStatus: "Đang hoạt động", roomType: "Phòng đôi", roomPrice: "230000", roomPayment: "Ví điện tử Momo"})}>Sửa</button></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Listroom;
