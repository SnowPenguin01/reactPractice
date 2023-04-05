import axios from "axios";

// const baseURL = process.env.REACT_APP_API_KEY; // http://new.energobank.su/local/ajax

// const api = () => {
//   const instance = axios.create({
//     baseURL: baseURL,
//   });
// };

// const apiFuncs = {
//   getCalc: async (params) => await api().get(`/calculator.php`, { params }),
// };

// export default apiFuncs;






// старый пример
// import axios from "axios";
const apiForCalc = axios.get(process.env.REACT_APP_API_KEY);
export default apiForCalc;


// TODO: пример как лучше делать
/*
const baseURL = process.env.REACT_APP_API_KEY; // http://new.energobank.su/local/ajax

const api = () => {
  const instance = axios.create({
    baseURL: baseURL,
  });
};

const apiFuncs = {
  getCalc: async (params) => await api().get(`/calculator.php`, { params }),
  // И в файле FormCalc.jsx
  // import api from "../../../services/api";
  // и вместо apiForCalc.then( => api.getCalc({PID: 15373}).then
};

export default apiFuncs;
*/
