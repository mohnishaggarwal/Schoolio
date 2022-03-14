import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000";

export function subscribe(priceId) {
    return axios.post('/create-subscription', { priceId: priceId });
}




