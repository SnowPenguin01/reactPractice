import React from "react";

const InfoBlock = () => {
    

    return(
        <div className="info-block">
            <div className="info-block__item info-block__item_view">
                <div className="item__number item__number_view">
                    <p className="number number_view">1</p>
                </div>
                <div className="item__text">
                    <p className="text text_view">Соберите необходимое</p>
                    <p className="text text_view"> количество документов</p>
                </div>
            </div>
            <div className="info-block__item info-block__item_view">
                <div className="item__number item__number_view">
                    <p className="number number_view">2</p>
                </div>
                <div className="item__text">
                    <p className="text text_view">Оставьте заявку на сайте</p>
                    <p className="text text_view">или в офисе банка</p>
                </div>
            </div>
            <div className="info-block__item info-block__item_view">
                <div className="item__number item__number_view">
                    <p className="number number_view">3</p>
                </div>
                <div className="item__text">
                    <p className="text text_view">Получите решение банка</p>
                </div>
            </div>
        </div>
    )
}

export default InfoBlock;