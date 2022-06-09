import axios from "axios";
export const baseURLTransaction = {
  baseURLTransaction: `/api/PaymentGateway`,
};
const service = axios.create({
  baseURL: window._apis.PaymentGateway,
});
/**
 * Hàm
 * @param {*} url 
 * @param {*} configRequest 
 * @returns 
 */
export const CallService = (url, configRequest) => {
  return new Promise((reslove, reject) => {
    service(url, configRequest)
      .then((res) => reslove(res))
      .catch((err) => reject(err.response));
  });
};
