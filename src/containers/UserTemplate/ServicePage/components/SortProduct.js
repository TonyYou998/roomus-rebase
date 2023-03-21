import React from 'react';
import PropTypes from 'prop-types';
SortProduct.propTypes = {
    handlerChangeSort: PropTypes.func
};

SortProduct.defaultProps = {
    handlerChangeSort: null
}
export default function SortProduct(props) {
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
            <option value="default">Default sorting</option>
            <option value="DownToUp">Price: Low to High</option>
            <option value="UpToDown">Price: High to Low</option>
            <option value="Nearest ">Price: High to Low</option>
        </select>

  )
}
