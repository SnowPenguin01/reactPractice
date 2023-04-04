import React from "react";
import '../InfoBlock/info-block.scss';

const InfoBlock = () => {
    

    const infoContent = [
        {
            "id": 1,
            "number": 1,
            "text": 'Соберите необходимое количество документов'
        },
        {
            "id": 2,
            "number": 2,
            "text": 'Оставьте заявку на сайте или в офисе банка'
        },
        {
            "id": 3,
            "number": 3,
            "text": 'Получите решение банка'
        },
    ]

    return(
        <div className="info-block">
                {infoContent.map( content => 
                    <div className="info-block__item info-block__item_view" key={content.id}>
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
