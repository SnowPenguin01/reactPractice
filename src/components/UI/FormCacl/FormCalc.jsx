import React from "react";
import { Formik, Form, Field } from 'formik';
import SwitchButton from '../SwitchButton/SwitchButton';
// import apiForCalc from "../../../services/api";
// import calc from "../../../tools/Calculator";
import instance from "../../../services/api";
import '../FormCacl/FormCalc.scss';


const FormCalc = ({formik, sumTransfom, yearTransfom, handleOnChangeSwitchBtn}) => {

    const [valuesFromData, setValueFromData] = React.useState(null);
    
    React.useEffect(() => {
        instance.getCalc({PID: 15373}).then((response) => {
            setValueFromData(response.data);
        });
      }, []);

    if (!valuesFromData) return null;
    
    

    return(
        <div className="calc-block__control">
            <Formik>
                <Form action="" className="form-group">
                    <SwitchButton formik={formik} handleOnChangeSwitchBtn={handleOnChangeSwitchBtn}/>
                    <div className="form-input-group">
                        <p className="form-text">Сумма кредита</p>
                        <Field 
                            className="form-input"
                            type="text"
                            id="amount"
                            name="amount_money" 
                            placeholder="5 000 000₽" 
                            value={formik.values.sum}
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
                        <p className="form-text credit-number__min">{valuesFromData.sum.min_value + ' ₽'}</p>
                        <p className="form-text credit-number__max">{valuesFromData.sum.max_value + ' ₽'}</p>
                    </div>
                    <div className="application-text">
                        <p>Для обсуждения персональных условий <a className="application-link" href="index.html">оставьте заявку</a></p>
                    </div>
                    <div className="form-input-group">
                        <p className="form-text">Срок кредита</p>
                        <Field 
                            className="form-input" 
                            type="text" 
                            id="amountYear" 
                            name="amount_year" 
                            placeholder="2,5 года" 
                            value={formik.values.year}
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
                        <p className="form-text credit-data__min">{valuesFromData.term.min_value + ' мес.'}</p>
                        <p className="form-text credit-data__max">{valuesFromData.term.max_value / 12 + ' лет'}</p>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default FormCalc;
