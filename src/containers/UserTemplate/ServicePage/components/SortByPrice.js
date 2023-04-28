import React from 'react';
import PropTypes from 'prop-types';
SortByPrice.propTypes = {
    handlerChangeSort: PropTypes.func
};

SortByPrice.defaultProps = {
    handlerChangeSort: null
}
export default function SortByPrice(props) {
    const { handlerChangeSort } = props

    const onChangeValue = (e) => {
        
        const keyword = e.target.value

        if (!handlerChangeSort){
            return
        }

        handlerChangeSort(keyword)

    }
  return (
    <select className="selectpicker ml-8 sort_price justify-content-lg-end" onChange={onChangeValue}>
        <option value="default">Theo giá</option>
        <option value="DownToUp">Từ thấp đến cao</option>
        <option value="UpToDown">Từ cao đến thấp</option>
    </select>

  )
}
