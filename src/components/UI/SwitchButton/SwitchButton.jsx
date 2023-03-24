import React from "react";

const SwitchButton = () => {
    

    return(
        <div className="button-switch">
            <p className="button-switch__text button-switch__text_view">С обеспечением</p>
            <input type="checkbox" className="button-switch__checkbox" defaultChecked onClick={() => {
                let with1 = "Да";
                let withOut = "Нет";

                if (document.querySelector('.button-switch__checkbox').checked){
                    document.querySelector('.button-switch__checkbox').value = withOut;
                }
                else{
                    document.querySelector('.button-switch__checkbox').value = with1;
                }
            }}/>
            <p className="button-switch__text button-switch__text_view">Без обеспечения</p>
        </div>
    )
}

export default SwitchButton;