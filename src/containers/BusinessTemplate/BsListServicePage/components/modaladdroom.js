import React, { useState, useRef } from "react";
import { RiCloseLine } from "react-icons/ri";
import Swal from 'sweetalert2';
import { mainApi } from "../../../../API/api";
import Dropzone from "react-dropzone";
import { useParams } from "react-router-dom";
import storage from "../../../../firebase";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

const ModalAddRoom = ({setIsOpen}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [firstClick, setFirstClick] = useState(true);
  const [Name, setName] = useState('');
  const [Type, setType] = useState('');
  const [Price, setPrice] = useState('');
  const [Des, setDes] = useState('');
  const [checkNameValid, setCheckNameValid] = useState(false);
  const [checkTypeValid, setCheckTypeValid] = useState(false);
  const [checkPriceValid, setCheckPriceValid] = useState(false);
  const [checkDesValid, setCheckDesValid] = useState(false);
  const NameInput = useRef();
  const TypeInput = useRef();
  const PriceInput = useRef();
  const DescripInput = useRef();
  const [files, setFiles] = useState([]);
  const [listURL, setListURL] = useState('');
  const { idlist, category } = useParams();
  const tokenAuth = 'Bearer ' + JSON.stringify(localStorage.getItem('token')).split('"').join('');
  const headers = {
      Authorization: tokenAuth,
  };

  const handleDrop = (acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  };

  const handleUpload = async () => {
    try {
        setIsUploading(true);
        const uploadPromises = files.map(async (file) => {
        const fileLocation = `businesses/8e8bc057-51d5-480d-9bde-5ceeca669aa7/${category}/listItem/${Name}/${new Date().getTime()}-${file.name}`;
        const storageRef = ref(storage, fileLocation);
        const uploadTask = uploadBytesResumable(storageRef, file);
        await uploadTask;
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL;
      });
      const uploadedFiles = await Promise.all(uploadPromises);
      const uploadedFileUrls = uploadedFiles.map(fileUrl => fileUrl.toString()).join(' ');
      setListURL(uploadedFileUrls);
      setIsUploading(false);
      setFirstClick(false);
    } catch (error) {
      setIsUploading(false);
      console.error('Error uploading files:', error);
    }
  };

  const AddRoom = async (e) =>{
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

    if(files.length < 1)
    {
        Swal.fire({
          title: 'Bạn chưa thêm ảnh',
          icon: 'error',
          confirmButtonText: 'Đóng',
          width: '25rem',
        });
        return;
    }
    if(files.length > 1)
    {
        Swal.fire({
          title: 'Chỉ được thêm 1 ảnh',
          icon: 'error',
          confirmButtonText: 'Đóng',
          width: '25rem',
        });

        setFiles([]);
        return;
    }

    if (!checkNameValid && !checkTypeValid && !checkPriceValid && !checkDesValid && files.length === 1) {
        if (!isUploading && firstClick) {
          await handleUpload();
        }

        if(listURL)
        {
            const obj = {
              serviceId: idlist,
              images: listURL,
              price: parseFloat(Price),
              description: Des,
              itemType: 1,  
              serviceItemName: Name
            }
    
            console.log(obj);
      
            mainApi.post("/service/add-service-item", obj, { headers: headers })
            .then((result)=>{
                console.log(result.data);
                Swal.fire({
                  title: 'Thêm thành công',
                  icon: 'success',
                  confirmButtonText: 'Hoàn tất',
                  width: '25rem',
              });
    
              setIsOpen(false);
    
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        else{
          Swal.fire({
            title: 'Ảnh đang trong quá trình xử lí',
            icon: 'error',
            width: '25rem',
            showCloseButton: false,
            showConfirmButton: false
        });

        setTimeout(function() {
            Swal.close();
          }, 1200);
      }
    }
  }

  return (
    <div className='modalol__container'>
      <div className='darkBG__ol' onClick={() => setIsOpen(false)} />
      <div className='centered__ol'>
        <form className='modal__ol'>
          <div className='modalHeader__ol'>
            <h5 className='heading__ol'>Thêm phòng</h5>
          </div>
          <button className='closeBtn__ol' onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-6px", marginRight: "7px" }} />
          </button>
          <h3 className="findYard__ol">Thông tin phòng:</h3>
          <div className="pm__infor">
            <div className="name__ctn">
                <h3>Tên phòng:</h3>
                <input className="infor_input" type="text" placeholder="VD: Phòng 101" ref={NameInput} value={Name} onChange={(e) => setName(e.target.value)}/>
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
                <h3>Loại phòng</h3>
                <input className="infor_input" type="text" placeholder="VD: Phòng Vip" ref={TypeInput} value={Type} onChange={(e) => setType(e.target.value)}/>
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
                <input className="infor_input" type="number" placeholder="VD: 300.000 VND" ref={PriceInput} value={Price} onChange={(e) => setPrice(e.target.value)}/>
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
            <Dropzone onDrop={handleDrop} accept="image/*" multiple options={{ previews: true}}>
            {({ getRootProps, getInputProps }) => (
            <div className="dropzone" {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Thả hoặc chọn ảnh dịch vụ của bạn</p>
                {files.length > 0 && (
                <ul className="file-list">
                    {files.map((file) => (
                    <li key={file.name}>
                        <img src={URL.createObjectURL(file)} alt={file.name} style={{marginRight: "7px"}} />
                        {file.name} ({file.size} bytes)
                    </li>
                    ))}
                </ul>
                )}
            </div>
            )}
        </Dropzone>
            <div className="name__ctn">
                <div className="accept__payment"> 
                    <div className="modal_edit__ctn">
                        <button className='paymentBtn add-room-btn' onClick={AddRoom} type="submit">
                            Thêm
                        </button> 
                        <button className='paymentBtn back-room-btn' onClick={() => setIsOpen(false)}>
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

export default ModalAddRoom;