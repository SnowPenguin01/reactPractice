import React, { useState } from "react";
import { useFormik } from 'formik';
import InfoBlock from '../UI/InfoBlock/InfoBlock';
import Title from '../UI/Title/Title';
import calc from "../../tools/Calculator";
import FormCalc from '../UI/FormCacl/FormCalc';
import CalcContent from '../UI/CalcContent/CalcContent';
import Modal from '../UI/Modal/Modal';
import '../CaclSection/CaclSection.scss';


const CalcSection = () => {

    const [modalActive, setModalActive] = useState(false);
    const [rangeval, setRangeval] = React.useState(5000000);
    const [rangeval2, setRangeval2] = React.useState(42);
    const [switchChange, setSwitchChange] = React.useState(false);
    const [switchValue, setSwitchValue] = React.useState("Да");
    const [promotionChange, setPromotionChange] = React.useState(true);
    const [promotionValue, setPromotionValue] = React.useState("Да");
    

    function sumTransfom(event){
        let sumValue = event.target.value;
        let showSumNumber = new Intl.NumberFormat('ru-RU', {
            style: "currency",
            currency: 'RUB'
            }).format(sumValue);

        formik.setFieldValue("sum", showSumNumber);
        setRangeval(sumValue);
        calc({rangeval,rangeval2});
    }

    function yearTransfom(event){
        let yValue = event.target.value;
        let resultYears = yValue + ' мес.';
        formik.setFieldValue("year", resultYears);
        setRangeval2(yValue);
        calc({rangeval,rangeval2});
    }

    const handleOnChangeSwitchBtn = () => {
        setSwitchChange(!switchChange)
        switchTansform();
      };

    function switchTansform(){
        
        let setNewVal;

        switchChange ? setNewVal = 'Да' : setNewVal = 'Нет';
        
        formik.setFieldValue("switchVal", setNewVal);
        setSwitchValue(setNewVal);

    }

    const handleOnChangePromotionBtn = () => {
        setPromotionChange(!promotionChange)
        promotion();
    };

    function promotion(){

        let setNewProm;

        promotionChange ? setNewProm = 'Нет' : setNewProm = 'Да';
        
        formik.setFieldValue("promotionVal", setNewProm);
        setPromotionValue(setNewProm);
      }

    const formik = useFormik({
        initialValues: {
            switchCheckValue: switchChange,
            switchVal: switchValue,
            promotionCheckValue: promotionChange,
            promotionVal: promotionValue,
            defaultValueSum: rangeval,
            defaultValueYear: rangeval2,
            sum: rangeval,
            year: rangeval2,
    },
    onSubmit: (values) => {
        console.log(values);
      // Получил данные data, сохранил их в useState
      // Вызвал функцию setModalActive
        },
    });

    return(
        <section>
            <div className="wrap wrap_theme-island wrap_border">
                <div className="container">
                    <InfoBlock />
                    <Title />
                    <div className="calc-block">
                        <FormCalc 
                            formik={formik} 
                            sumTransfom={sumTransfom} 
                            yearTransfom={yearTransfom} 
                            handleOnChangeSwitchBtn={handleOnChangeSwitchBtn}
                        />
                        <CalcContent 
                            formik={formik} 
                            setModalActive={setModalActive} 
                            handleOnChangePromotionBtn={handleOnChangePromotionBtn}
                        />
                    </div>
                    <Modal active={modalActive} setActive={setModalActive} formik={formik}/>
                </div>
            </div>
        </section>
    )
}

export default CalcSection;
