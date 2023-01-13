import React, { Children, useEffect, useState } from "react";

import styles from "./OptionVariableSelector.module.scss";

import {withContainer } from "./OptionVariationSelector.func";

/*==========================================================================
=             PRESENTATIONAL COMPONENT  For Option VariableSelector        =
============================================================================*/

/**
 *
 * Btn option presentational
 * */
export function BtnOption({ checked, available, label, handleClick }) {
  return (
    <button
      className={[
        styles.option_btn,
        checked ? styles.selected : "",
        available ? "" : styles.option_not_available,
      ].join(" ")}
      onClick={(e) => {
        handleClick(e);
      }}
    >
      {label}
    </button>
  );
}

/**
 *
 * Btn option with thumnail
 * */
export function BtnOptionThumnail({
  checked,
  available,
  label,
  handleClick,
  thumnail,
}) {
  return (
    <button
      className={[
        styles.option_btn,
        checked ? styles.selected : "",
        available ? "" : styles.option_not_available,
        styles.with_thumnail,
      ].join(" ")}
      
      onClick={(e) => {
        handleClick(e);
      }}
    >
      {label}
    </button>
  );
}

/**
 *
 * Variables list Option Row
 * */
export function SingleVariationListOptionView({ children, title }) {
  return (
    <div>
      <span>{title} </span>
      {children}
    </div>
  );
}

/**
 * Global Selctor
 *
 * */
export function OptionVariableSelectorView(props) {
  return (
    <div className={styles.global_container_selector}>
      <span>Selector Option</span>
      {props.children}
    </div>
  );
}



export default withContainer(OptionVariableSelectorView,SingleVariationListOptionView,BtnOption,BtnOptionThumnail)
