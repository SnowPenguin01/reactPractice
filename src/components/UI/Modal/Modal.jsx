import React from "react";
import '../Modal/modal.scss';
 
const Modal = ({active, setActive, formik}) => {

    return(
        <div className={active ? "modal active" : "modal"} onClick={() => {
            setActive(false)
        }}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <p className="modal__text">Ваша заявка в размере {formik.values.sum} рублей успешно отправлена! <br />
                С обеспечением: {formik.values.switchVal} <br />
                Акция 16,5%: {formik.values.promotionVal}  <br />
                На срок кредита: {formik.values.year} <br /></p>
            </div>
        </div>
    )
}

export default Modal;
