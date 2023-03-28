import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {
  const [date1, setDate1] = useState();
  const [date2, setDate2] = useState();
  const [time1, setTime1] = useState();
  const [time2, setTime2] = useState();
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [isFound, setIsFound] = useState(false);

  function FindYard(){
    setIsFound(true);
  }

  return (
    <div className='modal__container'>
      <div className='darkBG' onClick={() => setIsOpen(false)} />
      <div className='centered'>
        <div className='modal'>
          <div className='modalHeader'>
            <h5 className='heading'>ĐẶT SÂN</h5>
          </div>
          <button className='closeBtn' onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-6px", marginRight: "7px" }} />
          </button>
          <div className='modalContent'>
            Khung giờ:
            <ul className="listTime">
              <li>Từ 06h00 - 16h00: 200.000đ</li>
              <li>Từ 17h30 - 19h00: 350.000đ</li>
            </ul>
          </div>
          <h3 className="findYard">Tìm sân trống:</h3>
          <div className='bookYard'>
            <div className='bookYard_from'>
              <div className="bookYard_title"><p>Từ</p></div>
              <div className="bookYard_from_detail">
              <input 
                className="datePicker" 
                type="date" 
                onChange={e=>setDate1(e.target.value)} 
                format="YYYY-MM-DD"
                value={date1}/>
              <input 
                className="timePicker" 
                type="time" 
                onChange={e=>setTime1(e.target.value)} 
                format="hh:mm"
                value={time1}/>
              </div>
            </div>
            <div className='bookYard_to'>
            <div className="bookYard_title"><p>Đến</p></div>
              <div className="bookYard_to_detail">
                <input 
                className="datePicker" 
                type="date" 
                onChange={e=>setDate2(e.target.value)} 
                format="YYYY-MM-DD"
                value={date2}/>
              <input 
                  className="timePicker" 
                  type="time" 
                  onChange={e=>setTime2(e.target.value)} 
                  format="hh:mm"
                  value={time2}/>
              </div>
            </div>
          </div>

          {/* Tìm sân */}
          {isFound && 
            <div className="resultFind">
            <h3 className="findYard">Kết quả tìm sân:</h3>
            <table className='table'>
                <thead>
                    <tr>
                    <th className='header'>Thời gian</th>
                    <th className='header'>Số sân trống</th>
                    <th className='header'>Chọn</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='row_table' onClick={() => setShow1(!show1)}>
                    <td>28/02/2023</td>
                    <td>2</td>
                    <td className='dropdown'><i class="fa fa-caret-down ic_drop"></i></td>
                    </tr>
                    {show1 && (
                    <>
                        <tr>
                        <td>14h00 - 15h00</td>
                        <td></td>
                        <td className='dropdown'><input className="checkyard" type='checkbox' /></td>
                        </tr>
                        <tr>
                        <td>15h00 - 16h00</td>
                        <td></td>
                        <td className='dropdown'><input className="checkyard" type='checkbox' /></td>
                        </tr>
                    </>
                    )}
                    <tr className='row_table' onClick={() => setShow2(!show2)}>
                    <td>29/02/2023</td>
                    <td>1</td>
                    <td className='dropdown'><i class="fa fa-caret-down ic_drop"></i></td>
                    </tr>
                    {show2 && (
                    <>
                        <tr>
                        <td>18h00 - 19h00</td>
                        <td></td>
                        <td className='dropdown'><input className="checkyard" type='checkbox' /></td>
                        </tr>
                    </>
                    )}
                </tbody>
                </table>
          </div>}
          
          

          <div className='modalActions'>
            <div className='actionsContainer'>
              <button className='findBtn' onClick={FindYard}>
                Tìm sân
              </button>
              <button
                className={'cancelBtn'}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;