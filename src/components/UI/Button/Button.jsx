import React from "react";
import Modal from "../Modal/Modal"

const Button = ({setModalActive}) => {

    function clearForm() {
        let amount = document.getElementById("amount");
        let resetAmount = amount.value;
        let data = document.getElementById("amountYear");
        let resetData = data.value;
        let check1 = document.querySelector('.button-switch__checkbox').value;
        let check2 = document.querySelector('.checkbox-block_check').value;
        alert("Ваша заявка в размере " + resetAmount + " рублей успешно отправлена!\n"
                + "С обеспечением: " + check1 + "\n"
                + "Акция: " + check2 + "\n"
                + "На срок кредита: " + resetData + "\n");
        amount.value = "";
        data.value = "";
    }

    return(
        <div className="button-to-send-block" onClick={() => {
            // clearForm();
            setModalActive(true);
            // <Modal />
        }}>
            <button className="button-to-send">Отправить заявку</button>
        </div>
    )
}

export default Button;