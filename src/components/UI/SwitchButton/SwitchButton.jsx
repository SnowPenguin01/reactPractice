import React from "react";
import '../SwitchButton/switchButton.scss';

const SwitchButton = ({formik, handleOnChangeSwitchBtn}) => {

    return (
        <div className="button-switch">
          <p className="button-switch__text button-switch__text_view">
            С обеспечением
          </p>
          <input
            type="checkbox"
            className="button-switch__checkbox"
            defaultChecked={formik.initialValues.switchCheckValue}
            onChange={handleOnChangeSwitchBtn}
          />
          <p className="button-switch__text button-switch__text_view">
            Без обеспечения
          </p>
        </div>
      );
    };

export default SwitchButton;
