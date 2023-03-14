import React from "react";
import InfoBlock from './UI/InfoBlock';
import Title from './UI/Title';
// import FormCalcCopy from './UI/FormCalcCopy';
import FormCalc from './UI/FormCalc';
import CalcContent from './UI/CalcContent';

const CalcSection = () => {

    return(
        <section>
            <div className="wrap wrap_theme-island wrap_border">
                <div className="container">
                    <InfoBlock />
                    <Title />
                    <div className="calc-block">
                        {/* <FormCalcCopy /> */}
                        <FormCalc />
                        <CalcContent />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CalcSection;