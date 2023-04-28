import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import Swal from "sweetalert2";
import Dropzone from "react-dropzone";

const ModalAddService = ({ setIsOpen }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [files, setFiles] = useState([]);

    const handleDrop = (acceptedFiles) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    };


    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    function AddService(e){
        e.preventDefault();

        if(selectedOption === null)
        {
            Swal.fire({
                title: 'Vui lòng chọn dịch vụ',
                icon: 'error',
                confirmButtonText: 'Đóng',
                width: '25rem',
            });
        }
        else if(files.length < 2)
        {
            Swal.fire({
              title: 'Số ảnh tối thiểu là 2',
              icon: 'error',
              confirmButtonText: 'Đóng',
              width: '25rem',
        });
        }
        else
        {
            Swal.fire({
                title: 'Thêm thành công',
                icon: 'success',
                confirmButtonText: 'Hoàn tất',
                width: '25rem',
            });
    
            setIsOpen(false);
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
              <button className="findBtn__add" onClick={AddService}>
                Thêm
              </button>

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
