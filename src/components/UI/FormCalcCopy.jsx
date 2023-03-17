import React from "react";

class FormCalcCopy extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            sum: []
        };
    }

    componentDidMount(){
        fetch('http://new.energobank.su/local/ajax/calculator.php?PID=15373')
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        sum: result.sum
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: true
                    }); 
                }
            )
    }


    render(){

        const { error, isLoaded, sum } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Загрузка...</div>;
          } else {
            return(
                <div className="calc-block__control">
                    <form action="" className="form-group">
                        <div className="button-switch">
                            <p className="button-switch__text button-switch__text_view">С обеспечением</p>
                            <input type="checkbox" className="button-switch__checkbox" />
                            <p className="button-switch__text button-switch__text_view">Без обеспечения</p>
                        </div>
                        <div className="form-input-group">
                            <p className="form-text">Сумма кредита</p>
                            <input className="form-input" type="text" id="amount" name="amount_money" placeholder="5 000 000₽" />
                            <input className="form-range sumFormAttr" type="range" id="amountRange" name="amountRange_money"  value="" />
                        </div>
                        <div className="under-form-text">
                            {sum.map(summa => (
                                <p className="form-text credit-number__min" key={summa.id}>
                                    {summa.min_value}
                                </p>
                            ))}
                            <p className="form-text credit-number__max"></p>
                        </div>
                        <div className="application-text">
                            <p>Для обсуждения персональных условий <a class="application-link" href="index.html">оставьте заявку</a></p>
                        </div>
                        <div className="form-input-group">
                            <p className="form-text">Срок кредита</p>
                            <input className="form-input" type="text" id="amountYear" name="amount_year" placeholder="2,5 года" />
                            <input className="form-range yearFormAttr" type="range" id="amountYears" name="amount_year" value="" />
                        </div>
                        <div className="under-form-text">
                            <p className="form-text credit-data__min"></p>
                            <p className="form-text credit-data__max"></p>
                        </div>
                    </form>
                </div>
            )
        }

        
    }
}

export default FormCalcCopy;