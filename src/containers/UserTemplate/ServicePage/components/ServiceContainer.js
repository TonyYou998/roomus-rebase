import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import Products from './Product'
import Search from './Search'
import SortByPrice from './SortByPrice'
import SortByRate from './SortByRate'
import SortByLocate from './SortByLocate'
import { mainApi } from '../../../../API/api'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveShop } from '../../../../redux/reduxcshop/shopSlice'

export default function ServiceContainer() {
    const dispatch = useDispatch();
    
    const active = useSelector(state => state.shop.active);
  
    const handlerActive = (value) => {
      dispatch(setActiveShop(value));
    }

    const [products, setProducts] = useState([])
    const [sort, setSort] = useState('default')
    const [totalPage, setTotalPage] = useState()
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
        setPagination({
            page: pagination.page,
            count: pagination.count,
            search: value,
            category: pagination.category
        })
    }

    const handlerCategory = (value) => {
        handlerActive(value);
        
        // setPagination({
        //     page: pagination.page,
        //     count: pagination.count,
        //     search: pagination.search,
        //     category: value
        // })
    }

    useEffect(() => {
        if(active === 'all')
        {
            mainApi.get("/service/get-services")
            .then((result)=>{
                setProducts(result.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        else if(active === "football-yard")
        {
            mainApi.get("/service/get-service-by-type/2")
            .then((result)=>{
                setProducts(result.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        else if(active === "meeting-rooms")
        {
            mainApi.get("/service/get-service-by-type/1")
            .then((result)=>{
                setProducts(result.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        else if(active === "dancing-rooms")
        {
            mainApi.get("/service/get-service-by-type/4")
            .then((result)=>{
                setProducts(result.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        else if(active === "studios")
        {
            mainApi.get("/service/get-service-by-type/3")
            .then((result)=>{
                setProducts(result.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }

    }, [active]);
    
  return (
    <section className="py-5 service_ctn">
    <div className="container p-0">
        <div className="row">
            <div className="col-lg-3 order-2 order-lg-1">
                <h5 className="text-uppercase mb-4">Categories</h5>
                <div className="py-2 px-4   text-white mb-3 title-service-list"><strong className="small text-uppercase font-weight-bold title-service-list">All services</strong></div>
                <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
                    {(active === "all") ? <li className="mb-2"><a className="reset-anchor" href="#" style={{fontWeight: "600", color: "#174688"}} onClick={() => handlerCategory('all')}>All</a></li>
                    : <li className="mb-2"><a className="reset-anchor" href="#" onClick={() => handlerCategory('all')}>All</a></li>}
                </ul>
                <div className="py-2 px-4 bg-light mb-3"><strong className="small text-uppercase font-weight-bold">Services</strong></div>
                <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
                    <li className="mb-2"><a className="reset-anchor" style={(active === 'football-yard') ? {fontWeight: "600", color: "#174688"} : {}} href="#" onClick={() => handlerCategory('football-yard')}>Football yards</a></li>  
                    <li className="mb-2"><a className="reset-anchor" style={(active === 'meeting-rooms') ? {fontWeight: "600", color: "#174688"} : {}} href="#" onClick={() => handlerCategory('meeting-rooms')}>Meeting rooms</a></li>
                    <li className="mb-2"><a className="reset-anchor" style={(active === 'dancing-rooms') ? {fontWeight: "600", color: "#174688"} : {}} href="#" onClick={() => handlerCategory('dancing-rooms')}>Dancing rooms</a></li>
                    <li className="mb-2"><a className="reset-anchor" style={(active === 'studios') ? {fontWeight: "600", color: "#174688"} : {}} href="#" onClick={() => handlerCategory('studios')}>Studio</a></li>
                </ul>
              
            </div>
            <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
                <div className="row mb-3 align-items-center">

                    {/* ------------------Search----------------- */}
                    <Search handlerSearch={handlerSearch} />
                    {/* ------------------Search----------------- */}

                    <div className="col-lg-9" style={{marginTop: "10px"}}>
                        <ul className="d-flex align-items-center mb-0 pl-0">
                            <li className="list-inline-item">
                                <SortByPrice handlerChangeSort={handlerChangeSort} />
                            </li>

                            <li className="list-inline-item">
                                <SortByRate handlerChangeSort={handlerChangeSort} />
                            </li>

                            <li className="list-inline-item">
                                <SortByLocate handlerChangeSort={handlerChangeSort} />
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
