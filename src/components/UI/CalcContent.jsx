import React from "react";

const CalcContent = () => {
    

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
                    <input className="checkbox-block_check" type="checkbox" id="check" name="interest" value="check" checked />
                    <p className="checkbox-block__text"><a href="index.html" className="checkbox-block__link">Акция</a>ставка 16,5%</p>
                </div>
                <div className="copy-text-block">
                    <p className="copy-text">Расчет является приблизительным,<a href="index.html" className="checkbox-block__link">c учетом возможных скидок</a>
                        и соблюдением всех условий по кредиту. Точные условия по кредиту и расчет вы получите после подачи заявки. Не является публичной офертой.</p>
                </div>
                <div className="button-to-send-block">
                    <button className="button-to-send">Отправить заявку</button>
                </div>
            </div>
            <div className="pseudo-block pseudo-block_first "></div> 
            <div className="pseudo-block pseudo-block_second "></div>
        </div>
    )
}

export default CalcContent;