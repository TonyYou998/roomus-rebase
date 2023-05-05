import React ,{useEffect, useRef,useState}from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { mainApi } from '../../../../API/api';
Search.propTypes = {
    handlerSearch: PropTypes.func
};

Search.defaultProps = {
    handlerSearch: null
}

export default function Search(props) {
    const { handlerSearch } = props
    const [search, setSearch] = useState('')
    const delaySearchTextTimeOut = useRef(null);
    const [result, setResult] = useState([]);
    const [selectedOption, setSelectedOption] = useState('option1');
    const tokenAuth = 'Bearer ' + JSON.stringify(localStorage.getItem('token')).split('"').join('');
    const headers = {
        Authorization: tokenAuth,
    };

    const onChangeText = (e) => {
        const value = e.target.value
        setSearch(value)

        if (handlerSearch){
            if (delaySearchTextTimeOut.current)
            {
                clearTimeout(delaySearchTextTimeOut.current);
            }
            
            delaySearchTextTimeOut.current = setTimeout(() => {
                handlerSearch(value);

                if(selectedOption === 'option1')
                {
                    mainApi.get(`/service/search?data=${value}`, { headers: headers })
                    .then((result)=>{
                        setResult(result.data);
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                }
                else{
                    mainApi.get(`/service/search?business=${value}`, { headers: headers })
                    .then((result)=>{
                    setResult(result.data);
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                }
                
            }, 500)

        }
    }
  return (
    <div className='input-search-ctn'>
        <div className="col-md-12 input-select">
            <input 
                className="form-control form-control-lg input-search" 
                type="text" 
                placeholder="Enter Search Here!"
                onChange={onChangeText}
                value={search} />
            <select className='select-search' value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                <option value="option1">Service</option>
                <option value="option2">Business</option>
            </select>
        </div>
        {(result.length > 0) ? (<div className="search-dropdown">
            <ul>
            {
            result.map((item, idx) => (
                <li className='search-dropdown-item' key={idx}>
                    <Link className='link-item-search' to={`/detail/${item.id}`}>{item.serviceName}</Link>
                </li>
            ))
            }                
            </ul>
        </div>) : ''}
    </div>
  )
}
