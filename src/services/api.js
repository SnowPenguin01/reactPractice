import axios from 'axios';

const apiForCalc = axios.get(process.env.REACT_APP_API_KEY);

export default apiForCalc;
