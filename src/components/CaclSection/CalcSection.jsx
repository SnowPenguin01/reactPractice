import React, { useState } from "react";
import InfoBlock from '../UI/InfoBlock/InfoBlock';
import Title from '../UI/Title/Title';
// import FormCalcCopy from '../UI/FormCaclCopy/FormCalcCopy';
import FormCalc from '../UI/FormCacl/FormCalc';
import CalcContent from '../UI/CalcContent/CalcContent';
import Modal from '../UI/Modal/Modal';
import '../CaclSection/CaclSection.scss';


const CalcSection = () => {

    const [modalActive, setModalActive] = useState(false)

    return(
        <section>
            <div className="wrap wrap_theme-island wrap_border">
                <div className="container">
                    <InfoBlock />
                    <Title />
                    <div className="calc-block">
                        {/* <FormCalcCopy /> */}
                        <FormCalc />
                        <CalcContent setModalActive={setModalActive}/>
                    </div>
                    <Modal active={modalActive} setActive={setModalActive} />
                </div>
            </div>
        </section>
    )
}

export default CalcSection;
