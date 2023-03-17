import React, { useState } from "react";
import InfoBlock from './UI/InfoBlock';
import Title from './UI/Title';
import FormCalcCopy from './UI/FormCalcCopy';
// import FormCalc from './UI/FormCalc';
import CalcContent from './UI/CalcContent';
import Modal from './UI/Modal';
import Button from './UI/Button';


const CalcSection = () => {

    const [modalActive, setModalActive] = useState(false)

    return(
        <section>
            <div className="wrap wrap_theme-island wrap_border">
                <div className="container">
                    <InfoBlock />
                    <Title />
                    <div className="calc-block">
                        <FormCalcCopy />
                        {/* <FormCalc /> */}
                        <CalcContent setModalActive={setModalActive}/>
                    </div>
                    <Modal active={modalActive} setActive={setModalActive} />
                </div>
            </div>
        </section>
    )
}

export default CalcSection;
