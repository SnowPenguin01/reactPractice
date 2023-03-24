import React from "react";
import axios from 'axios';
import SwitchButton from '../SwitchButton/SwitchButton';

const FormCalcCopy = () => {

    const [sum, setSum] = React.useState(null);
    const [year, setYear] = React.useState(null);
    const [rangeval, setRangeval] = React.useState(5000000);
    const [rangeval2, setRangeval2] = React.useState(42);

    function calc(){
        let percent = 16.5 / 12 / 100;
        let isn = Math.pow(1 + percent, rangeval2);
        let rr = Math.ceil(rangeval * percent * (isn/(isn - 1))) + ' ₽/мес.';
        document.querySelector('.content-title').textContent = rr;
    }

    function sumTransfom(event){
        let sumNumberRange = document.querySelector('#amountRange').value;
        let showSumNumber = new Intl.NumberFormat('ru-RU', {
            style: "currency",
            currency: 'RUB'
            }).format(sumNumberRange);

            document.querySelector('#amount').value = showSumNumber;
            setRangeval(event.target.value);
            calc();
    }

    function yearTransfom(event){
        let resultYears = document.querySelector('#amountYears').value + ' мес.';
            document.querySelector('#amountYear').value = resultYears;
            setRangeval2(event.target.value);
            calc();
    }
    
    React.useEffect(() => {
        axios.get(process.env.REACT_APP_API_KEY).then((response) => {
            setSum(response.data);
            setYear(response.data);
        });
      }, []);

    if (!sum || !year) return null;


    return(
        <div className="calc-block__control">
            <form action="" className="form-group">
                <SwitchButton />
                <div className="form-input-group">
                    <p className="form-text">Сумма кредита</p>
                    <input 
                        className="form-input"
                        type="text" id="amount" 
                        name="amount_money" 
                        placeholder="5 000 000₽" 
                        defaultValue={rangeval}
                    />
                    <input
                        className="form-range sumFormAttr" 
                        type="range" 
                        id="amountRange" 
                        name="amountRange_money" 
                        defaultValue={sum.sum.max_value / 2} 
                        min={sum.sum.min_value} 
                        max={sum.sum.max_value} 
                        onChange={sumTransfom} 
                    />
                </div>
                <div className="under-form-text">
                    <p className="form-text credit-number__min">{sum.sum.min_value + ' ₽'}</p>
                    <p className="form-text credit-number__max">{sum.sum.max_value + ' ₽'}</p>
                </div>
                <div className="application-text">
                    <p>Для обсуждения персональных условий <a class="application-link" href="index.html">оставьте заявку</a></p>
                </div>
                <div className="form-input-group">
                    <p className="form-text">Срок кредита</p>
                    <input 
                        className="form-input" 
                        type="text" 
                        id="amountYear" 
                        name="amount_year" 
                        placeholder="2,5 года" 
                        defaultValue={rangeval2}
                    />
                    <input 
                        className="form-range yearFormAttr" 
                        type="range" 
                        id="amountYears"
                        name="amount_year" 
                        defaultValue={sum.term.max_value / 2}
                        min={sum.term.min_value} 
                        max={sum.term.max_value}
                        onChange={yearTransfom}
                    />
                </div>
                <div className="under-form-text">
                    <p className="form-text credit-data__min">{sum.term.min_value + ' мес.'}</p>
                    <p className="form-text credit-data__max">{sum.term.max_value / 12 + ' лет'}</p>
                </div>
            </form>
        </div>
    )
}

export default FormCalcCopy;