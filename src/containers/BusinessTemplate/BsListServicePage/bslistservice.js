import React, { useState } from 'react'
import ListRoom from './components/listroom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory, useParams } from "react-router-dom";
import ModalAddRoom from './components/modaladdroom';

export default function BsListService() {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const {category} = useParams();

  function ReturnPrevPage()
  {
    history.goBack();
  }

  return (
    <header className='header bg-white container container__header mt-16'> 
        <div className='bs_type_service_ctn mt-4'>
          <div className='listroom_ctn mb-4'>
              {(category === 'yard') ? <h1 className="h4 text-uppercase font-weight-bold">Danh sách các sân</h1>
               : <h1 className="h4 text-uppercase font-weight-bold">Danh sách các phòng</h1> }
              <button className="btn book-now-btn mb-1" onClick={() => setIsOpen(true)}>Thêm phòng</button>
          </div>
          <div className="row mt-2">
            <ListRoom />
        </div>
        <button className="btn mb-1 return-btn" onClick={ReturnPrevPage}> <FontAwesomeIcon icon={faArrowAltCircleLeft}/> Trở lại</button>
        </div>
        {isOpen && <ModalAddRoom onClose={() => setIsOpen(false)} setIsOpen={setIsOpen}/>}
      </header>
  )
}
