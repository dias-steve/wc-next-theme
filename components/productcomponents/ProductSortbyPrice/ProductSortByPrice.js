import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../redux/productList/productList.action';
import styles from './ProductSortbyPrice.module.scss';



const mapSate = (state) => ({
    filter: state.productlist.filter
})

export default function ProductSortByPrice() {

    const [btnASCActive, setBtnASCActive] = useState('unactive');
    const dispatch = useDispatch();
    const {filter} = useSelector(mapSate);

    const conevertStateToFilterSortValue = (btnState) => {
        switch(btnState) {
            case 'unactive':
                return null;
            case 'asc':
                return '_price';
            case 'desc':
                return '-_price';
        }
    }
    useEffect(() => {
        dispatch(
            setFilter({...filter, sort: conevertStateToFilterSortValue(btnASCActive) })
        )

    }, [btnASCActive])


    

    return <div>
        <button 
            className={[styles.btn, btnASCActive === 'asc'? styles.btn_active : ''].join(" ")}
            onClick={e => {
                e.preventDefault();
                if(btnASCActive === 'asc'){
                    setBtnASCActive('unactive');
                }else{
                    setBtnASCActive('asc');
                }
           
            }}
        >
            prix ascendant
        </button>
        <button 
            className={[styles.btn, btnASCActive === 'desc' ? styles.btn_active : ''].join(" ")}

            onClick={e => {
                e.preventDefault();
                if(btnASCActive === 'desc'){
                    setBtnASCActive('unactive');
                }else{
                    setBtnASCActive('desc');
                }
            }}
            >
                prix descendant
        </button>

    </div>
}
