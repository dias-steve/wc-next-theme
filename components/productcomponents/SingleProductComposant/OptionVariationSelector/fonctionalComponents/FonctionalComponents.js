import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { setVariationSelectedStart } from "../../../../../redux/singleproduct/singleproduct.reducer";
import {
  BtnOption,
  BtnOptionThumnail,
  SingleVariationListOptionView,
} from "../OptionVariableSelector";

const mapState = (state) => ({
  singleProduct: state.singleproduct,
});

/*=============================================
=            CONTAINER COMPONENT          =
=============================================*/

/**
 *
 * Fonctional container for Option BTN
 * */
export function BtnValueContainer({ name, variation_key }) {
  const { singleProduct } = useSelector(mapState);
  const {
    variations_selected,
    variations_stock_status,
    variation_list_detail,
  } = singleProduct;

  const isSelected = variations_selected?.[variation_key] === name;
  const isAvailable = variations_stock_status?.[variation_key]?.[name];
  const label =
    variation_list_detail?.[variation_key]?.[name]?.["name"] || name;
  const thumnail =
    variation_list_detail?.[variation_key]?.[name]?.thumnail || false;

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (isAvailable) {
      dispatch(setVariationSelectedStart({ [variation_key]: name }));
    }
  };

  if (thumnail) {
    return (
      <BtnOptionThumnail
        checked={isSelected}
        available={isAvailable}
        handleClick={handleClick}
        label={label}
        thumnail={thumnail}
      />
    );
  } else {
    return (
      <BtnOption
        checked={isSelected}
        available={isAvailable}
        handleClick={handleClick}
        label={label}
      />
    );
  }
}

/**
 *
 * Fonctional container for Single varaition row
 * */
function SingleVariationContainer({ variation }) {
  const {
    variation_name,
    variation_key,
    termes: { termes_names },
  } = variation;
  return (
    <SingleVariationListOptionView title={variation_name}>
      {termes_names.map((name) => (
        <BtnValueContainer
          key={uuidv4()}
          name={name}
          variation_key={variation_key}
        />
      ))}
    </SingleVariationListOptionView>
  );
}

/**
 *
 * Fonctional container for Global OptionVariable Container
 * */
export function OptionVariableSelectorContainer() {
  const { singleProduct } = useSelector(mapState);
  const { list_variations } = singleProduct;

  return (
    <>
      {list_variations.map((variation) => (
        <SingleVariationContainer key={uuidv4()} variation={variation} />
      ))}
    </>
  );
}
