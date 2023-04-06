import React, { useState } from "react";
import InfoBlock from "../UI/InfoBlock/InfoBlock";
import Title from "../UI/Title/Title";
// import FormCalcCopy from '../UI/FormCaclCopy/FormCalcCopy';
import FormCalc from "../UI/FormCacl/FormCalc";
import CalcContent from "../UI/CalcContent/CalcContent";
import Modal from "../UI/Modal/Modal";
import "../CaclSection/CaclSection.scss";
import { Formik, useFormik } from "formik";

const CalcSection = () => {
  const [modalActive, setModalActive] = useState(false);

  //   TODO: вынести Formik сюда

  const formik = useFormik({
    initialValues: {
      // switchCheck: false,
      //   defaultValueSum: rangeval,
      //   defaultValueYear: rangeval2,
      //   year: rangeval2,
    },
    onSubmit: (data) => {
      console.log(data);
      // Получил данные data, сохранил их в useState
      // Вызвал функцию setModalActive
    },
  });

  return (
    <section>
      <div className="wrap wrap_theme-island wrap_border">
        <div className="container">
          <InfoBlock />
          <Title />
          <div className="calc-block">
            <Formik>
              {/* <FormCalcCopy /> */}
              <FormCalc formik={formik} />
              <CalcContent formik={formik} setModalActive={setModalActive} />
            </Formik>
          </div>
          {/* TODO: прокинуть данные с formik в модалку */}
          <Modal active={modalActive} setActive={setModalActive} />
        </div>
      </div>
    </section>
  );
};

export default CalcSection;
