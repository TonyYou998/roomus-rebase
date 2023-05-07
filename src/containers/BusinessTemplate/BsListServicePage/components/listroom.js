import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import ModalEdit from "./modaledit";
import Swal from 'sweetalert2';
import { useParams } from "react-router-dom";
import { mainApi } from "../../../../API/api";

function ReturnString(str){
  if(str === "EMPTY") return "Đang trống";
  if(str === "CONFIRM") return "Đang chờ xác nhận";
  if(str === "PROGRESS") return "Đang hoạt động";
}

const Listroom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [finalResult, setResult] = useState([]);
  const {idlist, category} = useParams();
  const tokenAuth = 'Bearer ' + JSON.stringify(localStorage.getItem('token')).split('"').join('');
  const headers = {
      Authorization: tokenAuth,
  };

  const handleDeleteRoom = (id) => {
    DeleteRoom(id);
  };

  useEffect(() => {
    mainApi.get(`/service/get-service-item/${idlist}`, { headers: headers })
    .then((result)=>{
        console.log(result);
        setResult(result.data.reverse())
    })
    .catch((err)=>{
        console.log(err);
      })
    }, [idlist]);

  const EditRoom = (room) =>{
    setIsOpen(true);
    setSelectedRoom(room);
  }

  function DeleteRoom(serviceItemid)
  {
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
        mainApi.delete(`/service/delete-service-item/${serviceItemid}`, { headers: headers })
          .then((result)=>{
              console.log(result.data);

              Swal.fire({
                title: 'Xóa thành công',
                icon: 'success',
                confirmButtonText: 'Hoàn tất',
                width: '25rem',
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.close();
                  window.location.reload();
                }
              });
          })
          .catch((err)=>{
              console.log(err);
          }) 

      setIsOpen(false);
      }
    })
  }

  return (
    <>
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
      {
        finalResult.map((item, idx) => (
          <tr key={idx}>
            <td>{item.serviceItemName}</td>
            {(item.status === "EMPTY") ? <td style={{color: 'red'}}> Đang trống </td> : ''}
            {(item.status === "CONFIRM") ? <td style={{color: 'blue'}}>Đang chờ xác nhận</td> : ''}
            {(item.status === "PROGRESS") ? <td style={{color: '#11C619'}}>Đang hoạt động</td> : ''}
            <td>Phòng đơn</td>
            <td>4/5 <FontAwesomeIcon icon={faStar} style={{color : "#ffcd1d"}}/> </td>
            <td>{(item.price / 1000).toLocaleString()}k</td>
            <td>{item.description}</td>
            <td>
            <button className="btn btn-room-trash" onClick={() => handleDeleteRoom(item.id)}> <FontAwesomeIcon icon={faTrash} /> </button>
            <button className="btn edit-room-btn" onClick={() => EditRoom({roomID: item.id, roomNumber: item.serviceItemName, roomStatus: ReturnString(item.status), roomType: "Phòng đơn", roomPrice: item.price, roomDescrip: item.description})}><FontAwesomeIcon icon={faEdit} /></button></td>
            
        </tr>
        ))
      }
      </tbody>
    </table>
    {isOpen && <ModalEdit onClose={() => setIsOpen(false)} setIsOpen={setIsOpen} room={selectedRoom}/>}
    </>
  );
};

export default Listroom;
