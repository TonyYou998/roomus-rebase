import React, { useState } from 'react'
import Pagination from './Pagination'
import Products from './Product'
import Search from './Search'
import SortProduct from './SortProduct'

export default function ServiceContainer() {
    const [products, setProducts] = useState([])
    const [temp, setTemp] = useState([])
    

    //state dùng để sắp xếp sản phẩm
    const [sort, setSort] = useState('default')

    //Tổng số trang
    const [totalPage, setTotalPage] = useState()

    //Từng trang hiện tại
    const [pagination, setPagination] = useState({
        page: '1',
        count: '9',
        search: '',
        category: 'all'
    })
    const handlerChangeSort = (value) => {
        console.log("Value: ", value)

        setSort(value)
    }

    const handlerChangePage = (value) => {
        console.log("Value: ", value)

        //Sau đó set lại cái pagination để gọi chạy làm useEffect gọi lại API pagination
        // setPagination({
        //     page: value,
        //     count: pagination.count,
        //     search: pagination.search,
        //     category: pagination.category
        // })
    }

    const handlerSearch = (value) => {
        console.log("Value: ", value)

        setPagination({
            page: pagination.page,
            count: pagination.count,
            search: value,
            category: pagination.category
        })
    }
    const handlerCategory = (value) => {
        console.log("Value: ", value)

        // setPagination({
        //     page: pagination.page,
        //     count: pagination.count,
        //     search: pagination.search,
        //     category: value
        // })
    }
    
  return (
    <section className="py-5">
    <div className="container p-0">
        <div className="row">
            <div className="col-lg-3 order-2 order-lg-1">
                <h5 className="text-uppercase mb-4">Categories</h5>
                <div className="py-2 px-4   text-white mb-3 title-service-list"><strong className="small text-uppercase font-weight-bold title-service-list">All services</strong></div>
                <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
                    <li className="mb-2"><a className="reset-anchor" href="#" onClick={() => handlerCategory('all')}>All</a></li>
                </ul>
                <div className="py-2 px-4 bg-light mb-3"><strong className="small text-uppercase font-weight-bold">Services</strong></div>
                <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
                    <li className="mb-2"><a className="reset-anchor" href="#" onClick={() => handlerCategory('football-yard')}>Football yards</a></li>
                    <li className="mb-2"><a className="reset-anchor" href="#" onClick={() => handlerCategory('meeting-rooms')}>Meeting rooms</a></li>
                    <li className="mb-2"><a className="reset-anchor" href="#" onClick={() => handlerCategory('dancing-rooms')}>Dancing rooms</a></li>
                    <li className="mb-2"><a className="reset-anchor" href="#" onClick={() => handlerCategory('studios')}>Studio</a></li>
                    <li className="mb-2"><a className="reset-anchor" href="#" onClick={() => handlerCategory('halls')}>Halls</a></li>

                </ul>
              
            </div>
            <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
                <div className="row mb-3 align-items-center">

                    {/* ------------------Search----------------- */}
                    <Search handlerSearch={handlerSearch} />
                    {/* ------------------Search----------------- */}

                    <div className="col-lg-9">
                        <ul className="d-flex align-items-center mb-0" style={{marginLeft:" 0px !important"}}>
                            <li className="list-inline-item">
                                <SortProduct handlerChangeSort={handlerChangeSort} />
                            </li>

                            <li className="list-inline-item">
                                <SortProduct handlerChangeSort={handlerChangeSort} />
                            </li>

                            <li className="list-inline-item">
                                <SortProduct handlerChangeSort={handlerChangeSort} />
                            </li>
                        </ul>
                    </div>
                </div>

                <Products products={products} sort={sort} />

                <Pagination pagination={pagination} handlerChangePage={handlerChangePage} totalPage={totalPage} />

            </div>
        </div>
    </div>
</section>
  )
}
