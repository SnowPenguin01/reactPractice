import React, {useState} from "react";
import Button from "../Button/Button";
import '../CalcContent/CalcContent.scss';

const CalcContent = ({setModalActive}) => {
    
    const [promotionCheck, setPromotionCheck] = useState(true)

    const handleOnChange = () => {
        setPromotionCheck(!promotionCheck)
        promotionValue();
    };

    function promotionValue(){
      if (promotionCheck){
        document.querySelector('.checkbox-block_check').value = "Нет"
      } else {
        document.querySelector('.checkbox-block_check').value = "Да"
      }
    }

    return(
        <div className="calc-block__content calc-block__content_view">
            <div className="content-block">
                <div className="invoice-block">
                    <p className="content-text">Ежемесячный платеж</p>
                    <h3 className="content-title">75 000 ₽/мес.</h3>
                </div>
                <div className="credit-program-block">
                    <p className="content-text">Кредитная программа</p>
                    <h3 className="content-subtitle">Потребительский кредит</h3>
                    <p className="content-text">Ставка по кредиту</p>
                    <h3 className="content-subtitle">16,5%</h3>
                </div>
 
                <div className="checkbox-block">
                    <input className="checkbox-block_check" type="checkbox" defaultChecked={promotionCheck} onClick={handleOnChange}
                    />
                    <p className="checkbox-block__text"><a href="index.html" className="checkbox-block__link">Акция</a>ставка 16,5%</p>
                </div>
                <div className="copy-text-block">
                    <p className="copy-text">Расчет является приблизительным,<a href="index.html" className="checkbox-block__link">c учетом возможных скидок</a>
                        и соблюдением всех условий по кредиту. Точные условия по кредиту и расчет вы получите после подачи заявки. Не является публичной офертой.</p>
                </div>
                <Button setModalActive={setModalActive}/>
            </div>
            <div className="pseudo-block pseudo-block_first "></div> 
            <div className="pseudo-block pseudo-block_second "></div>
        </div>
    )
}

export default CalcContent;
