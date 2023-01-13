import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { setSortFilterAction } from '../../../../redux/productList/productList.reducer';

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
      
    
        const conevertStateToFilterSortValue = (btnState) => {
            switch(btnState) {
                case 'unactive':
                    return null;
                case 'asc':
                    return true;
                case 'desc':
                    return false;
            }
        }
        useEffect(() => {
            dispatch(
                setSortFilterAction({key: 'price',isASC: conevertStateToFilterSortValue(btnASCActive)})
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

