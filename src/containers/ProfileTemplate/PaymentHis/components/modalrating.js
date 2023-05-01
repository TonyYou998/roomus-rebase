import React, { useState, useRef } from "react";
import { RiCloseLine } from "react-icons/ri";
import Swal from 'sweetalert2';
import StarRating from "./starrating";

const ModalRating = ({setIsOpen, room}) => {
  const [Feedback, setFeedback] = useState('');
  const FeedbackInput = useRef();
  const [rating, setRating] = useState(0);
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  function EditRoom(e){
    e.preventDefault();

    if (Feedback === '') {
        Swal.fire({
          title: 'Vui lòng nhập đánh giá',
          icon: 'error',
          confirmButtonText: 'Đóng',
          width: '25rem',
      });
        e.preventDefault();
        return;
    }

    Swal.fire({
        title: 'Đánh giá thành công',
        icon: 'success',
        confirmButtonText: 'Hoàn tất',
        width: '25rem',
    });

    setIsOpen(false);
  }

  return (
    <div className='modalol__container'>
      <div className='darkBG__ol' onClick={() => setIsOpen(false)} />
      <div className='centered__ol'>
        <form className='modal__ol'>
          <div className='modalHeader__ol'>
            <h5 className='heading__ol'>Đánh giá</h5>
          </div>
          <button className='closeBtn__ol' onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-6px", marginRight: "7px" }} />
          </button>
          <h3 className="findYard__ol">{room.roomNumber}</h3>
          <div className="pm__infor">
            <div className="name__ctn">
                <h3>Đánh giá:</h3>
                <StarRating onChange={handleRatingChange} />
            </div>
            <div className="name__ctn">
                <h3>Nhận xét:</h3>
                <textarea rows={13} cols={50} className='textarea_rating' ref={FeedbackInput} placeholder='Ghi chú: ' style={{paddingBottom: "4px"}} onChange={(e) => setFeedback(e.target.value)}/>
            </div>
            <div className="name__ctn">
                <div className="accept__payment"> 
                    <div className="modal_edit__ctn">
                        <button className='paymentBtn update-room-btn' onClick={EditRoom} type="submit">
                            Đánh giá
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

export default ModalRating;