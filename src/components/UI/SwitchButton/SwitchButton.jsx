import React, { useState } from "react";
import "../SwitchButton/switchButton.scss";

const SwitchButton = () => {
  // TODO: использовать useState
  // сделано

  const [switchCheck, setSwitchCheck] = useState(false);

  const handleOnChange = () => {
    setSwitchCheck(!switchCheck);
    // switchValue();
  };

  // function switchValue(){
  //   if (switchCheck){
  //     document.querySelector(".button-switch__checkbox").value = "Да"
  //   } else {
  //     document.querySelector(".button-switch__checkbox").value = "Нет"
  //   }
  // }

  return (
    <div className="button-switch">
      <p className="button-switch__text button-switch__text_view">
        С обеспечением
      </p>
      <input
        type="checkbox"
        className="button-switch__checkbox"
        defaultChecked={switchCheck}
        onChange={handleOnChange}
      />
      <p className="button-switch__text button-switch__text_view">
        Без обеспечения
      </p>
    </div>
  );
};

export default SwitchButton;
