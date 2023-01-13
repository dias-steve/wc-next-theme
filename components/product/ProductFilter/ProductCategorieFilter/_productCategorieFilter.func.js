import React from "react";
import { isCategorySelected } from "../../../../utils/Product/productFilter/productFilter.utils";
import {
  addCategoryToFilter,
  removeCategoryToFilter,
} from "../../../../redux/productList/productList.reducer";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const mapState = (state) => ({
  filter: state.productlist.filter,
});

/*===================================================================
=            FONCTIONAL CONTAINER COMPONENT FILTER CATEGORY        =
====================================================================*/

export function withContainer(WrapperViewComponant, BtnViewComponent) {
  /**
   *
   *
   * Container filter
   * @param {*} category
   * @returns
   */
  const FilterBtnContainer = ({ category }) => {
    const dispatch = useDispatch();
    const { filter } = useSelector(mapState);
    const { name, term_id } = category;
    const checked = isCategorySelected(term_id, filter);
    const handleClick = async (e) => {
      if (!isCategorySelected(term_id, filter)) {
        dispatch(addCategoryToFilter(term_id));
      } else {
        dispatch(removeCategoryToFilter(term_id));
      }
    };

    return (
      <BtnViewComponent
        handleClick={handleClick}
        label={name}
        checked={checked}
      />
    );
  };

  /**
   *
   * Return Principal
   */
  return function ProductCategorieFilterContainer({ categorieData }) {
    const { categorie_flat } = categorieData;
    return (
      <WrapperViewComponant>
        {categorie_flat.map((category) => {
          return <FilterBtnContainer key={uuidv4()} category={category} />;
        })}
      </WrapperViewComponant>
    );
  };
}
