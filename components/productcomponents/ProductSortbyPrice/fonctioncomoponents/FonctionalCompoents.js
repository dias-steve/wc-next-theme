import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../../redux/productList/productList.action';



const mapSate = (state) => ({
    filter: state.productlist.filter
})

/*===================================================================
=            FONCTIONAL CONTAINER COMPONENT PRODUCT SORT PRICE     =
====================================================================*/

/**
 * Component fonctional manage button sorting
 * @param {*} param0 
 * @returns 
 */



export const  withContainer = (WrapperView, BtnView) => {
    return (function Container () {
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
    
       const handleClick = (value) => {
        if(btnASCActive === value){
            setBtnASCActive('unactive');
        }else{
            setBtnASCActive(value);
        }
       } 
       
       const isCheckedASC = btnASCActive === 'asc';
       const isCheckedDSC = btnASCActive === 'desc';
        return(
            <WrapperView>
            <BtnView 
            label={'Ascendant'}
            checked = {isCheckedASC}
            handleClick = {() => handleClick('asc') }
            />
            <BtnView 
            label={'Descendant'}
            checked = {isCheckedDSC}
            handleClick = {() => handleClick('desc') }
            />
            </WrapperView>
        );
    })
}

