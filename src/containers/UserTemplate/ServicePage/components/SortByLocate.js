import React from 'react';
import PropTypes from 'prop-types';
SortByLocate.propTypes = {
    handlerChangeSort: PropTypes.func
};

SortByLocate.defaultProps = {
    handlerChangeSort: null
}
export default function SortByLocate(props) {
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
        <option value="default">Theo vị trí</option>
        <option value="DownToUp">Gần tôi nhất</option>
        <option value="UpToDown">Xa tôi nhất</option>
    </select>

  )
}
