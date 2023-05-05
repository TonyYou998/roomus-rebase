import React, { useRef, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import Swal from "sweetalert2";
import Dropzone from "react-dropzone";
import storage from "../../../../firebase";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { mainApi } from "../../../../API/api";
import { useParams } from "react-router-dom";

function AlertError(context){
  Swal.fire({
    title: context,
    icon: 'error',
    confirmButtonText: 'Đóng',
    width: '25rem',
  });
}

function checkFormat(str) {
  const rangePattern = /^(\d{4,})(\s*-\s*)(\d{4,})$/;
  const match = rangePattern.exec(str);
  if (!match) return false;

  const num1 = parseInt(match[1]);
  const num2 = parseInt(match[3]);
  return num1 < num2;
}

const ModalAddDetail = ({ setIsOpen }) => {
    const [isUploading, setIsUploading] = useState(false);
    const [firstClick, setFirstClick] = useState(true);
    const { category } = useParams();
    const [Name, setName] = useState('');
    const [Des, setDes] = useState('');
    const [Address, setAddress] = useState('');
    const [Price, setPrice] = useState('');
    const PriceInput = useRef('');
    const NameInput = useRef();
    const DescripInput = useRef();
    const AddressInput = useRef();
    const [files, setFiles] = useState([]);
    const [listURL, setListURL] = useState('');
    const [finalOption, setFinalOption] = useState(0);
    const [paymentMethods, setPaymentMethods] = useState([
      { id: 1, name: "Trực tiếp" },
      { id: 2, name: "Ví điện tử Momo" },
      { id: 3, name: "Thẻ ghi nợ, ngân hàng" },
    ]);
  
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(1);
    const handlePaymentMethodChange = (e) => {
      setSelectedPaymentMethod(parseInt(e.target.value));
    };
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
          const fileLocation = `businesses/8e8bc057-51d5-480d-9bde-5ceeca669aa7/${category}/${new Date().getTime()}-${file.name}`;
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

    const AddService = async (e) =>{
        e.preventDefault();

        if(Name === '' || Address === '' || Des === '' || Price === ''){
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
        else if(!checkFormat(Price)){
          AlertError("Khoảng giá không hợp lệ");
          setPrice('');
          PriceInput.current.focus();
          return;
        }
        else if(Des.length < 5){
          AlertError("Mô tả quá ngắn");
          setDes('');
          DescripInput.current.focus();
          return;
        }
        else if(files.length < 1)
        {
            Swal.fire({
              title: 'Bạn chưa thêm ảnh',
              icon: 'error',
              confirmButtonText: 'Đóng',
              width: '25rem',
            });
            return;
        }
        else if(files.length > 1)
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
        else
        {
          if (!isUploading && firstClick) {
            await handleUpload();
          }

            if(category === "meet") setFinalOption(1);
            else if(category === "yard") setFinalOption(2);
            else if(category === "studio") setFinalOption(3);
            else if(category === "dance") setFinalOption(4);

            if(listURL)
            {
              const selectedPaymentMethodName = paymentMethods.find(
                (method) => method.id === selectedPaymentMethod
              )?.name;

              const objAddService = {
                serviceName: Name,
                image: listURL,
                bussinessId: "8e8bc057-51d5-480d-9bde-5ceeca669aa7",
                serviceType: finalOption,
                description: Des,
                address: Address,
                price: Price,
                paymentMethod: selectedPaymentMethodName 
              }
              await mainApi.post("/service/add-service", objAddService, { headers: headers })
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
    <div className="modal__container__add">
      <div className="darkBG__add" onClick={() => setIsOpen(false)} />
      <div className="centered__add">
        <div className="modal__add">
          <div className="modalHeader__add">
          {category === "yard" ? <h5 className="heading__add">THÊM SÂN BÓNG</h5> : ''}
          {category === "meet" ? <h5 className="heading__add">THÊM PHÒNG HỌP</h5> : ''}
          {category === "dance" ? <h5 className="heading__add">THÊM PHÒNG NHẢY</h5> : ''}
          {category === "studio" ? <h5 className="heading__add">THÊM STUDIO</h5> : ''}
          </div>
          <button className="closeBtn__add" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-6px", marginRight: "7px" }} />
          </button>

        <div className="name__ctn">
            <h3>Tên dịch vụ:</h3>
            {category === "yard" ? <input className="infor_input" type="text" placeholder="Sân bóng FA" ref={NameInput} value={Name} onChange={(e) => setName(e.target.value)}/> : ''}
            {category === "meet" ? <input className="infor_input" type="text" placeholder="Phòng họp FA" ref={NameInput} value={Name} onChange={(e) => setName(e.target.value)}/> : ''}
            {category === "dance" ? <input className="infor_input" type="text" placeholder="Phòng nhảy FA" ref={NameInput} value={Name} onChange={(e) => setName(e.target.value)}/> : ''}
            {category === "studio" ? <input className="infor_input" type="text" placeholder="Studio FA" ref={NameInput} value={Name} onChange={(e) => setName(e.target.value)}/> : ''}
        </div>

        <div className="name__ctn">
            <h3>Địa chỉ:</h3>
            <input className="infor_input" type="text" placeholder="KTX 135B Trần Hưng Đạo" ref={AddressInput} value={Address} onChange={(e) => setAddress(e.target.value)}/>
        </div>

        <div className="name__ctn">
            <h3>Giá cả:</h3>
            <input className="infor_input" type="text" placeholder="300000 - 600000" ref={PriceInput} value={Price} onChange={(e) => setPrice(e.target.value)}/>
        </div>

        <div className="name__ctn">
            <h3>Hình thức thanh toán</h3>
            <select
                className="infor_input infor_input_select"
                value={selectedPaymentMethod}
                onChange={handlePaymentMethodChange}
                >
                {paymentMethods.map((method) => (
                    <option key={method.id} value={method.id}>
                    {method.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="name__ctn">
            <h3>Mô tả:</h3>
            <textarea rows={5} cols={50} className='textarea_rating' ref={DescripInput} value={Des} placeholder='Sạch sẽ, riêng tư:' style={{height: "80px"}} onChange={(e) => setDes(e.target.value)}/>
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

          <div className="modalActions__add">
            <div className="actionsContainer__add">
              <button className="findBtn__add" onClick={AddService}>Thêm</button>
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

export default ModalAddDetail;
