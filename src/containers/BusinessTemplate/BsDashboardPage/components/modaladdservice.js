import React, { useRef, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import Swal from "sweetalert2";
import Dropzone from "react-dropzone";
import storage from "../../../../firebase";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  deleteObject
} from "firebase/storage";
import { mainApi } from "../../../../API/api";

function AlertError(context){
  Swal.fire({
    title: context,
    icon: 'error',
    confirmButtonText: 'Đóng',
    width: '25rem',
  });
}

const createImageArray = (uploadedFileUrls) => {
  const imageUrls = uploadedFileUrls.split(' ').filter(url => url.trim() !== '');
  const imageArray = imageUrls.map(url => ({ src: url }));
  return imageArray;
};

const ModalAddService = ({ setIsOpen }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [Name, setName] = useState('');
    const [Des, setDes] = useState('');
    const [Address, setAddress] = useState('');
    const NameInput = useRef();
    const DescripInput = useRef();
    const AddressInput = useRef();
    const [files, setFiles] = useState([]);
    const [listURL, setListURL] = useState('');
    const [isChooseType, setChooseType] = useState(false);
    const [finalOption, setFinalOption] = useState(0);
    const tokenAuth = 'Bearer ' + JSON.stringify(localStorage.getItem('token')).split('"').join('');
    const headers = {
        Authorization: tokenAuth,
    };

    const handleDrop = (acceptedFiles) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const deleteFile = async (fileUrl) => {
      const storageRef = ref(storage, fileUrl);
      await deleteObject(storageRef);
    };
    
    const handleDelete = async () => {
      try {
          const images = createImageArray(listURL);
          const deletePromises = images.map(async (file) => {
          const fileLocation = file.src;
          const storageRef = ref(storage, fileLocation);
          const deleteFilePromise = deleteFile(storageRef);
          await deleteFilePromise;
        });
        await Promise.all(deletePromises);
      } catch (error) {
        console.error("Error deleting files:", error);
      }
    };

    const handleUpload = async () => {
      try {
        const uploadPromises = files.map(async (file) => {
          const fileLocation = `businesses/8e8bc057-51d5-480d-9bde-5ceeca669aa7/${new Date().getTime()}-${file.name}`;
          const storageRef = ref(storage, fileLocation);
          const uploadTask = uploadBytesResumable(storageRef, file);
          await uploadTask;
          // return fileLocation;
          const downloadURL = await getDownloadURL(storageRef);
          return downloadURL;
        });
        const uploadedFiles = await Promise.all(uploadPromises);
        const uploadedFileUrls = uploadedFiles.map(fileUrl => fileUrl.toString()).join(' ');
        setListURL(uploadedFileUrls);

      } catch (error) {
        console.error('Error uploading files:', error);
      }
    };

    function ChooseType(e){
      e.preventDefault();

      if(selectedOption === null)
      {
          Swal.fire({
              title: 'Vui lòng chọn dịch vụ',
              icon: 'error',
              confirmButtonText: 'Đóng',
              width: '25rem',
          });

          return;
      }
      else
      {
        setChooseType(true);
      }

    }

    function AddService(e){
        e.preventDefault();

        if(Name === '' || Address === '' || Des === ''){
          AlertError("Vui lòng nhập đủ thông tin")
          return;
        }
        else if(Name.length < 6){
          AlertError("Tên quá ngắn");
          setName('');
          NameInput.current.focus();
          return;
        }
        else if(Address.length < 4){
          AlertError("Địa chỉ không hợp lệ");
          setAddress('');
          AddressInput.current.focus();
          return;
        }
        else if(Des.length < 5){
          AlertError("Mô tả quá ngắn");
          setDes('');
          DescripInput.current.focus();
          return;
        }
        else if(files.length < 2)
        {
            Swal.fire({
              title: 'Ít nhất 2 ảnh',
              icon: 'error',
              confirmButtonText: 'Đóng',
              width: '25rem',
        });
        }
        else
        {
            handleUpload();

            if(selectedOption === "meeting") setFinalOption(1);
            else if(selectedOption === "football") setFinalOption(2);
            else if(selectedOption === "studio") setFinalOption(3);
            else if(selectedOption === "dancing") setFinalOption(4);

            const objAddService = {
              serviceName: Name,
              image: listURL,
              bussinessId: "8e8bc057-51d5-480d-9bde-5ceeca669aa7",
              serviceType: finalOption,
              description: Des,
              address: Address,
            }

            mainApi.post("/service/add-service", objAddService, { headers: headers })
            .then((result)=>{
                console.log(result.data);

                Swal.fire({
                  title: 'Thêm thành công',
                  icon: 'success',
                  confirmButtonText: 'Hoàn tất',
                  width: '25rem',
                });
    
                setTimeout(function() {
                    Swal.close();
                  }, 1200);
    
                setIsOpen(false);
            })
            .catch((err)=>{
                handleDelete();
                console.log(err);
            })  
        }
    }

  return (
    <div className="modal__container__add">
      <div className="darkBG__add" onClick={() => setIsOpen(false)} />
      <div className="centered__add">
        <div className="modal__add">
          <div className="modalHeader__add">
            <h5 className="heading__add">THÊM DỊCH VỤ</h5>
          </div>
          <button className="closeBtn__add" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-6px", marginRight: "7px" }} />
          </button>

          {!isChooseType ? (
            <>
              <div className="name__ctn">
                  <h3>Loại dịch vụ:</h3>
              </div>

              <div className="bookYard__add">
                <div className="container__add">
                <form className="d-flex flex-column">
                    <label>
                        <input
                        type="radio"
                        name="radio"
                        value="football"
                        checked={selectedOption === "football"}
                        onChange={handleOptionChange}
                        />
                        <span>Football Yards</span>
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="radio"
                        value="meeting"
                        checked={selectedOption === "meeting"}
                        onChange={handleOptionChange}
                        />
                        <span>Meeting Rooms</span>
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="radio"
                        value="dancing"
                        checked={selectedOption === "dancing"}
                        onChange={handleOptionChange}
                        />
                        <span>Dancing Rooms</span>
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="radio"
                        value="studio"
                        checked={selectedOption === "studio"}
                        onChange={handleOptionChange}
                        />
                        <span>Studio</span>
                    </label>
                    </form>
                </div>
              </div>
            </>
          ) : ''}

          {isChooseType ? (
            <>
                <div className="name__ctn">
                    <h3>Tên dịch vụ:</h3>
                    <input className="infor_input" type="text" placeholder="Sân bóng FA" ref={NameInput} value={Name} onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className="name__ctn">
                    <h3>Địa chỉ:</h3>
                    <input className="infor_input" type="text" placeholder="KTX 135B Trần Hưng Đạo" ref={AddressInput} value={Address} onChange={(e) => setAddress(e.target.value)}/>
                </div>

                <div className="name__ctn">
                    <h3>Mô tả:</h3>
                    <textarea rows={5} cols={50} className='textarea_rating' ref={DescripInput} value={Des} placeholder='Sạch sẽ, riêng tư:' style={{height: "100px"}} onChange={(e) => setDes(e.target.value)}/>
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
            </>
          ) : ''}

          <div className="modalActions__add">
            <div className="actionsContainer__add">
            {!isChooseType ? (<button className="findBtn__add" onClick={ChooseType}>Chọn</button>) : ''}
            { isChooseType ? (<button className="findBtn__add" onClick={AddService}>Thêm</button>): ''}
              <button className={"cancelBtn__add"} onClick={() => setIsOpen(false)}>
                Hủy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddService;
