import React from "react";
import '../Modal/modal.scss';

const Modal = ({active, setActive}) => {

    

    return(
        <div className={active ? "modal active" : "modal"} onClick={() => {
            setActive(false)
        }}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <p className="modal__text">Ваша заявка в размере рублей успешно отправлена! <br />
                С обеспечением:  <br />
                Акция:  <br />
                На срок кредита: <br /></p>
            </div>
        </div>
    )
}

export default Modal;
