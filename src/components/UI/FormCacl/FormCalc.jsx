import React from "react";
import { Formik, Form, Field } from "formik";
import SwitchButton from "../SwitchButton/SwitchButton";
import apiForCalc from "../../../services/api";
import calc from "../../../tools/Calculator";
// import api from "../../../services/api";
import '../FormCacl/FormCalc.scss';

const FormCalc = () => {
  const [valuesFromData, setValueFromData] = React.useState(null);
  const [rangeval, setRangeval] = React.useState(5000000);
  const [rangeval2, setRangeval2] = React.useState(42);

  function sumTransfom(event) {
    let sumNumberRange = document.querySelector("#amountRange").value;
    let showSumNumber = new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
    }).format(sumNumberRange);

    document.querySelector("#amount").value = showSumNumber;
    setRangeval(event.target.value);
    calc({ rangeval, rangeval2 });
  }

  function yearTransfom(event) {
    let resultYears = document.querySelector("#amountYears").value + " мес.";
    document.querySelector("#amountYear").value = resultYears;
    setRangeval2(event.target.value);
    calc({ rangeval, rangeval2 });
  }
  
  const formik = useFormik({
        initialValues: {
            defaultValueSum: rangeval,
            defaultValueYear: rangeval2,
        },
      });

  React.useEffect(() => {
    apiForCalc.then((response) => {
      setValueFromData(response.data);
    });
  }, []);

  if (!valuesFromData) return null;

  return (
    <div className="calc-block__control">
      {/* TODO: реализовать форму с использованием useState, пример формы https://formik.org/docs/tutorial */}
      <Formik>
        <Form action="" className="form-group">
          <SwitchButton />
          <div className="form-input-group">
            <p className="form-text">Сумма кредита</p>
            <Field
              className="form-input"
              type="text"
              id="amount"
              name="amount_money"
              placeholder="5 000 000₽"
              defaultValue={formik.initialValues.defaultValueSum}
            />
            <Field
              className="form-range sumFormAttr"
              type="range"
              id="amountRange"
              name="amountRange_money"
              defaultValue={formik.initialValues.defaultValueSum}
              min={valuesFromData.sum.min_value} 
              max={valuesFromData.sum.max_value}
              onChange={sumTransfom}
            />
          </div>
          <div className="under-form-text">
            <p className="form-text credit-number__min">
              {valuesFromData.sum.min_value + " ₽"}
            </p>
            <p className="form-text credit-number__max">
              {valuesFromData.sum.max_value + " ₽"}
            </p>
          </div>
          <div className="application-text">
            <p>Для обсуждения персональных условий
              <a className="application-link" href="index.html">оставьте заявку</a>
            </p>
          </div>
          <div className="form-input-group">
            <p className="form-text">Срок кредита</p>
            <Field
              className="form-input"
              type="text"
              id="amountYear"
              name="amount_year"
              placeholder="2,5 года"
              defaultValue={formik.initialValues.defaultValueYear}
            />
            <Field
              className="form-range yearFormAttr"
              type="range"
              id="amountYears"
              name="amount_year"
              defaultValue={formik.initialValues.defaultValueYear}
              min={valuesFromData.term.min_value} 
              max={valuesFromData.term.max_value}
              onChange={yearTransfom}
            />
          </div>
          <div className="under-form-text">
            <p className="form-text credit-data__min">
              {valuesFromData.term.min_value + " мес."}
            </p>
            <p className="form-text credit-data__max">
              {valuesFromData.term.max_value / 12 + " лет"}
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormCalc;
