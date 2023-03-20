// import axios from "axios";
// const API_KEY = process.env.REACT_APP_SUBSCRIPTION_KEY;

// export const checkPatientDetails = (nhsNumber) => {
//   //   const url = `https://al-tech-test-apim.azure-api.net/tech-test/t2/patients/${nhsNumber}`;
//   const url =
//     "https://al-tech-test-apim.azure-api.net/tech-test/t2/patients/111222333";
//   return axios
//     .get(url, {
//       headers: {
//         "Ocp-Apim-Subscription-Key": API_KEY,
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
//       },
//     })
//     .catch((e) => {
//       console.log(e, "!!!!!");
//     });
// };

//above is the code I would have used without trying to use a CORS proxy, including the headers I sent with the get request

import axios from "axios";

const corsProxyUrl = "https://crossorigin.me/";
const apiUrl = "https://al-tech-test-apim.azure-api.net/tech-test/t2/patients/";

const API_KEY = process.env.REACT_APP_SUBSCRIPTION_KEY;

export const checkPatientDetails = (nhsNumber) => {
  const url = `${corsProxyUrl}${apiUrl}${nhsNumber}`;
  return axios.get(url, {
    headers: { "Ocp-Apim-Subscription-Key": API_KEY },
  });
};
