import React from "react";

const InfoBlock = () => {
    

    const infoContent = [
        {
            "number": 1,
            "text": 'Соберите необходимое количество документов'
        },
        {
            "number": 2,
            "text": 'Оставьте заявку на сайте или в офисе банка'
        },
        {
            "number": 3,
            "text": 'Получите решение банка'
        },
    ]

    return(
        <div className="info-block">
                {infoContent.map( content => 
                    <div className="info-block__item info-block__item_view">
                        <div className="item__number item__number_view">
                            <p className="number number_view">{content.number}</p>
                        </div>
                        <div className="item__text">
                            <p className="text text_view">{content.text}</p>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default InfoBlock;