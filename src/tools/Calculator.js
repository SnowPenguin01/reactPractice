function calc({rangeval, rangeval2}){
    let percent = 16.5 / 12 / 100;
    let isn = Math.pow(1 + percent, rangeval2);
    let rr = Math.ceil(rangeval * percent * (isn/(isn - 1))) + ' ₽/мес.';
    document.querySelector('.content-title').textContent = rr;
}

export default calc;
