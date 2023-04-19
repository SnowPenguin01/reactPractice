import React from "react";
import '../Button/Button.scss'

const Button = ({setModalActive}) => {

    return(
        <div className="button-to-send-block" onClick={() => {
            setModalActive(true);
        }}>
            <button className="button-to-send">Отправить заявку</button>
        </div>
    )
}

export default Button;
