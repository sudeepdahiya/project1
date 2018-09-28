import {ROUTE_API,BASE_URL} from "./../config/apiConstant"
import axios from 'axios';

const client = axios.create({
    baseURL: BASE_URL
});

export const submitDirection = data => {
    return client.post(ROUTE_API,data);
}

export const getDirection = (token) => {
    return  client.get(ROUTE_API+'/'+token);
}


