const axios = require('axios');

import { URLAPI } from '@/utils/constants';
import {
    sendValidPhoneI,
    validPhoneExpertI,
    validEmailExpertI,
    sendRequisitionI,
    sendReviewI,
    sendExpertDataI
} from '@/interfaces/apiI';

type PromiseReturnT = { data: any };

const urlAPI = `${URLAPI}/v1`;

export const sendValidPhone = (phoneData: sendValidPhoneI): Promise<PromiseReturnT> => {
    return !phoneData || typeof phoneData !== 'object' ? Promise.reject() :
        axios.post(`${urlAPI}/validate/requisition/phone`, phoneData);
};
export const validPhoneExpert = (phoneData: validPhoneExpertI): Promise<PromiseReturnT> => {
    return !phoneData || typeof phoneData !== 'object' ? Promise.reject() :
        axios.post(`${urlAPI}/validate/expert/phone`, phoneData);
};
export const validEmailExpert = (emailData: validEmailExpertI): Promise<PromiseReturnT> => {
    return !emailData || typeof emailData !== 'object' ? Promise.reject() :
        axios.post(`${urlAPI}/validate/expert/email`, emailData);
};
export const sendRequisition = (sendData: sendRequisitionI): Promise<PromiseReturnT> => {
    return !sendData || typeof sendData !== 'object' ? Promise.reject() :
        axios.post(`${urlAPI}/requisition`, sendData);
};
export const sendReview = (sendData: sendReviewI): Promise<PromiseReturnT> => {
    return !sendData || typeof sendData !== 'object' ? Promise.reject() :
        axios.post(`${urlAPI}/review`, sendData);
};
export const sendExpertData = (dataForSend: sendExpertDataI): Promise<PromiseReturnT> => {
    return !dataForSend || typeof dataForSend !== 'object' ? Promise.reject() :
        axios.post(`${urlAPI}/expert`, dataForSend);
};
export const sendExpertDoc = (formData:any, id: number): Promise<PromiseReturnT> => {
    return !formData || typeof formData !== 'object' ?
        Promise.reject() :
        axios({
            method:  'post',
            //url:     `https://tellme.com.ua/api/v1/expert/${_id}/document`,
            url:     `${urlAPI}/expert/${id}/document`,
            data:    formData,
            headers: { 'Content-Type': 'multipart/form-data' },
        });
};
